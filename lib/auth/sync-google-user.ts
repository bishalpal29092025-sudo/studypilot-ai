import type { Account, User as NextAuthUser } from "next-auth";

import { connectToDatabase } from "@/lib/db/connect";

import User from "@/models/User";
import Profile from "@/models/Profile";

/**
 * Synchronize a Google account with MongoDB.
 *
 * - Finds an existing user by email.
 * - Creates User + Profile on first sign in.
 * - Updates providerId if necessary.
 * - Returns the MongoDB user document.
 */
export async function syncGoogleUser(
  user: NextAuthUser,
  account: Account,
) {
  await connectToDatabase();

  if (!user.email) {
    throw new Error("Google account has no email.");
  }

  let dbUser = await User.findOne({
    email: user.email.toLowerCase(),
  });

  // First Google login
  if (!dbUser) {
    dbUser = await User.create({
      email: user.email.toLowerCase(),

      password: null,

      provider: "google",
      providerId: account.providerAccountId,

      role: "student",

      emailVerified: true,

      lastLoginAt: new Date(),
    });

    await Profile.create({
      user: dbUser._id,

      name: user.name ?? "Student",

      avatar: user.image ?? null,
      bio: null,

      learningStyle: "visual",
      studyLevel: "beginner",

      dailyStudyHours: 1,

      targetExam: null,
      examDate: null,

      timezone: "Asia/Kolkata",
      language: "en",
    });

    return dbUser;
  }

  // Existing Google user
  if (!dbUser.providerId) {
    dbUser.providerId = account.providerAccountId;
  }

  dbUser.lastLoginAt = new Date();

  await dbUser.save();

  return dbUser;
}