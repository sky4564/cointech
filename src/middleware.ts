import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabaseClient = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabaseClient.auth.getSession();

  // 로그인이 필요한 페이지에 대한 리다이렉션
  if (!session && req.nextUrl.pathname.startsWith('/protected')) {
    return NextResponse.redirect(new URL('/auth', req.url));
  }

  return res;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}; 