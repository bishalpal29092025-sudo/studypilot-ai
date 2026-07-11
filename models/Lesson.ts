import { Schema, model, models, type Types } from "mongoose";

export type LessonDifficulty =
  | "beginner"
  | "intermediate"
  | "advanced";

export type LessonStatus =
  | "draft"
  | "published"
  | "archived";

export interface ILesson {
  title: string;
  slug: string;

  description: string | null;

  module: Types.ObjectId;

  order: number;

  content: string;

  summary: string | null;

  objectives: string[];

  resources: string[];

  estimatedMinutes: number;

  difficulty: LessonDifficulty;

  status: LessonStatus;

  createdAt: Date;
  updatedAt: Date;
}

const LessonSchema = new Schema<ILesson>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    description: {
      type: String,
      default: null,
    },

    module: {
      type: Schema.Types.ObjectId,
      ref: "Module",
      required: true,
    },

    order: {
      type: Number,
      required: true,
      min: 1,
    },

    content: {
      type: String,
      default: "",
    },

    summary: {
      type: String,
      default: null,
    },

    objectives: {
      type: [String],
      default: [],
    },

    resources: {
      type: [String],
      default: [],
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

LessonSchema.index(
  { module: 1, order: 1 },
  { unique: true },
);

LessonSchema.index({ slug: 1 }, { unique: true });

const MODEL_NAME = "Lesson";

const Lesson =
  models[MODEL_NAME] ??
  model<ILesson>(MODEL_NAME, LessonSchema);

export default Lesson;