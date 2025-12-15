import AuthPage from '@/components/auth/AuthPage'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function Page() {
    const supabase = await createClient()

    // Check if user is already authenticated
    const {
        data: { user },
    } = await supabase.auth.getUser()

    // Redirect authenticated users to home page
    if (user) {
        redirect('/')
    }

    return <AuthPage />
}
