import { getCurrentSession } from "./session";

/**
 * Returns the authenticated user.
 */
export async function getCurrentUser() {
  const session = await getCurrentSession();

  return session?.user ?? null;
}