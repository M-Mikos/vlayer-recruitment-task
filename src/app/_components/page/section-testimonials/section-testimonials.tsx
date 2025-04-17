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
      uid: "1",
      content:
        "Estatery is the platform I go to on almost a daily basis for 2nd home and vacation condo shopping, or to just look at dream homes in new areas. Thanks for fun home shopping and comparative analyzing, Estatery!",
      authorName: "Mira Culos",
      authorRole: "Renter",
      autorPhoto: "/testimonials/mira-culos.avif",
    },
    {
      uid: "2",
      content:
        "I check Estatery almost every day — whether I'm seriously house hunting or just daydreaming about future getaways. It makes exploring new locations and comparing properties incredibly easy and enjoyable.",
      authorName: "Mark Brown",
      authorRole: "Renter",
      autorPhoto: "/testimonials/mark-brown.avif",
    },
    {
      uid: "3",
      content:
        "Estatery turns home shopping into a daily delight. Whether I'm planning for the future or just exploring what's out there, I always find something exciting and new.",
      authorName: "Jake White",
      authorRole: "Renter",
      autorPhoto: "/testimonials/jake-white.avif",
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
              <CarouselItem key={item.uid} className="flex justify-center py-8">
                <Paragraph variant="large" className="max-w-3xl text-center">
                  {item.content}
                </Paragraph>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </ContentContainer>
    </section>
  );
}

export default SectionTestimonials;
