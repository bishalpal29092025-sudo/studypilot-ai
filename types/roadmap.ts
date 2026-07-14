export interface RoadmapDto {
  id: string;

  title: string;

  description: string | null;

  progress: number;

  currentModule: number;

  completed: boolean;
}