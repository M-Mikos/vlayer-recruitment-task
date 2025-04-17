import { Button } from "@/common/components/ui/button";
import { NavigationMenuItem } from "@/common/components/ui/navigation-menu";
import { NavigationItemProps } from "@/types";
import Link from "next/link";

function NavigationItem({ path, label, title }: NavigationItemProps) {
  // In mocked data all paths are the same, so styling active state based on current path is omitted

  return (
    <NavigationMenuItem>
      <Button
        variant="secondary"
        className="text-base-1000/50 hover:text-secondary-300 border-transparent font-medium uppercase hover:border-transparent"
        asChild
      >
        <Link href={path} title={title}>
          {label}
        </Link>
      </Button>
    </NavigationMenuItem>
  );
}

export default NavigationItem;
