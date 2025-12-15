# Authentication System Documentation

## Overview

This authentication system is built with **Supabase**, **Next.js 14+**, and implements enterprise-grade security features for a scalable super-app.

## Features

### 🔐 Security Features
- **Row Level Security (RLS)** on all tables
- **Email/Password authentication** with secure password hashing
- **OAuth authentication** (Google)
- **Password reset** functionality
- **Email verification** system
- **Session management** with tracking
- **Audit logging** for all auth events
- **IP address tracking** and device fingerprinting
- **Auto-redirect** authenticated users away from `/auth`

### 📊 Database Architecture

#### Tables

1. **user_profiles**
   - Extends Supabase `auth.users`
   - Stores user metadata, roles, and status
   - Tracks login history and counts
   - Support for multi-language preferences

2. **user_auth_providers**
   - Tracks OAuth providers linked to accounts
   - Supports multiple auth methods per user
   - Stores provider-specific metadata

3. **user_sessions**
   - Enhanced session tracking
   - Device and location information
   - Session expiration management

4. **auth_audit_logs**
   - Complete audit trail of auth events
   - IP address and user agent logging
   - Success/failure tracking
   - Error message storage

5. **password_reset_tokens**
   - Secure password reset flow
   - Token expiration management
   - One-time use enforcement

6. **email_verification_tokens**
   - Email verification workflow
   - Token-based verification
   - Expiration handling

### 🎨 UI/UX Features
- **Professional glassmorphism design** matching the app's cyan theme
- **Tab-based interface** for login/signup
- **Password visibility toggle**
- **Real-time validation** and error messages
- **Loading states** for all async operations
- **Responsive design** for all devices
- **Smooth animations** and transitions
- **Accessibility features** (ARIA labels, keyboard navigation)

## File Structure

```
src/
├── app/
│   ├── actions/
│   │   └── auth-actions.ts          # Server actions for auth
│   └── [locale]/
│       └── auth/
│           ├── page.tsx              # Auth page (auto-redirects if logged in)
│           └── callback/
│               └── route.ts          # OAuth callback handler
├── components/
│   └── auth/
│       └── AuthPage.tsx              # Main auth component
├── lib/
│   └── supabase/
│       ├── client.ts                 # Browser Supabase client
│       ├── server.ts                 # Server Supabase client
│       └── middleware.ts             # Middleware for session handling
├── middleware.ts                     # Next.js middleware (updated)
└── styles/
    └── components/
        └── auth.css                  # Auth page styles
```

## Usage

### Accessing the Auth Page

Navigate to `/auth` or any locale-prefixed version (e.g., `/fr/auth`, `/en/auth`).

**Note:** Authenticated users are automatically redirected to the home page (`/`).

### Sign Up

1. Click the "Inscription" tab
2. Enter full name (optional), email, and password (min 8 characters)
3. Click "Créer mon compte"
4. Check email for verification link

### Sign In

1. Enter email and password
2. Click "Connexion"
3. You'll be redirected to the home page

### Google Sign In

1. Click "Google login" button
2. Complete OAuth flow
3. You'll be redirected back to the app

### Password Reset

1. Click "Mot de passe oublié?"
2. Enter your email
3. Check email for reset link
4. Follow the link to set a new password

## Server Actions

### `signIn(email, password)`
Authenticates user with email and password.

### `signUp(email, password, fullName?)`
Creates a new user account.

### `signOut()`
Signs out the current user.

### `signInWithGoogle()`
Initiates Google OAuth flow.

### `resetPassword(email)`
Sends password reset email.

### `updatePassword(newPassword)`
Updates password for logged-in user.

## Security Features

### Row Level Security (RLS)
All tables have RLS enabled with the following policies:

- **Users can view/update own data**
- **Admins can view/update all data**
- **Service role has full access**
- **Audit logs are append-only for users**

### Audit Logging
All authentication events are logged:
- Sign in/out attempts (success/failure)
- Sign up attempts
- Password reset requests
- OAuth logins
- IP addresses and user agents

### Session Management
- Sessions are tracked with device info
- Automatic cleanup of expired sessions
- IP address logging for security

## Database Migrations

Migrations are applied using Supabase MCP:

1. **create_auth_schema** - Creates all auth tables
2. **create_rls_policies** - Sets up Row Level Security
3. **add_helper_functions** - Adds utility functions

## Environment Variables

Required in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
SUPABASE_AUTH_EXTERNAL_GOOGLE_CLIENT_ID=your_google_client_id
SUPABASE_AUTH_EXTERNAL_GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Google OAuth Setup

1. Create OAuth credentials in Google Cloud Console
2. Add authorized redirect URIs:
   - `http://localhost:3000/auth/callback` (development)
   - `https://yourdomain.com/auth/callback` (production)
3. Configure in Supabase dashboard under Authentication > Providers
4. Add credentials to `.env.local`

## Middleware Protection

The middleware automatically:
- Refreshes user sessions
- Redirects authenticated users away from `/auth`
- Preserves locale routing
- Maintains Supabase session cookies

## User Roles

The system supports multiple user roles:
- `student` - Default role for new users
- `tutor` - For tutors/educators
- `admin` - Administrative access
- `super_admin` - Full system access

## Best Practices

1. **Always use server actions** for auth operations
2. **Never expose service role key** to client
3. **Validate input** on both client and server
4. **Log all auth events** for security auditing
5. **Use RLS policies** for data access control
6. **Implement rate limiting** for production
7. **Regular token cleanup** for expired tokens
8. **Monitor audit logs** for suspicious activity

## Future Enhancements

- [ ] Two-factor authentication (2FA)
- [ ] Social login with more providers (Apple, Microsoft)
- [ ] Phone number verification
- [ ] Account linking
- [ ] Session management UI
- [ ] Security settings page
- [ ] Login notifications
- [ ] Device management

## Troubleshooting

### "OAuth callback failed"
- Check Google OAuth credentials
- Verify redirect URIs match exactly
- Ensure Supabase provider is configured

### "Failed to create account"
- Check password requirements (min 8 chars)
- Verify email format
- Check Supabase dashboard for errors

### "Session expired"
- Clear browser cookies
- Try signing in again
- Check middleware configuration

## Support

For issues or questions, check:
- Supabase logs in dashboard
- `auth_audit_logs` table for auth events
- Browser console for client errors
- Server logs for server-side issues
