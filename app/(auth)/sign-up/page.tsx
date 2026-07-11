import type { Metadata } from "next";

import SignUpForm from "@/components/auth/sign-up-form";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function SignUpPage() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-12">
      <div className="mx-auto w-full max-w-md">
        <SignUpForm />
      </div>
    </main>
  );
}