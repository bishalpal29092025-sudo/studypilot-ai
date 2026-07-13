import { connectToDatabase } from "@/lib/db/connect";
import Course from "@/models/Course";

export class CourseRepository {
  /**
   * Get all courses.
   */
  async findAll() {
    await connectToDatabase();

    return Course.find().sort({ createdAt: -1 }).lean();
  }

  /**
   * Find course by ID.
   */
  async findById(id: string) {
    await connectToDatabase();

    return Course.findById(id).lean();
  }

  /**
   * Find course by slug.
   */
  async findBySlug(slug: string) {
    await connectToDatabase();

    return Course.findOne({
      slug,
    }).lean();
  }

  /**
   * Create course.
   */
  async create(data: object) {
    await connectToDatabase();

    return Course.create(data);
  }

  /**
   * Update course.
   */
  async update(id: string, data: object) {
    await connectToDatabase();

    return Course.findByIdAndUpdate(id, data, {
      new: true,
    });
  }

  /**
   * Delete course.
   */
  async delete(id: string) {
    await connectToDatabase();

    return Course.findByIdAndDelete(id);
  }
}

export const courseRepository = new CourseRepository();
