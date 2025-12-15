'use client'

import { useState, FormEvent } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { signIn, signUp, signInWithGoogle, resetPassword } from '@/app/actions/auth-actions'
import '@/styles/components/auth.css'

// Import translations
import frTranslations from '@/locales/fr.json'
import enTranslations from '@/locales/en.json'
import nlTranslations from '@/locales/nl.json'

const translations = {
    fr: frTranslations,
    en: enTranslations,
    nl: nlTranslations,
} as const

type Locale = keyof typeof translations
type AuthMode = 'signin' | 'signup' | 'reset'

export default function AuthPage() {
    const params = useParams()
    const locale = (params?.locale as Locale) || 'fr'
    const t = translations[locale].Auth

    const router = useRouter()
    const [mode, setMode] = useState<AuthMode>('signin')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const resetForm = () => {
        setEmail('')
        setPassword('')
        setFullName('')
        setError('')
        setSuccessMessage('')
        setShowPassword(false)
    }

    const handleModeChange = (newMode: AuthMode) => {
        setMode(newMode)
        resetForm()
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError('')
        setSuccessMessage('')
        setIsLoading(true)

        try {
            if (mode === 'reset') {
                const result = await resetPassword(email)
                if (result.success) {
                    setSuccessMessage(result.message || 'Password reset email sent!')
                    setEmail('')
                } else {
                    setError(result.error || 'Failed to send reset email')
                }
            } else if (mode === 'signup') {
                if (password.length < 8) {
                    setError(t.errors.passwordTooShort)
                    setIsLoading(false)
                    return
                }

                const result = await signUp(email, password, fullName)
                if (result.success) {
                    setSuccessMessage(result.message || t.errors.accountCreationFailed)
                    setTimeout(() => {
                        router.push(`/${locale}`)
                        router.refresh()
                    }, 1500)
                } else {
                    setError(result.error || t.errors.accountCreationFailed)
                }
            } else {
                const result = await signIn(email, password)
                if (result.success) {
                    router.push(`/${locale}`)
                    router.refresh()
                } else {
                    setError(result.error || t.errors.invalidCredentials)
                }
            }
        } catch (err) {
            setError(t.errors.unexpectedError)
            console.error('Auth error:', err)
        } finally {
            setIsLoading(false)
        }
    }

    const handleGoogleSignIn = async () => {
        setError('')
        setIsLoading(true)

        try {
            const result = await signInWithGoogle(locale)
            if (result.url) {
                window.location.href = result.url
            } else {
                setError(result.error || t.errors.googleSignInFailed)
                setIsLoading(false)
            }
        } catch (err) {
            setError(t.errors.unexpectedError)
            setIsLoading(false)
            console.error('Google sign in error:', err)
        }
    }

    const renderForm = () => {
        if (mode === 'reset') {
            return (
                <>
                    <div className="auth-header">
                        <h1 className="auth-title">{t.resetPassword.title}</h1>
                        <p className="auth-subtitle">
                            {t.resetPassword.subtitle}
                        </p>
                    </div>

                    <form className="auth-form" onSubmit={handleSubmit}>
                        {successMessage && <p className="success-message">{successMessage}</p>}
                        {error && <p className="error-message">⚠ {error}</p>}

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">
                                {t.email}
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="form-input"
                                placeholder={t.emailPlaceholder}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={isLoading}
                            />
                        </div>

                        <button type="submit" className="submit-button" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <span className="button-spinner" />
                                    {t.resetPassword.sending}
                                </>
                            ) : (
                                t.resetPassword.sendButton
                            )}
                        </button>

                        <div className="forgot-password-link">
                            <a href="#" onClick={(e) => { e.preventDefault(); handleModeChange('signin'); }}>
                                {t.resetPassword.backToSignIn}
                            </a>
                        </div>
                    </form>
                </>
            )
        }

        return (
            <>
                <div className="auth-header">
                    <h1 className="auth-title">{t.title}</h1>
                </div>

                <div className="tab-container">
                    <button
                        type="button"
                        className={`tab-button ${mode === 'signin' ? 'active' : ''}`}
                        onClick={() => handleModeChange('signin')}
                        disabled={isLoading}
                    >
                        {t.signInTab}
                    </button>
                    <button
                        type="button"
                        className={`tab-button ${mode === 'signup' ? 'active' : ''}`}
                        onClick={() => handleModeChange('signup')}
                        disabled={isLoading}
                    >
                        {t.signUpTab}
                    </button>
                </div>

                <form className="auth-form" onSubmit={handleSubmit}>
                    {error && <p className="error-message">⚠ {error}</p>}
                    {successMessage && <p className="success-message">{successMessage}</p>}

                    {mode === 'signup' && (
                        <div className="form-group">
                            <label htmlFor="fullName" className="form-label">
                                {t.fullName}
                            </label>
                            <input
                                id="fullName"
                                type="text"
                                className="form-input"
                                placeholder={t.fullNamePlaceholder}
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                disabled={isLoading}
                            />
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            {t.email}
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="form-input"
                            placeholder={t.emailPlaceholder}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            disabled={isLoading}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="form-label">
                            {t.password}
                        </label>
                        <div className="password-input-wrapper">
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                className="form-input"
                                placeholder={t.passwordPlaceholder}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                disabled={isLoading}
                                minLength={mode === 'signup' ? 8 : undefined}
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                                disabled={isLoading}
                                aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                            >
                                {showPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {mode === 'signin' && (
                        <div className="forgot-password-link">
                            <a href="#" onClick={(e) => { e.preventDefault(); handleModeChange('reset'); }}>
                                {t.forgotPassword}
                            </a>
                        </div>
                    )}

                    <button type="submit" className="submit-button" disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <span className="button-spinner" />
                                {mode === 'signup' ? t.loading.signingUp : t.loading.signingIn}
                            </>
                        ) : (
                            mode === 'signup' ? t.signUpButton : t.signInButton
                        )}
                    </button>

                    <div className="divider">{t.orDivider}</div>

                    <button
                        type="button"
                        className="oauth-button"
                        onClick={handleGoogleSignIn}
                        disabled={isLoading}
                    >
                        <svg className="oauth-icon" viewBox="0 0 24 24">
                            <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            />
                            <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            />
                        </svg>
                        {t.googleLogin}
                    </button>
                </form>

                {mode === 'signin' && (
                    <div className="auth-footer">
                        <p>
                            {t.notRegistered}{' '}
                            <a href="#" onClick={(e) => { e.preventDefault(); handleModeChange('signup'); }}>
                                {t.createAccount}
                            </a>
                        </p>
                    </div>
                )}
            </>
        )
    }

    return (
        <div className="auth-container">
            <div className="auth-card">
                {renderForm()}
            </div>
        </div>
    )
}
