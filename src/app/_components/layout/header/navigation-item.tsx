import { Button } from "@/common/components/ui/button";
import { NavigationMenuItem } from "@/common/components/ui/navigation-menu";
import { NavigationItemProps } from "@/types";

import Link from "next/link";

function NavigationItem({ path, label, title, handleClose }: NavigationItemProps) {
  // In mocked data all paths are the same, so styling active state based on current path is omitted

  return (
    <NavigationMenuItem>
      <Link href={path} title={title} onClick={handleClose}>
        <Button variant="link" className="text-2xl lg:text-base">
          {label}
        </Button>
      </Link>
    </NavigationMenuItem>
  );
}

export default NavigationItem;
