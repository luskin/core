import * as admin from 'firebase-admin';
import { serverConfig } from '@/config/server';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { cert, getApps } from 'firebase-admin/app';

const firebaseAdminConfig = {
  credential: cert({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
  }),
};

const firebaseAdmin = getApps().length <= 0 ? admin.initializeApp(firebaseAdminConfig) : admin.app();

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async signIn({ user }) {
      const accountEmail = user.email;
      if (!accountEmail) {
        throw new Error('No email associated with this account');
      }
      const fbAuthUser = await firebaseAdmin.auth().getUserByEmail(accountEmail);
      if (!fbAuthUser) {
        throw new Error('No user found in Firebase Auth');
      }
      return true;
    },
    async session({ session, token }) {
      const userEmail = session.user.email;
      if (!userEmail) {
        throw new Error('No email associated with this account');
      }
      const fbAuthUser = await firebaseAdmin.auth().getUserByEmail(userEmail);
      session.user.id = fbAuthUser.uid;
      session.user.image = fbAuthUser.photoURL ?? session.user.image;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (!user) {
        return token;
      }
      const accountEmail = user.email;
      if (!accountEmail) {
        throw new Error('No email associated with this account');
      }
      const fbAuthUser = await firebaseAdmin.auth().getUserByEmail(accountEmail);
      if (!fbAuthUser) {
        throw new Error('No user found in Firebase Auth');
      }
      const customToken = await firebaseAdmin.auth().createCustomToken(fbAuthUser.uid);
      console.log('The fb custom token', customToken);
      return token;
    },
  },
  providers: [
    GoogleProvider({
      clientId: serverConfig.google.clientId,
      clientSecret: serverConfig.google.clientSecret,
    }),
  ],
});
