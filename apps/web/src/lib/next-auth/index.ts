import { serverConfig } from '@/config/server';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: serverConfig.google.clientId,
      clientSecret: serverConfig.google.clientSecret,
    }),
  ],
});
