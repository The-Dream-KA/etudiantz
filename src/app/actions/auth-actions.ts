'use server'

import { createClient } from '@/lib/supabase/server'
import { headers } from 'next/headers'

export type AuthActionResult = {
    success: boolean
    error?: string
    message?: string
}

/**
 * Sign in with email and password
 */
export async function signIn(
    email: string,
    password: string
): Promise<AuthActionResult> {
    const supabase = await createClient()

    // Get request headers for audit logging
    const headersList = await headers()
    const ipAddress = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || 'unknown'
    const userAgent = headersList.get('user-agent') || 'unknown'

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            // Log failed attempt
            await logAuthEvent({
                userId: null,
                eventType: 'sign_in_failed',
                eventData: { email, reason: error.message },
                ipAddress,
                userAgent,
                success: false,
                errorMessage: error.message,
            })

            return { success: false, error: error.message }
        }

        if (data.user) {
            // Update user profile with login info
            const { data: profile } = await supabase
                .from('user_profiles')
                .select('login_count')
                .eq('id', data.user.id)
                .single()

            await supabase
                .from('user_profiles')
                .update({
                    last_login_at: new Date().toISOString(),
                    last_login_ip: ipAddress,
                    login_count: (profile?.login_count || 0) + 1,
                })
                .eq('id', data.user.id)

            // Log successful login
            await logAuthEvent({
                userId: data.user.id,
                eventType: 'sign_in_success',
                eventData: { email, provider: 'email' },
                ipAddress,
                userAgent,
                success: true,
            })
        }

        return { success: true, message: 'Successfully signed in' }
    } catch (error) {
        console.error('Sign in error:', error)
        return { success: false, error: 'An unexpected error occurred' }
    }
}

/**
 * Sign up with email and password
 */
export async function signUp(
    email: string,
    password: string,
    fullName?: string
): Promise<AuthActionResult> {
    const supabase = await createClient()

    const headersList = await headers()
    const ipAddress = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || 'unknown'
    const userAgent = headersList.get('user-agent') || 'unknown'

    try {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: fullName,
                },
                emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/auth/callback`,
            },
        })

        if (error) {
            await logAuthEvent({
                userId: null,
                eventType: 'sign_up_failed',
                eventData: { email, reason: error.message },
                ipAddress,
                userAgent,
                success: false,
                errorMessage: error.message,
            })

            return { success: false, error: error.message }
        }

        if (data.user) {
            await logAuthEvent({
                userId: data.user.id,
                eventType: 'sign_up_success',
                eventData: { email, provider: 'email' },
                ipAddress,
                userAgent,
                success: true,
            })
        }

        return {
            success: true,
            message: 'Account created! Please check your email to verify your account.',
        }
    } catch (error) {
        console.error('Sign up error:', error)
        return { success: false, error: 'An unexpected error occurred' }
    }
}

/**
 * Sign out
 */
export async function signOut(): Promise<AuthActionResult> {
    try {
        const supabase = await createClient()

        const {
            data: { user },
        } = await supabase.auth.getUser()

        // Log the sign-out event BEFORE actually signing out
        // This ensures the database operation completes while the session is still valid
        if (user) {
            const headersList = await headers()
            const ipAddress = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || 'unknown'
            const userAgent = headersList.get('user-agent') || 'unknown'

            // Don't await - fire and forget to prevent blocking
            logAuthEvent({
                userId: user.id,
                eventType: 'sign_out',
                eventData: {},
                ipAddress,
                userAgent,
                success: true,
            }).catch(err => console.error('Failed to log sign out event:', err))
        }

        // Sign out with scope 'local' to clear cookies
        const { error } = await supabase.auth.signOut({ scope: 'local' })

        if (error) {
            console.error('Sign out error:', error)
            return { success: false, error: error.message }
        }

        return { success: true, message: 'Successfully signed out' }
    } catch (error) {
        console.error('Sign out error:', error)
        return { success: false, error: 'An unexpected error occurred' }
    }
}

/**
 * Sign in with Google OAuth
 */
export async function signInWithGoogle(locale: string = 'fr'): Promise<{ url?: string; error?: string }> {
    const supabase = await createClient()

    try {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/${locale}/auth/callback`,
                queryParams: {
                    access_type: 'offline',
                    prompt: 'consent',
                },
            },
        })

        if (error) {
            return { error: error.message }
        }

        if (data.url) {
            return { url: data.url }
        }

        return { error: 'Failed to generate OAuth URL' }
    } catch (error) {
        console.error('Google sign in error:', error)
        return { error: 'An unexpected error occurred' }
    }
}

/**
 * Request password reset
 */
export async function resetPassword(email: string): Promise<AuthActionResult> {
    const supabase = await createClient()

    const headersList = await headers()
    const ipAddress = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || 'unknown'
    const userAgent = headersList.get('user-agent') || 'unknown'

    try {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/auth/reset-password`,
        })

        if (error) {
            await logAuthEvent({
                userId: null,
                eventType: 'password_reset_request_failed',
                eventData: { email, reason: error.message },
                ipAddress,
                userAgent,
                success: false,
                errorMessage: error.message,
            })

            return { success: false, error: error.message }
        }

        // Don't reveal if email exists or not for security
        return {
            success: true,
            message: 'If an account exists with this email, you will receive a password reset link.',
        }
    } catch (error) {
        console.error('Password reset error:', error)
        return { success: false, error: 'An unexpected error occurred' }
    }
}

/**
 * Update password (when user is logged in)
 */
export async function updatePassword(newPassword: string): Promise<AuthActionResult> {
    const supabase = await createClient()

    try {
        const { error } = await supabase.auth.updateUser({
            password: newPassword,
        })

        if (error) {
            return { success: false, error: error.message }
        }

        const {
            data: { user },
        } = await supabase.auth.getUser()

        if (user) {
            const headersList = await headers()
            const ipAddress = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || 'unknown'
            const userAgent = headersList.get('user-agent') || 'unknown'

            await logAuthEvent({
                userId: user.id,
                eventType: 'password_updated',
                eventData: {},
                ipAddress,
                userAgent,
                success: true,
            })
        }

        return { success: true, message: 'Password updated successfully' }
    } catch (error) {
        console.error('Update password error:', error)
        return { success: false, error: 'An unexpected error occurred' }
    }
}

/**
 * Helper function to log auth events
 */
async function logAuthEvent(params: {
    userId: string | null
    eventType: string
    eventData: Record<string, unknown>
    ipAddress: string
    userAgent: string
    success: boolean
    errorMessage?: string
}) {
    const supabase = await createClient()

    try {
        await supabase.from('auth_audit_logs').insert({
            user_id: params.userId,
            event_type: params.eventType,
            event_data: params.eventData,
            ip_address: params.ipAddress,
            user_agent: params.userAgent,
            success: params.success,
            error_message: params.errorMessage,
        })
    } catch (error) {
        console.error('Failed to log auth event:', error)
    }
}
