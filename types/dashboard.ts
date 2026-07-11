import type { IUser } from "@/models/User";
import type { IProfile } from "@/models/Profile";

export interface DashboardStats {
  studyHours: number;
  streak: number;
  completedLessons: number;
  activeCourses: number;
}

export interface DashboardData {
  user: IUser;
  profile: IProfile;
  stats: DashboardStats;
}