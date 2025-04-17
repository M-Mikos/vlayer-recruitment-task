import { Drawer, DrawerClose, DrawerContent, DrawerTitle } from "@/common/components/ui/drawer";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Dispatch, SetStateAction } from "react";
import Navigation from "./navigation";
import Actions from "./actions";
import { Button } from "@/common/components/ui/button";
import closeIcon from "@/../public/icons/close.svg";
import Image from "next/image";

interface MobileDrawerProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function MobileDrawer({ isOpen, setIsOpen }: MobileDrawerProps) {
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen} direction="left">
      <DrawerContent className="p-8 pt-4 gap-16">
        <VisuallyHidden.Root>
          <DrawerTitle>Navigation Menu</DrawerTitle>
        </VisuallyHidden.Root>
        <DrawerClose className="self-end">
          <Button variant="icon" className="border-0">
            <Image src={closeIcon} width="32" height="32" alt="Close mobile drawer" unoptimized={true} />
          </Button>
        </DrawerClose>
        <Navigation handleClose={() => setIsOpen(false)} />
        <Actions />
      </DrawerContent>
    </Drawer>
  );
}

export default MobileDrawer;
