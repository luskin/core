import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { APIResponse } from '../../types/api.response';
import { firebaseServer } from '@/lib/auth/firebase.server';

export async function GET() {
  try {
    const sessionCookie = cookies().get('__session')?.value;

    if (sessionCookie) {
      cookies().delete('__session');
      await firebaseServer.revokeAllSessions(sessionCookie);
    }

    return NextResponse.json<APIResponse<string>>({
      success: true,
      data: 'Signed out successfully.',
    });
  } catch (error) {
    console.error('Error signing out', error);
    return NextResponse.json<APIResponse<string>>({
      success: false,
      data: 'Error signing out.',
    });
  }
}
