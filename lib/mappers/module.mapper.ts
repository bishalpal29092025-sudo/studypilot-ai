import type { ModuleDto } from "@/types/module";

export function mapModule(document: {
  _id: { toString(): string };

  title: string;

  slug: string;

  description: string | null;

  order: number;

  estimatedMinutes: number;
}): ModuleDto {
  return {
    id: document._id.toString(),

    title: document.title,

    slug: document.slug,

    description: document.description,

    order: document.order,

    estimatedMinutes: document.estimatedMinutes,
  };
}