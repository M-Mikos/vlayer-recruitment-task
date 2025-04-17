"use client";

import ContentContainer from "@/common/components/containers/content-container";
import Logo from "../logo";
import Link from "next/link";
import { useMediaQuery } from "@/common/hooks/use-media-query";
import Actions from "./actions";
import { Button } from "@/common/components/ui/button";
import Navigation from "./navigation";
import MobileDrawer from "./mobile-drawer";
import { useState } from "react";
import Menu from "@/common/components/icons/menu";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

function Header() {
  const isDesktop = useMediaQuery("(min-width:64em)");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header>
      <ContentContainer className="flex h-24 items-center justify-between">
        <div className="h-fit w-32">
          <Link title="Go to homepage" href="/">
            <Logo />
          </Link>
        </div>
        {isDesktop ? (
          <div className="flex items-center lg:gap-8 xl:gap-20 2xl:gap-32">
            <Navigation />
            <Actions />
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Button
              onClick={() => setIsDrawerOpen(true)}
              variant="icon"
              className="text-base-1000 hover:text-secondary-300 border-none"
            >
              <Menu className="min-h-8 min-w-8" />
              <VisuallyHidden>Open navigation menu</VisuallyHidden>
            </Button>
            <MobileDrawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
          </div>
        )}
      </ContentContainer>
    </header>
  );
}

export default Header;
