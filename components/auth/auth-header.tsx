interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

export default function AuthHeader({ title, subtitle }: AuthHeaderProps) {
  return (
    <header className="space-y-3 text-center">
      <div className="bg-primary/10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl">
        <span className="text-2xl">🎓</span>
      </div>
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-muted-foreground text-sm">{subtitle}</p>
      </div>
    </header>
  );
}