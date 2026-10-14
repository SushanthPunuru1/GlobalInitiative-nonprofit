import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/*
  Badges are ink stamps: square-ish, flat, hard-edged. Nothing in the palette
  outside the five inks, so a cause tag can never clash with the rest of the
  page the way a stock pastel pill does.
*/
const badgeVariants = cva(
  "inline-flex items-center rounded-sm border-2 border-ink px-2 py-0.5 text-xs font-semibold tracking-tight",
  {
    variants: {
      variant: {
        default: "bg-navy text-paper",
        secondary: "bg-paper text-ink",
        destructive: "bg-brick text-paper",
        outline: "bg-transparent text-ink",
        marigold: "bg-marigold text-ink",
        moss: "bg-moss text-paper",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

/*
  Each cause gets one ink. Five causes, five inks, assigned once here so every
  surface that shows a cause agrees with every other.
*/
export const causeInk: Record<string, string> = {
  Education: "bg-marigold text-ink",
  Health: "bg-brick text-paper",
  Environment: "bg-moss text-paper",
  Relief: "bg-paper text-ink",
  Community: "bg-navy text-paper",
};

export { Badge, badgeVariants };
