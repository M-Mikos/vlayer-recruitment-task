import { Drawer, DrawerContent, DrawerTitle } from "@/common/components/ui/drawer";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Dispatch, SetStateAction } from "react";
import Navigation from "./navigation";
import Actions from "./actions";

interface MobileDrawerProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function MobileDrawer({ isOpen, setIsOpen }: MobileDrawerProps) {
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent className="h-dvh items-start">
        <VisuallyHidden.Root>
          <DrawerTitle>Navigation Menu</DrawerTitle>
        </VisuallyHidden.Root>
        <Navigation handleClose={() => setIsOpen(false)} />
        <Actions />
      </DrawerContent>
    </Drawer>
  );
}

export default MobileDrawer;
