import { NextRequest, NextResponse } from 'next/server'
const authRoutes = ['/login', '/register']
export default async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const data = request.cookies.get("DATA")?.value || '';
    const userData = data;
    if (authRoutes.includes(path) && userData) {
        return NextResponse.redirect(new URL('/', request.nextUrl));
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
