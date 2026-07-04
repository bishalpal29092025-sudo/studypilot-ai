import type { ReactNode } from "react";

interface PageHeadingProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export default function PageHeading({
  title,
  description,
  action,
}: PageHeadingProps) {
  return (
    <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          {title}
        </h1>

        {description && (
          <p className="max-w-2xl text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      {action}
    </header>
  );
}