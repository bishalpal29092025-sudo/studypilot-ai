import { Types } from "mongoose";

import { connectToDatabase } from "@/lib/db/connect";
import { getCurrentUser } from "@/lib/auth/user";

import User from "@/models/User";
import Profile from "@/models/Profile";

export async function getUserProfile() {
  await connectToDatabase();

  const sessionUser = await getCurrentUser();

  if (!sessionUser) {
    return null;
  }

  let userId = sessionUser.id;

  // If the session id is not a MongoDB ObjectId,
  // try finding the User by providerId or email.
  if (!Types.ObjectId.isValid(userId)) {
    const dbUser = await User.findOne({
      $or: [
        { providerId: userId },
        { email: sessionUser.email },
      ],
    });

    if (!dbUser) {
      return null;
    }

    userId = dbUser._id.toString();
  }

  return Profile.findOne({
    user: userId,
  });
}