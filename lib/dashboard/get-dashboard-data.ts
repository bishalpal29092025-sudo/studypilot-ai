import { getUser } from "./get-user";
import { getUserProfile } from "./get-user-profile";
import { getUserStats } from "./get-user-stats";

export async function getDashboardData() {
  const [user, profile, stats] = await Promise.all([
    getUser(),
    getUserProfile(),
    getUserStats(),
  ]);

  return {
    user,
    profile,
    stats,
  };
}