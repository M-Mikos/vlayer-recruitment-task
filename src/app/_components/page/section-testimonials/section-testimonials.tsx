"use client";

import ContentContainer from "@/common/components/containers/content-container";
import AnimatedText from "@/common/components/ui/animated-text";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/common/components/ui/carousel";
import { Heading } from "@/common/components/ui/heading";
import { Paragraph } from "@/common/components/ui/paragraph";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useState } from "react";

function SectionTestimonials() {
  const config = { carouselAutoplayDelay: 4000 };
  const testimonialsData = [
    {
      uid: "1",
      content:
        "Estatery is the platform I go to on almost a daily basis for 2nd home and vacation condo shopping, or to just look at dream homes in new areas. Thanks for fun home shopping and comparative analyzing, Estatery!",
      authorName: "Mira Culos",
      authorRole: "Renter",
      authorPhoto: "/testimonials/mira-culos.avif",
    },
    {
      uid: "2",
      content:
        "I check Estatery almost every day — whether I'm seriously house hunting or just daydreaming about future getaways. It makes exploring new locations and comparing properties incredibly easy and enjoyable.",
      authorName: "Mark Brown",
      authorRole: "Renter",
      authorPhoto: "/testimonials/mark-brown.avif",
    },
    {
      uid: "3",
      content:
        "Estatery turns home shopping into a daily delight. Whether I'm planning for the future or just exploring what's out there, I always find something exciting and new.",
      authorName: "Jake White",
      authorRole: "Renter",
      authorPhoto: "/testimonials/jake-white.avif",
    },
  ];

  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => setActiveIndex(api.selectedScrollSnap());
    api.on("select", handleSelect);
  }, [api]);

  const handlePhotoClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <section className="from-main-white to-secondary-100/10 bg-gradient-to-b py-8">
      <ContentContainer>
        <div className="mb-4 flex flex-col items-center">
          <Heading variant="h2" className="lg:text-center">
            <AnimatedText text="Testimonials" />
          </Heading>
          <Paragraph variant="base" className="max-w-xl text-center">
            <AnimatedText text="See what our property managers, landlords, and tenants have to say" />
          </Paragraph>
        </div>
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: config.carouselAutoplayDelay,
            }),
          ]}
        >
          <CarouselContent>
            {testimonialsData.map((item) => (
              <CarouselItem
                key={item.uid}
                className="flex flex-col items-center justify-center py-8"
              >
                <Paragraph
                  variant="large"
                  className="mb-8 max-w-3xl text-center"
                  asChild
                >
                  <blockquote>“{item.content}”</blockquote>
                </Paragraph>
                <address className="not-italic">
                  <span className="font-bold">{item.authorName}</span>
                  {", "}
                  <span className="text-base-600">{item.authorRole}</span>
                </address>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </ContentContainer>
      <div className="flex justify-center gap-8">
        {testimonialsData.map((item, index) => (
          <div
            key={item.uid}
            className="relative h-16 w-16"
            onClick={() => handlePhotoClick(index)}
          >
            <Image
              src={item.authorPhoto}
              width={64}
              height={64}
              alt={item.authorName}
              className="rounded-full"
            />
            <svg
              className={`text-base-200 absolute -inset-2 rounded-full`}
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
            </svg>
            <svg
              className={`text-base-200 absolute -inset-2 -rotate-90 rounded-full ${activeIndex === index ? `text-text-accent animate-[spin-ring_linear_infinite]` : ""}`}
              style={{
                animationDuration: `${config.carouselAutoplayDelay / 1000}s`,
              }}
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
            </svg>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionTestimonials;
