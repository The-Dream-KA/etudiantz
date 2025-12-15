import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

// Import translations
import frTranslations from '@/locales/fr.json'
import enTranslations from '@/locales/en.json'
import nlTranslations from '@/locales/nl.json'

const translations = {
    fr: frTranslations,
    en: enTranslations,
    nl: nlTranslations,
} as const

type Locale = 'fr' | 'en' | 'nl'

export default async function DashboardPage({
    params,
}: {
    params: Promise<{ locale: Locale }>
}) {
    const { locale } = await params
    const t = translations[locale].Dashboard

    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        redirect(`/${locale}/auth`)
    }

    // Get user profile
    const { data: profile } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', user.id)
        .single()

    // Helper function to translate role
    const getTranslatedRole = (role: string | null) => {
        if (!role) return t.roles.student
        return t.roles[role as keyof typeof t.roles] || role
    }

    // Helper function to translate status
    const getTranslatedStatus = (status: string | null) => {
        if (!status) return t.statuses.active
        return t.statuses[status as keyof typeof t.statuses] || status
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            {t.title}
                        </h1>
                        <p className="text-gray-600">
                            {t.welcome}, {profile?.full_name || user.email}!
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">{t.stats.logins}</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {profile?.login_count || 0}
                                    </p>
                                </div>
                                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">{t.stats.status}</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {getTranslatedStatus(profile?.status)}
                                    </p>
                                </div>
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">{t.stats.role}</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {getTranslatedRole(profile?.role)}
                                    </p>
                                </div>
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Profile Info */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">
                            {t.profileInfo.title}
                        </h2>
                        <div className="space-y-3">
                            <div>
                                <p className="text-sm text-gray-600">{t.profileInfo.email}</p>
                                <p className="text-gray-900 font-medium">{user.email}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">{t.profileInfo.fullName}</p>
                                <p className="text-gray-900 font-medium">{profile?.full_name || t.profileInfo.notSet}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">{t.profileInfo.language}</p>
                                <p className="text-gray-900 font-medium uppercase">{profile?.preferred_language || 'fr'}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">{t.profileInfo.emailVerified}</p>
                                <p className="text-gray-900 font-medium">
                                    {profile?.email_verified ? `✅ ${t.profileInfo.yes}` : `❌ ${t.profileInfo.no}`}
                                </p>
                            </div>
                            {profile?.last_login_at && (
                                <div>
                                    <p className="text-sm text-gray-600">{t.profileInfo.lastLogin}</p>
                                    <p className="text-gray-900 font-medium">
                                        {new Date(profile.last_login_at).toLocaleString(locale === 'en' ? 'en-US' : locale === 'nl' ? 'nl-NL' : 'fr-FR')}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">
                            {t.quickActions.title}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <button className="p-4 border border-gray-200 rounded-lg hover:border-cyan-500 hover:bg-cyan-50 transition-all text-left">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">{t.quickActions.courses.title}</p>
                                        <p className="text-sm text-gray-600">{t.quickActions.courses.description}</p>
                                    </div>
                                </div>
                            </button>

                            <button className="p-4 border border-gray-200 rounded-lg hover:border-cyan-500 hover:bg-cyan-50 transition-all text-left">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">{t.quickActions.schedule.title}</p>
                                        <p className="text-sm text-gray-600">{t.quickActions.schedule.description}</p>
                                    </div>
                                </div>
                            </button>

                            <button className="p-4 border border-gray-200 rounded-lg hover:border-cyan-500 hover:bg-cyan-50 transition-all text-left">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">{t.quickActions.documents.title}</p>
                                        <p className="text-sm text-gray-600">{t.quickActions.documents.description}</p>
                                    </div>
                                </div>
                            </button>

                            <button className="p-4 border border-gray-200 rounded-lg hover:border-cyan-500 hover:bg-cyan-50 transition-all text-left">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">{t.quickActions.community.title}</p>
                                        <p className="text-sm text-gray-600">{t.quickActions.community.description}</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
