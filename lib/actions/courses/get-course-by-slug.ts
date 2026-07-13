"use server";

import { courseService } from "@/lib/services/course.service";

/**
 * Get a single course by slug.
 */
export async function getCourseBySlug(
  slug: string,
) {
  return courseService.getCourseBySlug(slug);
}