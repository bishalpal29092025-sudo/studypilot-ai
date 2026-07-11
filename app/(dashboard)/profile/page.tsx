import { getCurrentUser } from "@/lib/auth/user";

export default async function ProfilePage() {
  const user = await getCurrentUser();

  return (
    <main className="p-10">
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
    </main>
  );
}