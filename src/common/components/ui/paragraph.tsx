import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

const paragraphVariants = cva("font-medium leading-[1.6]", {
  variants: {
    variant: {
      large: "text-base-1000 text-xl",
      base: "text-base-600 text-base",
    },
  },
  defaultVariants: {
    variant: "base",
  },
});

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {
  asChild?: boolean;
}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, variant = "base", asChild = false, ...props }, ref) => {
    const Comp: React.ElementType = asChild ? Slot : "p";

    return (
      <Comp
        className={cn(paragraphVariants({ variant, className }))}
        ref={asChild ? ref : (ref as React.Ref<HTMLParagraphElement>)}
        {...props}
      />
    );
  }
);

Paragraph.displayName = "Paragraph";

export { Paragraph, paragraphVariants };
