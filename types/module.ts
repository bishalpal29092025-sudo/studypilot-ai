export interface ModuleDto {
  id: string;

  title: string;

  slug: string;

  description: string | null;

  order: number;

  estimatedMinutes: number;
}