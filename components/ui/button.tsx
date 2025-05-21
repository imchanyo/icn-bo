import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 ease-in-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-gray-300",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-button-bg)] text-[var(--color-white)] shadow-sm hover:bg-[var(--color-button-hover-bg)] hover:shadow-md hover:scale-[1.01]",
        destructive:
          "bg-red-600 text-white shadow-sm hover:bg-red-700 focus-visible:ring-red-300",
        outline:
          "border border-[var(--color-gray-300)] bg-[var(--color-white)] text-[var(--color-gray-900)] hover:bg-[var(--color-gray-50)] hover:shadow",
        secondary:
          "bg-[var(--color-gray-100)] text-[var(--color-gray-800)] hover:bg-[var(--color-gray-200)] hover:shadow-sm",
        ghost:
          "text-[var(--color-gray-900)] hover:bg-[var(--color-gray-100)] hover:opacity-90",
        link: "text-[var(--color-gray-900)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
