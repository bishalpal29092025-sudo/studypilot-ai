import Link from "next/link";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  href?: string;
  showText?: boolean;
}

export default function Logo({
  className,
  href = "/",
  showText = true,
}: LogoProps) {
  const logo = (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="bg-primary text-primary-foreground flex h-11 w-11 items-center justify-center rounded-2xl shadow-lg">
        <span aria-hidden="true">🎓</span>
      </div>

      {showText && (
        <div className="leading-tight">
          <p className="text-lg font-bold tracking-tight">
            StudyPilot
          </p>

          <p className="text-xs text-muted-foreground">
            AI Study Coach
          </p>
        </div>
      )}
    </div>
  );

  return <Link href={href}>{logo}</Link>;
}