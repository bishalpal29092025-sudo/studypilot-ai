import { getServerSession } from "next-auth";

import { authOptions } from "./auth-options";

/**
 * Returns the current authenticated session.
 */
export async function getCurrentSession() {
  return getServerSession(authOptions);
}