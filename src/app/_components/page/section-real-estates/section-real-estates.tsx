"use client";

import ContentContainer from "@/common/components/containers/content-container";
import { Heading } from "@/common/components/ui/heading";
import { Paragraph } from "@/common/components/ui/paragraph";

function SectionRealEstates() {
  return (
    <section>
      <ContentContainer>
        <div className="max-w-[34rem]">
          <Heading variant="h2">
            We make it easy for houses and apartments.
          </Heading>
          <Paragraph className="text-center lg:text-left">
            Whether it’s selling your current home, getting financing, or buying
            a new home, we make it easy and efficient. The best part? you’ll
            save a bunch of money and time with our services.
          </Paragraph>
        </div>
      </ContentContainer>
    </section>
  );
}

export default SectionRealEstates;
