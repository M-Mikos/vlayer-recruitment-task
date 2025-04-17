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
        className="font-medium uppercase border-transparent text-base-1000/50 hover:border-transparent hover:text-secondary-300"
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
