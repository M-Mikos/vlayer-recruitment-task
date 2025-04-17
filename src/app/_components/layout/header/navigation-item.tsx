import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/common/components/ui/navigation-menu";
import clsx from "clsx";
import Link from "next/link";

interface NavigationItemProps extends React.HTMLAttributes<HTMLElement> {
  path: string;
  label: string;
  title: string;
}

function NavigationItem({ path, label, title }: NavigationItemProps) {
  return (
    <NavigationMenuItem>
      <Link href={path} title={title} passHref>
        <NavigationMenuLink
          className={clsx(navigationMenuTriggerStyle(), "m-1")}
          // All paths are the same, so styling active state is disabled
          // active={pathname === path}
        >
          {label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}

export default NavigationItem;
