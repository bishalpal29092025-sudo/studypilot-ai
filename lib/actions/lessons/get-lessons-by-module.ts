"use server";

import { lessonService } from "@/lib/services/lesson.service";

export async function getLessonsByModule(
  moduleId: string,
) {
  return lessonService.getLessonsByModule(moduleId);
}