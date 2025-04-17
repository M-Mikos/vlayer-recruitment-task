import ContentContainer from "@/common/components/containers/content-container";
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
    <section className="relative flex items-center w-full h-[calc(100vh-6rem)] max-h-[45rem] min-h-[30rem]">
      <Image
        src={heroBackground}
        alt=""
        width={1400}
        height={1500}
        className="absolute right-0 top-0 w-1/2 h-full object-cover -z-1"
      />
      <ContentContainer className="flex flex-col gap:6 lg:flex-row lg:gap-0">
        <div className="basis-1/2 lg:pr-16 bg-[radial-gradient(circle_at_30%_70%,var(--color-secondary-50),white)]">
          <div className="basis-1/2 mb-20">
            <Heading variant="h1">Buy, rent, or sell your property easily</Heading>
            <Paragraph variant="large" className="text-center lg:text-left">
              A great platform to buy, sell, or even rent
              <br className="hidden lg:inline" />
              your properties without any commisions.
            </Paragraph>
          </div>
          <div className="flex gap-8">
            {statsData.map((stat) => (
              <StatsItem key={stat.uid} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
        <div className="basis-1/2">
          <div className="lg:-ml-6 xl:-ml-12">
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
      </ContentContainer>
    </section>
  );
}

export default SectionHero;
