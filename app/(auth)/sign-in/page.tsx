import AuthCard from "@/components/auth/auth-card";
import AuthDivider from "@/components/auth/auth-divider";
import AuthHeader from "@/components/auth/auth-header";
import GoogleButton from "@/components/auth/google-button";
import SignInForm from "@/components/auth/sign-in-form";

export default function SignInPage() {
  return (
    <AuthCard>
      <AuthHeader
        title="Welcome back"
        subtitle="Continue your personalized AI learning journey."
      />

      <GoogleButton />

      <AuthDivider />

      <SignInForm />
    </AuthCard>
  );
}