import { Schema, model, models, Types } from "mongoose";

/**
 * Email verification token.
 *
 * Used to verify a user's email address after registration.
 */
export interface IVerificationToken {
  user: Types.ObjectId;
  token: string;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const VerificationTokenSchema = new Schema<IVerificationToken>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    token: {
      type: String,
      required: true,
      trim: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

// Indexes
VerificationTokenSchema.index(
  { token: 1 },
  {
    unique: true,
    name: "unique_verification_token",
  },
);

VerificationTokenSchema.index(
  { expiresAt: 1 },
  {
    expireAfterSeconds: 0,
    name: "verification_token_ttl",
  },
);

const MODEL_NAME = "VerificationToken";

const VerificationToken = 
models[MODEL_NAME] ??
model<IVerificationToken>(MODEL_NAME, VerificationTokenSchema);

export default VerificationToken;