import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  as?: "main" | "section" | "div";
}

export default function PageContainer({
  children,
  className,
  as: Component = "main",
}: PageContainerProps) {
  <Component className={cn("max-e-7xl mx-auto w-full px-6 lg:px-8", className)}>
    {children}
  </Component>;
}