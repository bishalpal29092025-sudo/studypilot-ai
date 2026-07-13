import { Schema, model, models, type Types } from "mongoose";

/**
 * A lesson belongs to a module.
 *
 * Example:
 *
 * Module: Python Fundamentals
 * ├── Variables
 * ├── Data Types
 * ├── Functions
 * ├── Loops
 * └── OOP
 */

export type LessonDifficulty =
  | "beginner"
  | "intermediate"
  | "advanced";

export type LessonStatus =
  | "draft"
  | "published"
  | "archived";

export interface ILesson {
  module: Types.ObjectId;

  title: string;
  slug: string;

  description: string | null;

  content: string;

  summary: string | null;

  objectives: string[];

  resources: string[];

  order: number;

  estimatedMinutes: number;

  difficulty: LessonDifficulty;

  videoUrl: string | null;

  aiGenerated: boolean;

  status: LessonStatus;

  createdAt: Date;
  updatedAt: Date;
}

const LessonSchema = new Schema<ILesson>(
  {
    module: {
      type: Schema.Types.ObjectId,
      ref: "Module",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },

    slug: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    description: {
      type: String,
      default: null,
      trim: true,
      maxlength: 1000,
    },

    content: {
      type: String,
      required: true,
    },

    summary: {
      type: String,
      default: null,
      trim: true,
      maxlength: 2000,
    },

    objectives: {
      type: [String],
      default: [],
    },

    resources: {
      type: [String],
      default: [],
    },

    order: {
      type: Number,
      required: true,
      min: 1,
    },

    estimatedMinutes: {
      type: Number,
      default: 0,
      min: 0,
    },

    difficulty: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
      default: "beginner",
    },

    videoUrl: {
      type: String,
      default: null,
      trim: true,
    },

    aiGenerated: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "draft",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

// Prevent duplicate lesson order within a module.
LessonSchema.index(
  {
    module: 1,
    order: 1,
  },
  {
    unique: true,
    name: "unique_lesson_order",
  },
);

// Fast lookup by module.
LessonSchema.index({
  module: 1,
});

// Fast lookup by slug.
LessonSchema.index(
  {
    slug: 1,
  },
  {
    unique: true,
  },
);

const MODEL_NAME = "Lesson";

const Lesson =
  models[MODEL_NAME] ??
  model<ILesson>(MODEL_NAME, LessonSchema);

export default Lesson;