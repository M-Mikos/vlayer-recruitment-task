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

function Header() {
  const isDesktop = useMediaQuery("(min-width:64em)");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header>
      <ContentContainer className="flex justify-between items-center h-24">
        <div className="w-32 h-fit">
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
            <Button onClick={() => setIsDrawerOpen(true)} variant="icon" className="border-none px-2">
              +
            </Button>
            <MobileDrawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
          </div>
        )}
      </ContentContainer>
    </header>
  );
}

export default Header;
