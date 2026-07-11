import { Schema, model, models, type Types } from "mongoose";

export type ModuleStatus =
  | "locked"
  | "available"
  | "completed";

export interface IModule {
  title: string;
  slug: string;
  description: string | null;

  learningPath: Types.ObjectId;

  order: number;

  estimatedMinutes: number;

  status: ModuleStatus;

  createdAt: Date;
  updatedAt: Date;
}

const ModuleSchema = new Schema<IModule>(
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

    learningPath: {
      type: Schema.Types.ObjectId,
      ref: "LearningPath",
      required: true,
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

    status: {
      type: String,
      enum: ["locked", "available", "completed"],
      default: "locked",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

ModuleSchema.index(
  { learningPath: 1, order: 1 },
  { unique: true },
);

const MODEL_NAME = "Module";

const Module =
  models[MODEL_NAME] ??
  model<IModule>(MODEL_NAME, ModuleSchema);

export default Module;