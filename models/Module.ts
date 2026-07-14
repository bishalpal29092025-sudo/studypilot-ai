import { Schema, model, models, type Types } from "mongoose";

/**
 * A learning module belongs to a roadmap.
 *
 * Example:
 *
 * AI Engineering Roadmap
 * ├── Module 1: Python Fundamentals
 * ├── Module 2: Mathematics
 * ├── Module 3: Machine Learning
 * └── Module 4: Deep Learning
 */

export interface IModule {   
  roadmap: Types.ObjectId;

  title: string;
  slug: string;
  description: string | null;

  order: number;

  estimatedMinutes: number;

  createdAt: Date;
  updatedAt: Date;
}

const ModuleSchema = new Schema<IModule>(
  {
    roadmap: {
      type: Schema.Types.ObjectId,
      ref: "Roadmap",
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
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

// Prevent duplicate module order within the same roadmap.
ModuleSchema.index(
  {
    roadmap: 1,
    order: 1,
  },
  {
    unique: true,
    name: "unique_module_order",
  },
);

// Fast lookup by roadmap.
ModuleSchema.index({
  roadmap: 1,
});

// Fast lookup by slug.
ModuleSchema.index(
  {
    slug: 1,
  },
  {
    unique: true,
  },
);

const MODEL_NAME = "Module";

const Module =
  models[MODEL_NAME] ??
  model<IModule>(MODEL_NAME, ModuleSchema);

export default Module;