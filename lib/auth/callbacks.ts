import type { NextAuthOptions } from "next-auth";

import { syncGoogleUser } from "./sync-google-user";

export const authCallbacks: NextAuthOptions["callbacks"] = {
  /**
   * Runs before allowing sign in.
   */
  async signIn({ user, account }) {
    if (account?.provider === "google") {
      const dbUser = await syncGoogleUser(user, account);

      user.id = dbUser._id.toString();
      user.role = dbUser.role;
    }

    return true;
  },

  /**
   * Runs whenever a JWT is created or updated.
   */
  async jwt({ token, user }) {
    if (user) {
      token.id = user.id;
      token.email = user.email;
      token.role = user.role;
    }

    return token;
  },

  /**
   * Runs whenever a session is accessed.
   */
  async session({ session, token }) {
    if (session.user) {
      session.user.id = token.id;
      session.user.email = token.email!;
      session.user.role = token.role;
    }

    return session;
  },

  /**
   * Controls redirect behavior.
   */
  async redirect({ baseUrl }) {
    return `${baseUrl}/dashboard`;
  },
};
