"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        // ✅ 기본 디자인
        "w-5 h-5 rounded-[3px] border border-[var(--color-gray-400)] bg-white",
        "data-[state=checked]:bg-white data-[state=checked]:text-black",
        "data-[state=checked]:border-[var(--color-gray-900)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gray-500)] transition-colors",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="w-[14px] h-[14px]" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
