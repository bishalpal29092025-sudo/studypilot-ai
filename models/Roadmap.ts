import { Schema, model, models, Types } from "mongoose";

export interface IRoadmap {
  user: Types.ObjectId;

  course: Types.ObjectId;

  title: string;

  description: string;

  progress: number;

  estimatedWeeks: number;

  currentModule: number;

  completed: boolean;

  createdAt: Date;
  updatedAt: Date;
}

const RoadmapSchema = new Schema<IRoadmap>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    course: {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },

    progress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },

    estimatedWeeks: {
      type: Number,
      default: 8,
      min: 1,
    },

    currentModule: {
      type: Number,
      default: 0,
      min: 0,
    },

    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

RoadmapSchema.index({
  user: 1,
  course: 1,
});

const MODEL_NAME = "Roadmap";

const Roadmap =
  models[MODEL_NAME] ??
  model<IRoadmap>(MODEL_NAME, RoadmapSchema);

export default Roadmap;