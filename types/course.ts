/**
 * Course DTO returned to the UI.
 *
 * Never expose MongoDB documents directly
 * to the frontend.
 */
export interface CourseDto {
    id: string;
  
    title: string;
  
    slug: string;
  
    description: string | null;
  
    level: string;
  }