import { Schema, model, models, type Types } from "mongoose";

export type LearningPathDifficulty =
  | "beginner"
  | "intermediate"
  | "advanced";

export type LearningPathStatus =
  | "draft"
  | "active"
  | "completed";

export interface ILearningPath {
  title: string;
  slug: string;
  description: string | null;

  subject: Types.ObjectId;

  creator: Types.ObjectId | null;

  difficulty: LearningPathDifficulty;

  estimatedHours: number;

  isAIGenerated: boolean;

  status: LearningPathStatus;

  createdAt: Date;
  updatedAt: Date;
}

const LearningPathSchema = new Schema<ILearningPath>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },

    description: {
      type: String,
      default: null,
    },

    subject: {
      type: Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    },

    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    difficulty: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
      default: "beginner",
    },

    estimatedHours: {
      type: Number,
      default: 0,
      min: 0,
    },

    isAIGenerated: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: ["draft", "active", "completed"],
      default: "draft",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

LearningPathSchema.index({ slug: 1 }, { unique: true });
LearningPathSchema.index({ subject: 1 });

const MODEL_NAME = "LearningPath";

const LearningPath =
  models[MODEL_NAME] ??
  model<ILearningPath>(MODEL_NAME, LearningPathSchema);

export default LearningPath;