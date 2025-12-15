import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(
    request: Request,
    { params }: { params: Promise<{ locale: string }> }
) {
    const { locale } = await params
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')
    const origin = requestUrl.origin
    const redirectTo = requestUrl.searchParams.get('redirect_to') || `/${locale}`

    if (code) {
        const supabase = await createClient()
        const { error } = await supabase.auth.exchangeCodeForSession(code)

        if (!error) {
            // Get the user to log the OAuth event
            const {
                data: { user },
            } = await supabase.auth.getUser()

            if (user) {
                // Update last login info
                await supabase
                    .from('user_profiles')
                    .update({
                        last_login_at: new Date().toISOString(),
                    })
                    .eq('id', user.id)
            }

            // Redirect to the requested page or home with locale
            return NextResponse.redirect(`${origin}${redirectTo}`)
        }
    }

    // If there's an error, redirect to auth page with error
    return NextResponse.redirect(`${origin}/${locale}/auth?error=oauth_callback_failed`)
}
