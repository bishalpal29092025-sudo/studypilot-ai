import type { CourseDto, CourseLevel } from "@/types/course";

export function mapCourse(document: {
  _id: { toString(): string };
  title: string;
  slug: string;
  description: string;
  category: string;
  level: CourseLevel;
  thumbnail: string | null;
  estimatedHours: number;
  tags: string[];
}): CourseDto {
  return {
    id: document._id.toString(),
    title: document.title,
    slug: document.slug,
    description: document.description,
    category: document.category,
    level: document.level,
    thumbnail: document.thumbnail,
    estimatedHours: document.estimatedHours,
    tags: document.tags,
  };
}