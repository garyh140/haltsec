import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-12 sm:py-16 md:py-24", className)}>
      <div className="container px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
