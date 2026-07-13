import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import { env } from "@/config/env";

import { connectToDatabase } from "@/lib/db/connect";
import { verifyPassword } from "@/lib/auth/password";

import User from "@/models/User";

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
      if (!credentials?.email || !credentials?.password) {
        return null;
      }

      await connectToDatabase();

      const user = await User.findOne({
        email: credentials.email.toLowerCase(),
      }).select("+password");

      if (!user) {
        return null;
      }

      if (user.provider !== "credentials") {
        throw new Error("This account was created with Google. Please sign in with Google.");
      }

      if (!user.password) {
        return null;
      }

      const isPasswordValid = await verifyPassword(credentials.password, user.password);

      if (!isPasswordValid) {
        return null;
      }

      await User.updateOne(
        { _id: user._id },
        {
          $set: {
            lastLoginAt: new Date(),
          },
        },
      );

      return {
        id: user._id.toString(),
        email: user.email,
        role: user.role,
        emailVerified: user.emailVerified,
      };
    },
  }),
];
