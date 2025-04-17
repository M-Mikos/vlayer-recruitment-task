import EstateContainer from "@/common/components/containers/estate-container";
import { Heading } from "@/common/components/ui/heading";
import { Paragraph } from "@/common/components/ui/paragraph";
import StatsItem from "./stats-item";
import { StatsItemInterface } from "@/types";
import heroBackground from "@/../public/hero-background.avif";
import Image from "next/image";

function SectionHero() {
  const estateData = {
    title: "Beverly Springfield",
    price: 2700,
    address: "2821 Lake Sevilla, Palm Harbor, TX",
    imageSrc: "/real-estates/beverly-springfield.avif",
    imageAlt: "Beverly Spiringfield real estate",
    category: "apartments",
    categoryVisible: false,
    addToFavVisible: false,
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
    <section className="relative flex items-center flex-col gap-4 w-full lg:flex-row lg:gap-0 lg:h-[calc(100vh-6rem)] lg:max-h-[45rem] min-h-[30rem]">
      <div className="basis-1/2 h-full flex items-center py-4 justify-end bg-[radial-gradient(circle_at_50%_90%,var(--color-secondary-50),white)]">
        <div className="w-full px-8 lg:px-16 lg:w-[32rem] xl:w-[40rem] 2xl:w-[48rem]">
          <div className="mb-8 lg:mb-20">
            <Heading variant="h1">Buy, rent, or sell your property easily</Heading>
            <Paragraph variant="large" className="text-center lg:text-left">
              A great platform to buy, sell, or even rent
              <br className="hidden lg:inline" />
              your properties without any commisions.
            </Paragraph>
          </div>
          <div className="flex gap-8 justify-center lg:justify-start">
            {statsData.map((stat) => (
              <StatsItem key={stat.uid} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
      <div className="relative w-full lg:basis-1/2 h-full flex flex-col justify-center">
        <Image
          src={heroBackground}
          alt=""
          width={1400}
          height={1500}
          className="absolute inset-0 w-full h-full object-cover -z-1 pl-12 pr-8 lg:pl-0 lg:pr-0"
        />
        <div className="scale-50 -ml-[25%] lg:scale-none lg:-ml-6 xl:-ml-12">
          <EstateContainer
            title={estateData.title}
            price={estateData.price}
            address={estateData.address}
            imageSrc={estateData.imageSrc}
            imageAlt={estateData.imageAlt}
            category={estateData.category}
            categoryVisible={estateData.categoryVisible}
            addToFavVisible={estateData.addToFavVisible}
            className="shadow-[0_4px_40px_rgba(230,230,237,1)]"
          />
        </div>
      </div>
    </section>
  );
}

export default SectionHero;
