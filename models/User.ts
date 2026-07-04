import { Schema, model, models } from "mongoose";
import { AUTH_PROVIDERS, USER_ROLES, type AuthProvider, type UserRole } from "@/constants/auth";

export interface IUser {
  email: string;
  password: string | null;
  provider: AuthProvider;
  providerId: string | null;
  role: UserRole;
  emailVerified: boolean;
  lastLoginAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

// User authentication schema

const UserSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      default: null,
      select: false, // Exclude password from query results by default
    },
    provider: {
      type: String,
      enum: AUTH_PROVIDERS,
      default: AUTH_PROVIDERS[0], // Default to the first provider in the list
    },
    providerId: {
      type: String,
      default: null,
    },
    role: {
      type: String,
      enum: USER_ROLES,
      default: USER_ROLES[0], // Default to the first role in the list
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    lastLoginAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  },
);


// Indexes for efficient querying
UserSchema.index({ email: 1 }, { unique: true });

// Create and export the User model
const User = models.User || model<IUser>("User", UserSchema);
export default User;