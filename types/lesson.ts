export type LessonDifficulty =
  | "beginner"
  | "intermediate"
  | "advanced";

export interface LessonDto {
  id: string;

  title: string;

  slug: string;

  description: string | null;

  order: number;

  estimatedMinutes: number;

  difficulty: LessonDifficulty;

  status: string;

  content: string;

  summary: string;

  objectives: string[];

  resources: string[];
}