import type { IdentityProvider } from "@prisma/client";
import { prisma } from "@cowk8s/database";
import type { NextAuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import { verifyToken } from "./jwt";
import { createUser, getUserByEmail, updateUser } from "./user/service";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: "Email Address",
          type: "email",
          placeholder: "Your email address",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Your password",
        },
      },
      async authorize(credentials, _req) {
        let user;
        try {
          user = await prisma.user.findUnique({
            where: {
              email: credentials?.email,
            },
          });
        } catch (e) {
          console.error(e);
          throw Error("Internal server error. Please try again later");
        }

        if (!user || !credentials) {
          throw new Error("No user matches the provided credentials");
        }
        if (!user.password) {
          throw new Error("No user matches the provided credentials");
        }

        const isValid = await verifyPassword(credentials.password, user.password);

        if (!isValid) {
          throw new Error("No user matches the provided credentials");
        }

        return {
          id: user.id,
          email: user.email,
          emailVerified: user.emailVerified,
          imageUrl: user.imageUrl,
        };
      },
    }),
    CredentialsProvider({
      id: "token",
      name: "Token",
      credentials: {
        token: {
          label: "Verification Token",
          type: "string",
        }
      },
      async authorize(credentials, req) {
        let user;
        try {
          if (!credentials?.token) {
            throw new Error("Token not found");
          }
          const { id } = await verifyToken(credentials?.token);
          user = await prisma.user.findUnique({
            where: {
              id: id,
            },
          });
        } catch (e) {
          console.error(e);
          throw new Error("Either a user does not match the provided token or the token is invalid");
        }
        
        if (!user) {
          throw new Error("Either a user does not match the provided token or the token is invalid");
        }

        if (user.emailVerified) {
          throw new Error("Email already verified");
        }

        user = await updateUser(user.id, { emailVerified: new Date() });

        return user;
      },
    })
  ],
  callbacks: {
    async jwt({ token }) {
      const existingUser = await getUserByEmail(token?.email!);

      if (!existingUser) {
        return token;
      }

      return {
        ...token,
        profile: existingUser || null,
      };
    },
    async session({ session, token }) {
      // @ts-expect-error
      session.user.id = token?.id;
      // @ts-expect-error
      session.user = token.profile;

      return session;
    },
    async signIn({ user, account }: any) {
      if (account.provider === "credentials" || account.provider === "token") {
        if (!user.emailVerified && !EMAIL_VERIFICATION_DISABLED) {
          throw new Error("Email Verification is Pending");
        }
        return true;
      }

      if (!user.email || account.type === "oauth") {
        return false;
      }

      if (account.provider) {
        const provider = account.provider.toLowerCase().replace("-", "") as IdentityProvider;
        // check if accounts for this provider / account Id already exists
        const existingUserWithAccount = await prisma.user.findFirst({
          include: {
            accounts: {
              where: {
                provider: account.provider,
              },
            },
          },
          where: {
            identityProvider: provider,
            identityProviderAccountId: account.providerAccountId,
          },
        });
        
      }
      return true;
    },
  },
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout",
    error: "/auth/login", // Error code passed in query string as ?error=
  },
};