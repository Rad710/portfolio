import { cn } from "@/lib/utils";

export function TechTags({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((tech) => (
        <li
          key={tech}
          className="rounded-full border border-border bg-surface/50 px-2.5 py-1 font-mono text-xs text-muted"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}
