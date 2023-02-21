import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { prisma } from '../../../components/data'

// Initialize NextAuth

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId:
        '927053841424-onhhhj1jmimh0b60kbk9qihs5c61dun5.apps.googleusercontent.com',
      clientSecret: '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',
    }),
  ],
})
