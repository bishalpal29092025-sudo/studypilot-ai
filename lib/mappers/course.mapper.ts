import type { CourseDto } from "@/types/course";

/**
 * Converts MongoDB Course document
 * into a Course DTO.
 */
export function mapCourse(document: {
  _id: { toString(): string };
  title: string;
  slug: string;
  description: string | null;
  level: string;
}): CourseDto {
  return {
    id: document._id.toString(),

    title: document.title,

    slug: document.slug,

    description: document.description,

    level: document.level,
  };
}