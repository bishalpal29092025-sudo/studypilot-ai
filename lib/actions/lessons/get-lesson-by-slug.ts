"use server";

import { lessonService } from "@/lib/services/lesson.service";

export async function getLessonBySlug(
  slug: string,
) {
  return lessonService.getLessonBySlug(slug);
}