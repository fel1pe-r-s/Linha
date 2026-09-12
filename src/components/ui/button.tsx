import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-[opacity,transform,background-color,color,box-shadow] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98] [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        solid:
          "bg-paper text-accent-fg shadow-[var(--shadow-border)] hover:opacity-90",
        ghost:
          "bg-transparent text-fg hover:bg-bg-raised shadow-[var(--shadow-border)]",
        line: "bg-transparent text-muted hover:text-fg hover:bg-bg-raised",
        accent: "bg-accent text-accent-fg hover:opacity-90",
      },
      size: {
        sm: "h-9 rounded-[8px] px-3 text-sm",
        md: "h-11 rounded-[12px] px-4 text-sm",
        lg: "h-12 rounded-[14px] px-5 text-base",
        icon: "size-11 rounded-[12px]",
      },
    },
    defaultVariants: { variant: "solid", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
