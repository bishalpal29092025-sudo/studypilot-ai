import { mapLesson } from "@/lib/mappers/lesson.mapper";
import { lessonRepository } from "@/lib/repositories/lesson.repository";

export class LessonService {
  async getLessonsByModule(moduleId: string) {
    const lessons =
      await lessonRepository.findByModule(moduleId);

    return lessons.map(mapLesson);
  }

  async getLessonBySlug(slug: string) {
    const lesson =
      await lessonRepository.findBySlug(slug);

    if (!lesson) {
      return null;
    }

    return mapLesson(lesson);
  }

  async getLessonById(id: string) {
    const lesson =
      await lessonRepository.findById(id);

    if (!lesson) {
      return null;
    }

    return mapLesson(lesson);
  }
}

export const lessonService =
  new LessonService();