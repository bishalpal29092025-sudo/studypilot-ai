import bcrypt from "bcryptjs";

/**
 * Hash a password before saving it.
 */
export async function hashPassword(password: string) {
  return bcrypt.hash(password, 12);
}

/**
 * Compare a plain password with its hash.
 */
export async function verifyPassword(
  password: string,
  hashedPassword: string,
) {
  return bcrypt.compare(password, hashedPassword);
}