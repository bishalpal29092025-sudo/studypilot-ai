import type { NextAuthOptions } from "next-auth";

// NextAuth Callbacks.

export const authCallbacks: NextAuthOptions["callbacks"] = {
    // Runs whenever a JWT is created or updated

    async jwt({ token, user}) {
        if (user) {
            token.id = user.id;
            token.email = user.email;
        }
        return token;
    },

    // Runs whenever a session is accessed.
    async session({ session, token}) {
        if(session.user){
            session.user.id = token.id as string;
            session.user.email = token.email as string;
        }
        return session;
    },

    // Runs before allowing sign in.
    async signIn() {
        return true;
    },

    // Controls redirect behavior.
    async redirect({ baseUrl }) {
        return baseUrl;
    }
}