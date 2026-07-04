import AuthCard from "@/components/auth/auth-card"
import AuthHeader from "@/components/auth/auth-header"


export default function SignInPage() {
  return (
    <AuthCard>
        <AuthHeader
        title="Welcome Back"
        subtitle="Continue your AI-powered learning journey."
        />
    </AuthCard>
  );
}