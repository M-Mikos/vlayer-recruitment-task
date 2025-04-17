import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
} from "@/common/components/ui/drawer";
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
      <DrawerContent className="gap-16 p-8 pt-6">
        <VisuallyHidden>
          <DrawerTitle>Navigation Menu</DrawerTitle>
        </VisuallyHidden>
        <DrawerClose className="self-end" asChild>
          <Button
            variant="icon"
            className="text-base-1000 hover:text-secondary-300 border-0"
          >
            <Close className="min-h-8 min-w-8" />
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
