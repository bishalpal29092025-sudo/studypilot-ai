import type { RoadmapDto } from "@/types/roadmap";

export function mapRoadmap(document: {
  _id: { toString(): string };

  title: string;

  description: string | null;

  progress: number;

  currentModule: number;

  completed: boolean;
}): RoadmapDto {
  return {
    id: document._id.toString(),

    title: document.title,

    description: document.description,

    progress: document.progress,

    currentModule: document.currentModule,

    completed: document.completed,
  };
}