import { Schema, model, models } from "mongoose";

export interface ISubject {
  name: string;
  slug: string;
  description: string | null;

  createdAt: Date;
  updatedAt: Date;
}

const SubjectSchema = new Schema<ISubject>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    description: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

SubjectSchema.index({ slug: 1 });

const MODEL_NAME = "Subject";

const Subject =
  models[MODEL_NAME] ??
  model<ISubject>(MODEL_NAME, SubjectSchema);

export default Subject;