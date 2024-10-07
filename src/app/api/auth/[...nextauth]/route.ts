import { signInWithGoogle } from './../../../lib/firebase/service';
import { signIn } from '@/app/lib/firebase/service';
import { compare } from 'bcrypt';
import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 12 * 60 * 60, // 4 hours
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        name: { label: 'Fullname', type: 'text', placeholder: 'Enter your full name' },
        email: { label: 'Email', type: 'email', placeholder: 'name@provider.domain' },
        password: { label: 'Password', type: 'password', placeholder: '' },
      },
      async authorize(credential) {
        const { email, password } = credential as {
          name: string;
          email: string;
          password: string;
          role: string;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const user: any = await signIn({ email });
        const passwordCompare = await compare(password, user?.password);
        if (passwordCompare) {
          return user;
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? '',
      clientSecret: process.env.GOOGLE_SECRET ?? '',
    }),
  ],
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async jwt({ token, account, user }: any): Promise<any> {
      if (account?.provider === 'credentials') {
        token.email = user.email;
        token.fullname = user.fullname;
        token.role = user.role;
      }
      if (account?.provider === 'google') {
        const data: { fullname: string; email: string; image: string; type: string; role: string } = {
          fullname: user.name,
          email: user.email,
          image: user.image,
          role: 'customer',
          type: 'google',
        };
        const res = await signInWithGoogle(data);
        if (res.status) {
          token.fullname = res.data.fullname;
          token.email = res.data.email;
          token.type = res.data.type;
          token.image = res.data.image;
          token.role = res.data.role;
        }
      }
      return token;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async session({ session, token }: any): Promise<any> {
      if ('email' in token && session.user) {
        session.user.email = token.email;
      }
      if ('fullname' in token && session.user) {
        session.user.fullname = token.fullname;
      }
      if ('image' in token && session.user) {
        session.user.image = token.image;
      }
      if ('role' in token && session.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
