import { Schema, model, models, type Types } from "mongoose";

/**
 * Tracks a user's progress through a lesson.
 */

export interface IProgress {
  user: Types.ObjectId;

  roadmap: Types.ObjectId;

  module: Types.ObjectId;

  lesson: Types.ObjectId;

  completed: boolean;

  progressPercentage: number;

  lastVisitedAt: Date | null;

  completedAt: Date | null;

  createdAt: Date;
  updatedAt: Date;
}

const ProgressSchema = new Schema<IProgress>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    roadmap: {
      type: Schema.Types.ObjectId,
      ref: "Roadmap",
      required: true,
    },

    module: {
      type: Schema.Types.ObjectId,
      ref: "Module",
      required: true,
    },

    lesson: {
      type: Schema.Types.ObjectId,
      ref: "Lesson",
      required: true,
    },

    completed: {
      type: Boolean,
      default: false,
    },

    progressPercentage: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },

    lastVisitedAt: {
      type: Date,
      default: null,
    },

    completedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

// One progress record per user per lesson.
ProgressSchema.index(
  {
    user: 1,
    lesson: 1,
  },
  {
    unique: true,
    name: "unique_user_lesson_progress",
  },
);

// Fast queries for dashboard.
ProgressSchema.index({
  user: 1,
});

ProgressSchema.index({
  roadmap: 1,
});

ProgressSchema.index({
  module: 1,
});

const MODEL_NAME = "Progress";

const Progress =
  models[MODEL_NAME] ??
  model<IProgress>(MODEL_NAME, ProgressSchema);

export default Progress;