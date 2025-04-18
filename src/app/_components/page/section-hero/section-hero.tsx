import EstateContainer from "@/common/components/containers/estate-container";
import { Heading } from "@/common/components/ui/heading";
import { Paragraph } from "@/common/components/ui/paragraph";
import StatsItem from "./stats-item";
import { StatsItemInterface } from "@/types";
import heroBackground from "@/../public/hero-background.avif";
import Image from "next/image";
import AnimatedText from "@/common/components/ui/animated-text";

function SectionHero() {
  const realEstateData = {
    uid: 1,
    title: "Beverly Springfield",
    price: 2700,
    address: "2821 Lake Sevilla, Palm Harbor, TX",
    imageSrc: "/real-estates/beverly-springfield.avif",
    imageAlt: "Beverly Spiringfield real estate",
    category: "apartments",
  };

  const statsData: StatsItemInterface[] = [
    {
      uid: "1",
      value: 50,
      suffix: "k+",
      label: "renters",
    },
    { uid: "2", value: 10, suffix: "k+", label: "properties" },
  ];

  return (
    <section className="relative flex min-h-[30rem] w-full flex-col items-center gap-4 lg:h-[calc(100vh-6rem)] lg:max-h-[45rem] lg:flex-row lg:gap-0">
      <div className="flex h-full basis-1/2 items-center justify-end bg-[radial-gradient(circle_at_50%_90%,var(--color-secondary-50),white)] py-4">
        <div className="w-full px-8 lg:w-[32rem] lg:px-16 xl:w-[40rem] 2xl:w-[48rem]">
          <div className="mb-8 lg:mb-20">
            <Heading variant="h1">
              <AnimatedText text="Buy, rent, or sell your property easily" />
            </Heading>
            <Paragraph
              variant="large"
              className="max-w-xl text-center lg:text-left"
            >
              <AnimatedText
                text="A great platform to buy, sell, or even rent your properties
              without any commisions."
              />
            </Paragraph>
          </div>
          <div className="flex justify-center gap-8 lg:justify-start">
            {statsData.map((stat) => (
              <StatsItem
                key={stat.uid}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="relative flex h-full w-full flex-col justify-center lg:basis-1/2">
        <Image
          src={heroBackground}
          alt=""
          width={1400}
          height={1500}
          className="absolute inset-0 -z-1 h-full w-full object-cover pr-8 pl-12 lg:pr-0 lg:pl-0"
        />
        <div className="-ml-[25%] scale-50 lg:-ml-6 lg:scale-none xl:-ml-12">
          <EstateContainer
            title={realEstateData.title}
            price={realEstateData.price}
            address={realEstateData.address}
            imageSrc={realEstateData.imageSrc}
            imageAlt={realEstateData.imageAlt}
            category={realEstateData.category}
            categoryVisible={false}
            addToFavVisible={false}
            className="shadow-[0_4px_40px_rgba(230,230,237,1)]"
          />
        </div>
      </div>
    </section>
  );
}

export default SectionHero;
