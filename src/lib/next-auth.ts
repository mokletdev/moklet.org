import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import {
  findUser,
  createUser,
  updateUserAuth,
} from "@/utils/database/user.query";
import { Roles } from "@prisma/client";
import prisma from "./prisma";
import { type DefaultSession } from "next-auth";
import type { DefaultJWT } from "next-auth/jwt";
import { createHash } from "crypto";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      id: string;
      role: Roles;
      name: string;
      user_pic: string;
      email: string;
      someExoticUserProperty?: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends DefaultJWT {
    id: string;
    role: Roles;
    name: string;
    user_pic: string;
    email: string;
  }
}

export const authOptions: AuthOptions = {
  // pages: {
  //   signIn: "/auth/login",
  //   newUser: "/auth/register",
  // },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "user@email.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      async authorize(credentials) {
        console.log(credentials);
        let findUser = await prisma.user.findUnique({
          where: { email: credentials?.email },
          include: { userAuth: true },
        });
        if (!findUser) return null;
        if (
          findUser.userAuth?.password !=
          createHash("md5").update(credentials?.password!).digest("hex")
        )
          return null;

        const user = {
          id: findUser.id,
          role: findUser.role,
          name: findUser.name,
          email: findUser.email,
          user_pic: findUser.user_pic,
        };
        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: false,
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      const redirectUrl = url.startsWith("/")
        ? new URL(url, baseUrl).toString()
        : url;
      return redirectUrl;
    },
    async signIn({ user }) {
      if (user.email) {
        let userdb = await findUser({ email: user.email });
        if (!userdb) {
          await createUser({
            email: user.email,
            name: user.name || "",
            user_pic:
              user.image ||
              "https://res.cloudinary.com/mokletorg-cdn/image/upload/f_auto,q_auto/user",
            userAuth: {
              create: {
                last_login: new Date(),
              },
            },
          });
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user?.email) {
        let userdb = await findUser({ email: user?.email! });
        token.id = userdb?.id || "";
        token.role = userdb?.role || "Guest";
        token.name = userdb?.name || token?.name;
        token.user_pic = userdb?.user_pic!;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token?.role || "Guest";
        session.user.id = token?.id!;
        session.user.user_pic = token?.user_pic!;
        session.user.name = token?.name!;
        await updateUserAuth(
          { userEmail: token.email },
          { last_login: new Date() },
        );
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
