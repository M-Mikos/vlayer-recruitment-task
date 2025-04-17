import { NavigationMenu, NavigationMenuList } from "@/common/components/ui/navigation-menu";
import { NavigationItemInterface } from "@/types";
import NavigationItem from "./navigation-item";

function Navigation() {
  const links: NavigationItemInterface[] = [
    { uid: "1", path: "#", label: "Help Center", title: "Go to Help Center" },
    { uid: "2", path: "#", label: "FAQ", title: "Go to FAQ" },
    { uid: "3", path: "#", label: "Terms & Privacy", title: "Go to Terms & Privacy" },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-wrap justify-start md:gap-8 md:justify-end">
        {links.map((link) => (
          <NavigationItem key={link.uid} path={link.path} label={link.label} title={link.title} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Navigation;
