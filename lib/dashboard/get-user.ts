import { connectToDatabase } from "@/lib/db/connect";
import { getCurrentUser } from "@/lib/auth/user";

export async function getUser() {
  await connectToDatabase();

  return getCurrentUser();
}