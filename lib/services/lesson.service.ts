import { mapLesson } from "@/lib/mappers/lesson.mapper";
import { lessonRepository } from "@/lib/repositories/lesson.repository";

export class LessonService {
  async getLessonsByModule(
    moduleId: string,
  ) {
    const lessonDocuments =
      await lessonRepository.findByModule(
        moduleId,
      );

    return lessonDocuments.map(mapLesson);
  }

  async getLessonBySlug(slug: string) {
    const lessonDocument =
      await lessonRepository.findBySlug(
        slug,
      );

    if (!lessonDocument) {
      return null;
    }

    return mapLesson(
      lessonDocument,
    );
  }
}

export const lessonService =
  new LessonService();