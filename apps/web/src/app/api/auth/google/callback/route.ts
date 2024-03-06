import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  console.log('The req query is: ', req.nextUrl.searchParams);
  const params = req.nextUrl.searchParams;
  const code = params.get('code');

  // If no code, redirect to login
  if (!code) {
    const loginUrl = new URL('/login', req.url);
    loginUrl.searchParams.set('error', 'no_code');
    console.error('No code provided');
    return NextResponse.redirect(loginUrl);
  }

  const rootUrl = new URL('/', req.url);
  return NextResponse.redirect(rootUrl);
}
