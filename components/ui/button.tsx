import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/*
  Buttons are printed blocks. They sit on a hard offset shadow and physically
  press into it when clicked — the only motion on most pages, and it answers
  something the person did.
*/
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm border-2 border-ink font-semibold tracking-tight transition-[transform,box-shadow,background-color] duration-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none motion-reduce:active:translate-x-0 motion-reduce:active:translate-y-0",
  {
    variants: {
      variant: {
        default: "bg-navy text-paper shadow-print-sm hover:bg-ink",
        destructive: "bg-brick text-paper shadow-print-sm hover:brightness-95",
        outline: "bg-paper text-ink shadow-print-sm hover:bg-paper-deep",
        secondary: "bg-marigold text-ink shadow-print-sm hover:brightness-95",
        // Ghost and link carry no block, so they carry no shadow either.
        ghost:
          "border-transparent text-ink hover:bg-paper-deep active:translate-x-0 active:translate-y-0",
        link: "border-transparent text-navy underline decoration-2 underline-offset-4 hover:decoration-marigold active:translate-x-0 active:translate-y-0",
      },
      size: {
        default: "h-11 px-5 py-2 text-sm",
        sm: "h-9 px-3.5 text-sm",
        lg: "h-14 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
