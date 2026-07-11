import Logo from "@/components/ui/logo";

interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

export default function AuthHeader({
  title,
  subtitle,
}: AuthHeaderProps) {
  return (
    <header className="space-y-6 text-center">
      <div className="flex justify-center">
        <Logo href="/" showText={false} />
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          {title}
        </h1>

        <p className="text-muted-foreground">
          {subtitle}
        </p>
      </div>
    </header>
  );
}