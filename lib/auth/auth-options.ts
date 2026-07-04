import type { NextAuthOptions } from "next-auth";
import { env } from "@/config/env";
import { authProviders } from "./providers";
import { authCallbacks } from "./callbacks";

// Main NextAuth configuration.

export const authOptions: NextAuthOptions = {
  providers: authProviders,
  callbacks: authCallbacks,

  session: {
    strategy: "jwt",
  },

  secret: env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/sign-in",
    error: "/auth/error",
  },

  debug: env.NODE_ENV === "development",
};
