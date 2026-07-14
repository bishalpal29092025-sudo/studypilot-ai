export type CourseLevel =
  | "beginner"
  | "intermediate"
  | "advanced";

export const COURSE_LEVELS = [
  "beginner",
  "intermediate",
  "advanced",
] as const;

export interface CourseDto {
  id: string;

  title: string;

  slug: string;

  description: string;

  category: string;

  level: CourseLevel;

  thumbnail: string | null;

  estimatedHours: number;

  tags: string[];
}