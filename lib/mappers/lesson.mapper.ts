import type { LessonDto } from "@/types/lesson";

export function mapLesson(document: {
  _id: {
    toString(): string;
  };

  title: string;

  slug: string;

  description: string | null;

  order: number;

  estimatedMinutes: number;

  difficulty: LessonDto["difficulty"];

  status: string;
}): LessonDto {
  return {
    id: document._id.toString(),

    title: document.title,

    slug: document.slug,

    description: document.description,

    order: document.order,

    estimatedMinutes: document.estimatedMinutes,

    difficulty: document.difficulty,

    status: document.status,
  };
}