import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import { env } from "@/config/env";

export const authProviders = [
  GoogleProvider({
    clientId: env.GOOGLE_CLIENT_ID ?? "",
    clientSecret: env.GOOGLE_CLIENT_SECRET ?? "",
  }),

  CredentialsProvider({
    name: "Credentials",

    credentials: {
      email: {
        label: "Email",
        type: "email",
      },

      password: {
        label: "Password",
        type: "password",
      },
    },

    async authorize(credentials) {
      if (!credentials?.email || !credentials.password) {
        return null;
      }

      /**
       * TODO:
       * - Connect to MongoDB
       * - Find user by email
       * - Verify password
       * - Update lastLoginAt
       * - Return authenticated user
       */

      return null;
    },
  }),
];