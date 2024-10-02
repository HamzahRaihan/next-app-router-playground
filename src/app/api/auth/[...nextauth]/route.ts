import { signIn } from '@/app/lib/firebase/service';
import { compare } from 'bcrypt';
import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
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
        const user: any = await signIn({ email });
        const passwordCompare = await compare(password, user?.password);
        if (passwordCompare) {
          return user;
        }
        return null;
      },
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
