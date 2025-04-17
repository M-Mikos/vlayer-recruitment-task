import { Drawer, DrawerClose, DrawerContent, DrawerTitle } from "@/common/components/ui/drawer";
import { Dispatch, SetStateAction } from "react";
import Navigation from "./navigation";
import Actions from "./actions";
import { Button } from "@/common/components/ui/button";
import Close from "@/common/components/icons/close";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface MobileDrawerProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function MobileDrawer({ isOpen, setIsOpen }: MobileDrawerProps) {
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen} direction="left">
      <DrawerContent className="p-8 pt-6 gap-16">
        <VisuallyHidden>
          <DrawerTitle>Navigation Menu</DrawerTitle>
        </VisuallyHidden>
        <DrawerClose className="self-end" asChild>
          <Button variant="icon" className="border-0 text-base-1000 hover:text-secondary-300">
            <Close className="min-w-8 min-h-8" />
            <VisuallyHidden>Close navigation menu</VisuallyHidden>
          </Button>
        </DrawerClose>
        <Navigation handleClose={() => setIsOpen(false)} />
        <Actions handleClose={() => setIsOpen(false)} />
      </DrawerContent>
    </Drawer>
  );
}

export default MobileDrawer;
