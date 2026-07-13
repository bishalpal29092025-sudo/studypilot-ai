"use server";

import { courseService } from "@/lib/services/course.service";

/**
 * Get all courses.
 */
export async function getCourses() {
  return courseService.getCourses();
}