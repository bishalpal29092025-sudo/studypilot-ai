import type { CourseDto, CourseLevel } from "@/types/course";

export function mapCourse(document: {
  _id: { toString(): string };
  title: string;
  slug: string;
  description: string | null;
  level: CourseLevel;
}): CourseDto {
  return {
    id: document._id.toString(),
    title: document.title,
    slug: document.slug,
    description: document.description,
    level: document.level,
  };
}