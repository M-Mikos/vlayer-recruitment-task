import { v4 as uuidv4 } from "uuid";
import { NavigationMenu, NavigationMenuList } from "@/common/components/ui/navigation-menu";
import NavigationItem from "./navigation-item";

interface NavigationProps {
  handleClose?: () => void;
}

function Navigation({ handleClose }: NavigationProps) {
  // Mock link data with universally unique identifiers, to prevent react component key repetition.
  const links = [
    { uuid: uuidv4(), path: "#", label: "Rent", title: "Go to Rent" },
    { uuid: uuidv4(), path: "#", label: "Buy", title: "Go to Buy" },
    { uuid: uuidv4(), path: "#", label: "Sell", title: "Go to Sell" },
    { uuid: uuidv4(), path: "#", label: "Manage Property", title: "Go to Manage Property" },
    { uuid: uuidv4(), path: "#", label: "Resources", title: "Go to Resources" },
  ];

  return (
    <NavigationMenu className="items-start lg:items-center">
      <NavigationMenuList className="flex flex-col gap-8 items-start lg:items-center lg:flex-row lg:gap-8 xl:gap-14">
        {links.map((link) => (
          <NavigationItem
            key={link.uuid}
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
