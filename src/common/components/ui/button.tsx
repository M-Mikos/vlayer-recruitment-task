import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 border-2 px-6 py-3 whitespace-nowrap rounded-lg text-base font-bold transition-all disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring",
  {
    variants: {
      variant: {
        primary:
          "text-main-white bg-text-accent border-text-accent hover:bg-secondary-100 hover:border-secondary-100 focus-visible:bg-secondary-300 focus-visible:border-secondary-800 active:bg-secondary-600 active:border-secondary-600 disabled:bg-text-paragraph disabled:border-text-paragraph",
        secondary:
          "text-base-1000 bg-transparent border-base-300 hover:border-secondary-300 focus-visible:border-secondary-300 focus-visible:text-secondary-300 active:text-secondary-1000 active:border-secondary-1000 disabled:border-base-300 disabled:text-text-disabled",
        icon: "w-12 h-12 rounded-full text-secondary-500 bg-transparent border-neutral-200 hover:border-secondary-300 hover:text-secondary-700 focus-visible:border-secondary-300 focus-visible:text-secondary-700 focus-visible:bg-secondary-200/20 active:border-secondary-300 active:bg-secondary-500 active:text-base-white",
        link: "border-0 p-0 text-base-1000 font-medium bg-transparent hover:text-secondary-300 focus-visible:text-secondary-500 active:text-secondary-1000 disabled:text-text-disabled",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

function Button({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, className }))} {...props} />;
}

export { Button, buttonVariants };
