/**
 * ===========================
 * Course Domain
 * ===========================
 */

/**
 * Allowed course levels.
 */
export const COURSE_LEVELS = [
    "beginner",
    "intermediate",
    "advanced",
  ] as const;
  
  /**
   * Course level type.
   */
  export type CourseLevel = (typeof COURSE_LEVELS)[number];
  
  /**
   * Course DTO returned to the UI.
   */
  export interface CourseDto {
    id: string;
  
    title: string;
  
    slug: string;
  
    description: string | null;
  
    level: CourseLevel;
  }