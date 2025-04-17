import { Button } from "@/common/components/ui/button";
import { NavigationMenuItem } from "@/common/components/ui/navigation-menu";

import Link from "next/link";

interface NavigationItemProps extends React.HTMLAttributes<HTMLElement> {
  path: string;
  label: string;
  title: string;
}

function NavigationItem({ path, label, title }: NavigationItemProps) {
  // In mocked data all paths are the same, so styling active state based on current path is ommited

  return (
    <NavigationMenuItem>
      <Link href={path} title={title}>
        <Button variant="link">{label}</Button>
      </Link>
    </NavigationMenuItem>
  );
}

export default NavigationItem;
