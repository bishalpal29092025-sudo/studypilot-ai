import { mapCourse } from "@/lib/mappers/course.mapper";
import { courseRepository } from "@/lib/repositories/course.repository";

export class CourseService {
  /**
   * Get all courses.
   */
  async getCourses() {
    const courses = await courseRepository.findAll();

    return courses.map(mapCourse);
  }

  /**
   * Get course by ID.
   */
  async getCourseById(id: string) {
    return courseRepository.findById(id);
  }

  /**
   * Get course by slug.
   */
  async getCourseBySlug(slug: string) {
    return courseRepository.findBySlug(slug);
  }

  /**
   * Create course.
   */
  async createCourse(data: Parameters<typeof courseRepository.create>[0]) {
    const slug = (data as { slug?: string }).slug;

    if (!slug) {
      throw new Error("Course slug is required.");
    }

    const existingCourse = await courseRepository.findBySlug(slug);

    if (existingCourse) {
      throw new Error("A course with this slug already exists.");
    }

    return courseRepository.create(data);
  }

  /**
   * Update course.
   */
  async updateCourse(id: string, data: object) {
    return courseRepository.update(id, data);
  }

  /**
   * Delete course.
   */
  async deleteCourse(id: string) {
    return courseRepository.delete(id);
  }
}

export const courseService = new CourseService();