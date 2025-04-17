"use client";

import ContentContainer from "@/common/components/containers/content-container";
import Logo from "../logo";
import Link from "next/link";
import { useMediaQuery } from "@/common/hooks/use-media-query";
import Actions from "./actions";
import { Button } from "@/common/components/ui/button";
import Navigation from "./navigation";
import { useState } from "react";

function Header() {
  const isDesktop = useMediaQuery("(min-width:64em)");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header>
      <ContentContainer>
        <div className="w-32">
          <Link title="Go to homepage" href="/">
            <Logo />
          </Link>
        </div>
        {isDesktop ? (
          <div className="flex items-center gap-12">
            <Navigation />
            <Actions />
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Button onClick={() => setIsDrawerOpen(true)} variant="icon" className="px-2"></Button>
          </div>
        )}
      </ContentContainer>
    </header>
  );
}

export default Header;
