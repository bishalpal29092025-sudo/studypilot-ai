import { connectToDatabase } from "@/lib/db/connect";
import { getCurrentUser } from "@/lib/auth/user";

import Profile from "@/models/Profile";

export async function getUserProfile() {
  await connectToDatabase();

  const user = await getCurrentUser();

  if (!user) {
    return null;
  }

  const profile = await Profile.findOne({
    user: user.id,
  });

  return profile;
}