
import type { NextAuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",

      name: "Credentials",

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
        return {
          id: "1",
          email: "phantantai9800@gmail.com",
          emailVerified: true,
          imageUrl: "",
        };
      },
    }),
  ]
}