export const AUTH_PROVIDERS = [
    "credentials",
    "google",
] as const;

export type AuthProvider = (typeof AUTH_PROVIDERS)[number];

export const USER_ROLES = [
    "student",
    "admin",
] as const;

export type UserRole = (typeof USER_ROLES)[number];
