import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { updateSession } from '@/lib/supabase/middleware';

const locales = ['en', 'fr', 'nl'];
const defaultLocale = 'fr';

export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Handle Supabase auth session and redirects first
    const supabaseResponse = await updateSession(request);

    // If Supabase middleware returned a redirect, return it
    if (supabaseResponse.status === 307 || supabaseResponse.status === 308) {
        return supabaseResponse;
    }

    // Check if the pathname is missing a locale
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    // Redirect to default locale if no locale is present
    if (pathnameIsMissingLocale) {
        const redirectResponse = NextResponse.redirect(
            new URL(`/${defaultLocale}${pathname}`, request.url)
        );
        // Preserve Supabase cookies in the redirect
        supabaseResponse.cookies.getAll().forEach((cookie) => {
            redirectResponse.cookies.set(cookie.name, cookie.value, cookie);
        });
        return redirectResponse;
    }

    return supabaseResponse;
}

export const config = {
    matcher: [
        // Skip all internal paths (_next, assets, api)
        '/((?!_next|api|favicon.ico|icons|logo).*)',
    ],
};
