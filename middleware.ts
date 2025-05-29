// middleware.ts
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

// Use base paths for dynamic routes
const protectedRoutes = ['/dashboard', '/wishlist', '/cart']
const publicRoutes = ['/signin', '/signup']

function matchProtectedRoute(path: string) {
    return protectedRoutes.some(route => path === route || path.startsWith(`${route}/`))
}

function matchPublicRoute(path: string) {
    return publicRoutes.includes(path)
}

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    const isProtectedRoute = matchProtectedRoute(path)
    const isPublicRoute = matchPublicRoute(path)

    // Redirect unauthenticated user from protected route
    if (isProtectedRoute && !accessToken) {
        return NextResponse.redirect(new URL('/signin', req.nextUrl))
    }

    // Redirect authenticated user away from public route
    if (isPublicRoute && accessToken && !path.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/', req.nextUrl))
    }

    return NextResponse.next()
}

// Exclude static/image/api routes
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
