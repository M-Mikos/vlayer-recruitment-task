import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

const tagMap: Record<string, keyof React.JSX.IntrinsicElements> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
};

const defaultTag = "h2";

const headingVariants = cva("text-base-1000 font-bold tracking-tight", {
  variants: {
    variant: {
      h1: "text-4xl text-center lg:text-left lg:text-5xl xl:text-6xl leading-[1.1] mb-8",
      h2: "text-3xl text-center lg:text-left xl:text-4xl leading-[1.25] mb-6",
      h3: "text-2xl text-center lg:text-left xl:text-3xl leading-[1.25] mb-4",
      h4: "text-2xl",
    },
  },
  defaultVariants: {
    variant: defaultTag,
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  asChild?: boolean;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant = defaultTag, asChild = false, ...props }, ref) => {
    const Comp: React.ElementType = asChild
      ? Slot
      : tagMap[variant || defaultTag];

    return (
      <Comp
        className={cn(headingVariants({ variant, className }))}
        ref={asChild ? ref : (ref as React.Ref<HTMLHeadingElement>)}
        {...props}
      />
    );
  },
);

Heading.displayName = "Heading";

export { Heading, headingVariants };
