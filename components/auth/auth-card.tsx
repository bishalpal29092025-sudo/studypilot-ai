import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AuthCardProps {
  children: ReactNode;
  className?: string;
}

export default function AuthCard({ children, className }: AuthCardProps) {
  return (
    <div
      className={cn(
        "w-full max-w-md",
        "rounded-3xl",
        "border border-white/10",
        "bg-zinc-950/70",
        "backdrop-blur-2xl",
        "shadow-2xl",
        "p-8 md:p-10",
        className,
      )}
    >
      {children}
    </div>
  );
}
