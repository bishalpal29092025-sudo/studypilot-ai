export const LEARNING_STYLES = [
    "visual",
    "auditory",
    "reading-writing",
    "kinesthetic",
] as const;

export type LearningStyle = (typeof LEARNING_STYLES)[number];

export const STUDY_LEVELS = [
    "beginner",
    "intermediate",
    "advanced",
] as const;

export type StudyLevel = (typeof STUDY_LEVELS)[number];