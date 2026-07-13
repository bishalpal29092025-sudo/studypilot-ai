import { redirect } from "next/navigation";

import { getCurrentSession } from "./session";

/**
 * Protect a server page.
 */
export async function requireAuth() {
  const session = await getCurrentSession();

  if (!session?.user) {
    redirect("/sign-in");
  }

  return session.user;
}