import clsx from "clsx";

export default function ContentContainer({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className={clsx("mx-auto w-full px-8 lg:px-16 lg:container", className)} {...props}>
      {children}
    </div>
  );
}
