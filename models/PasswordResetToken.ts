import { Schema, model, models, Types } from "mongoose";

/**
 * Password reset token.
 *
 * Used during the forgot-password flow.
 */
export interface IPasswordResetToken {
  user: Types.ObjectId;
  token: string;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const PasswordResetTokenSchema = new Schema<IPasswordResetToken>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    token: {
      type: String,
      required: true,
      unique: true,
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
  }
);

PasswordResetTokenSchema.index(
  { token: 1 },
  {
    unique: true,
    name: "unique_password_reset_token",
  }
);

PasswordResetTokenSchema.index(
  { expiresAt: 1 },
  {
    expireAfterSeconds: 0,
    name: "password_reset_token_ttl",
  }
);

const MODEL_NAME = "PasswordResetToken";

const PasswordResetToken =
  models[MODEL_NAME] ??
  model<IPasswordResetToken>(MODEL_NAME, PasswordResetTokenSchema);

export default PasswordResetToken;