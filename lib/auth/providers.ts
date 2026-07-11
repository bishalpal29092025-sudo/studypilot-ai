import { env } from "@/config/env";

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

/**
 * Authentication providers.
 *
 * Google OAuth and Email/Password authentication.
 */

const CREDENTIALS_PROVIDER_NAME = "Credentials";

export const authProviders = [
  GoogleProvider({
    clientId: env.GOOGLE_CLIENT_ID!,
    clientSecret: env.GOOGLE_CLIENT_SECRET!,
  }),

  CredentialsProvider({
    name: CREDENTIALS_PROVIDER_NAME,

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
      /**
       * We will implement this step by step.
       */
    
      if (!credentials?.email || !credentials.password) {
        throw new Error("Missing credentials.");
      }
    
      console.log(credentials);
    
      return null;
    },
  }),
];