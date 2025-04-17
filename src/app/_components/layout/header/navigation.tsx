import {
  NavigationMenu,
  NavigationMenuList,
} from "@/common/components/ui/navigation-menu";
import NavigationItem from "./navigation-item";
import { NavigationItemInterface } from "@/types";

interface NavigationProps {
  handleClose?: () => void;
}

function Navigation({ handleClose }: NavigationProps) {
  const links: NavigationItemInterface[] = [
    { uid: "1", path: "#", label: "Rent", title: "Go to Rent" },
    { uid: "2", path: "#", label: "Buy", title: "Go to Buy" },
    { uid: "3", path: "#", label: "Sell", title: "Go to Sell" },
    {
      uid: "4",
      path: "#",
      label: "Manage Property",
      title: "Go to Manage Property",
    },
    { uid: "5", path: "#", label: "Resources", title: "Go to Resources" },
  ];

  return (
    <NavigationMenu className="items-start lg:items-center">
      <NavigationMenuList className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-8 xl:gap-14">
        {links.map((link) => (
          <NavigationItem
            key={link.uid}
            path={link.path}
            label={link.label}
            title={link.title}
            handleClose={handleClose}
          />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Navigation;
