"use client";

import EstateContainer from "@/common/components/containers/estate-container";
import { Heading } from "@/common/components/ui/heading";
import { Paragraph } from "@/common/components/ui/paragraph";
import { useState } from "react";
import TabsSwitch from "./tabs-switch";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/common/components/ui/carousel";
import AnimatedText from "@/common/components/ui/animated-text";
import ContentContainer from "@/common/components/containers/content-container";

function SectionRealEstates() {
  const realEstatesData = [
    {
      uid: "1",
      title: "Palm Harbor",
      price: 3440,
      address: "2699 Green Valley, Highland Lake, FL",
      imageSrc: "/real-estates/palm-harbor.avif",
      imageAlt: "Palm Harbor real estate",
      category: "house",
    },
    {
      uid: "2",
      title: "St. Crystal",
      price: 6550,
      address: "210 US Highway, Highland Lake, FL",
      imageSrc: "/real-estates/st-crystal.avif",
      imageAlt: "St. Crystal real estate",
      category: "house",
    },
    {
      uid: "3",
      title: "Faulkner Ave",
      price: 4950,
      address: "909 Woodland St, Michigan, IN",
      imageSrc: "/real-estates/faulkner-ave.avif",
      imageAlt: "Faulkner Ave real estate",
      category: "house",
    },
    {
      uid: "4",
      title: "Tarpon Bay",
      price: 2140,
      address: "103 Lake Shores, Michigan, IN",
      imageSrc: "/real-estates/tarpon-bay.avif",
      imageAlt: "Tarpon Bay real estate",
      category: "apartments",
    },
    {
      uid: "5",
      title: "Cove Red",
      price: 1450,
      address: "243 Curlew Road, Palm Harbor, TX",
      imageSrc: "/real-estates/cove-red.avif",
      imageAlt: "Cove Red real estate",
      category: "apartments",
    },
    {
      uid: "6",
      title: "Beverly Springfield",
      price: 2700,
      address: "2821 Lake Sevilla, Palm Harbor, TX",
      imageSrc: "/real-estates/beverly-springfield.avif",
      imageAlt: "Beverly Spiringfield real estate",
      category: "apartments",
    },
  ];

  const [category, setCategory] = useState("house");
  const categories = ["house", "apartments"];

  return (
    <section>
      <div className="flex flex-col items-center gap-8">
        <TabsSwitch tabs={categories} current={category} setTab={setCategory} />
        <ContentContainer className="flex justify-center">
          <div className="max-w-[34rem]">
            <Heading variant="h2" className="lg:text-center">
              <AnimatedText
                text="We make it easy for houses and
            apartments."
              />
            </Heading>
            <Paragraph className="text-center">
              <AnimatedText
                text=" Whether it’s selling your current home, getting financing, or buying
            a new home, we make it easy and efficient. The best part? you’ll
            save a bunch of money and time with our services."
              />
            </Paragraph>
          </div>
        </ContentContainer>
        <Carousel className="max-w-dvw self-start lg:self-center">
          <CarouselContent className="px-4">
            {realEstatesData
              .filter((estate) => estate.category === category)
              .map((estate) => (
                <CarouselItem
                  key={estate.uid}
                  className="basis-[90%] sm:basis-[75%] md:basis-1/2 lg:basis-1/3"
                >
                  <EstateContainer
                    title={estate.title}
                    price={estate.price}
                    address={estate.address}
                    imageSrc={estate.imageSrc}
                    imageAlt={estate.imageAlt}
                    category={estate.category}
                    categoryVisible={true}
                    addToFavVisible={true}
                  />
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

export default SectionRealEstates;
