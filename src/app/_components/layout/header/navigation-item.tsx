import { Button } from "@/common/components/ui/button";
import { NavigationMenuItem } from "@/common/components/ui/navigation-menu";
import { NavigationItemProps } from "@/types";

import Link from "next/link";

function NavigationItem({ path, label, title, handleClose }: NavigationItemProps) {
  // In mocked data all paths are the same, so styling active state based on current path is omitted

  return (
    <NavigationMenuItem>
      <Button variant="link" className="text-2xl lg:text-base" asChild>
        <Link href={path} title={title} onClick={handleClose}>
          {label}
        </Link>
      </Button>
    </NavigationMenuItem>
  );
}

export default NavigationItem;
