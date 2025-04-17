import ContentContainer from "@/common/components/containers/content-container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/common/components/ui/carousel";
import { Heading } from "@/common/components/ui/heading";
import { Paragraph } from "@/common/components/ui/paragraph";

function SectionTestimonials() {
  const testimonialsData = [
    {
      uid: "",
    },
  ];

  return (
    <section className="from-main-white to-secondary-100/10 bg-gradient-to-b py-8">
      <ContentContainer>
        <div>
          <Heading variant="h2" className="lg:text-center">
            Testimonials
          </Heading>
          <Paragraph variant="base" className="text-center">
            See what our property managers, landlords,
            <br className="hidden lg:inline" /> and tenants have to say
          </Paragraph>
        </div>
        <Carousel>
          <CarouselContent>
            {testimonialsData.map((item) => (
              <CarouselItem key={item.uid}></CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </ContentContainer>
    </section>
  );
}

export default SectionTestimonials;
