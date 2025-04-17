import Link from "next/link";
import Logo from "../logo";
import Navigation from "./navigation";
import Socials from "./socials";
import ContentContainer from "@/common/components/containers/content-container";

function Footer() {
  return (
    <footer>
      <ContentContainer className="flex flex-col gap-6 py-8">
        <div className="flex flex-col justify-between gap-3 sm:flex-row">
          <div className="h-fit w-32">
            <Link title="Go to homepage" href="/">
              <Logo />
            </Link>
          </div>
          <Navigation />
        </div>
        <hr className="border-base-200 w-full border-t" />
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <span className="text-base-1000 opacity-50">
            ©2021 Estatery. All rights reserved
          </span>
          <Socials />
        </div>
      </ContentContainer>
    </footer>
  );
}

export default Footer;
