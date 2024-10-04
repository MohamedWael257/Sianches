// import { NextRequest, NextResponse } from "next/server";
// export function middleware(request: NextRequest, response: NextResponse) {
//     const url = request.nextUrl.pathname
//     // console.log({ url: url });

// }

import { NextRequest, NextResponse } from 'next/server'

// 1. Specify protected and public routes
const authRoutes = ['/login', '/register']
// const memberRoutes = ['/']
// const adminRoutes = ['/admin/:path*']


export default async function middleware(request: NextRequest) {
    // 2. Check if the current route is protected or public
    const path = request.nextUrl.pathname

    // 3. Get the token from the cookie
    const data = request.cookies.get("DATA")?.value || '';

    // 4. Get The role of User
    const userData = data;

    // 5. Redirect to /login if the user is not authenticated
    // if (!userData && !authRoutes.includes(path)) {
    //     return NextResponse.redirect(new URL('/login', request.nextUrl))
    // }

    // 6. Redirect to / if the user is  authenticated
    if (authRoutes.includes(path) && userData) {
        return NextResponse.redirect(new URL('/', request.nextUrl));
    }

    return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
    //   matcher: ['/admin/:path*', '/:path*', '/login', '/register', '/'],
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
// function getUserData(token: string) {
//     if (!token) return null;

//     try {
//         const payload = JSON.parse(atob(token.split('.')[1])); // فك التشفير هنا
//         return payload.role; // افترض أن payload يحتوي على role
//     } catch (error) {
//         return null;
//     }
// }