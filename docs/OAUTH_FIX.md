# OAuth Redirect Fix - Multi-Language Support

## Problem
After Google OAuth authentication, users remained on `/en/auth` instead of being redirected home.

## Root Cause
The OAuth callback URL was hardcoded without locale support:
- Old: `http://localhost:3000/auth/callback`
- The callback handler and redirect logic didn't preserve the user's selected language

## Solution Applied

### 1. Updated `signInWithGoogle` Server Action
**File**: `src/app/actions/auth-actions.ts`

```typescript
export async function signInWithGoogle(locale: string = 'fr'): Promise<{ url?: string; error?: string }> {
  // ...
  redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/auth/callback`,
  // ...
}
```

Now accepts a locale parameter to build locale-aware callback URLs.

### 2. Updated AuthPage Component
**File**: `src/components/auth/AuthPage.tsx`

```typescript
const result = await signInWithGoogle(locale)
```

Passes the current locale to the Google sign-in function.

### 3. Updated Callback Route Handler
**File**: `src/app/[locale]/auth/callback/route.ts`

```typescript
export async function GET(
  request: Request,
  { params }: { params: Promise<{ locale: string }> }
) {
  const { locale } = await params
  const redirectTo = requestUrl.searchParams.get('redirect_to') || `/${locale}`
  // ...
  return NextResponse.redirect(`${origin}${redirectTo}`)
}
```

Now extracts locale from the route params and includes it in redirects.

## Google Cloud Console Configuration

You need to add ALL locale-specific callback URLs to your Google OAuth2 credentials:

### For Development (localhost:3000)
- `http://localhost:3000/fr/auth/callback`
- `http://localhost:3000/en/auth/callback`
- `http://localhost:3000/nl/auth/callback`

### For Supabase (Production)
Keep the existing Supabase callback:
- `https://xgdqhbpvueadbfqccavi.supabase.co/auth/v1/callback`

## Steps to Update Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project
3. Navigate to: **APIs & Services** → **Credentials**
4. Click on your OAuth 2.0 Client ID
5. Under **Authorized redirect URIs**, add:
   - `http://localhost:3000/fr/auth/callback`
   - `http://localhost:3000/en/auth/callback`
   - `http://localhost:3000/nl/auth/callback`
6. Keep the existing Supabase redirect URI
7. Click **Save**

## OAuth Flow (Updated)

```
User clicks "Google Login" on /en/auth
    ↓
signInWithGoogle('en') called
    ↓
Supabase generates OAuth URL with redirectTo=/en/auth/callback
    ↓
User authenticates with Google
    ↓
Google redirects to: https://supabase-url/auth/v1/callback?code=...
    ↓
Supabase processes OAuth and redirects to: http://localhost:3000/en/auth/callback?code=...
    ↓
Our callback handler at /[locale]/auth/callback extracts code & locale
    ↓
exchangeCodeForSession(code)
    ↓
Update user profile (last_login_at)
    ↓
Redirect to: http://localhost:3000/en
    ↓
Middleware detects authenticated user
    ↓
User sees home page in their selected language ✓
```

## Testing

Test all three locales:
1. Navigate to `http://localhost:3000/en/auth`
2. Click "Sign in with Google"
3. Complete authentication
4. Verify you land on `http://localhost:3000/en` (not `/en/auth`)

Repeat for `/fr/auth` and `/nl/auth`.

## Notes

- The locale is preserved through the entire OAuth flow
- After successful authentication, users are redirected to the home page in their selected language
- The middleware prevents authenticated users from accessing `/[locale]/auth`
