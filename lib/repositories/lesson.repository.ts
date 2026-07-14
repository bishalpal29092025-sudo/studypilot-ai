import { connectToDatabase } from "@/lib/db/connect";

import Lesson from "@/models/Lesson";

export class LessonRepository {
  /**
   * Get all lessons of a module.
   */
  async findByModule(moduleId: string) {
    await connectToDatabase();

    return Lesson.find({
      module: moduleId,
    })
      .sort({
        order: 1,
      })
      .lean();
  }

  /**
   * Find lesson by slug.
   */
  async findBySlug(slug: string) {
    await connectToDatabase();

    return Lesson.findOne({
      slug,
    }).lean();
  }
}

export const lessonRepository =
  new LessonRepository();