interface AuthDividerProps {
    label?: string;
  }
  
  export default function AuthDivider({
    label = "OR",
  }: AuthDividerProps) {
    return (
      <div className="flex items-center gap-4">
        <div className="bg-border h-px flex-1" />
  
        <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
          {label}
        </span>
  
        <div className="bg-border h-px flex-1" />
      </div>
    );
  }