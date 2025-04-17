import SectionHero from "./_components/page/section-hero/section-hero";
import SectionRealEstates from "./_components/page/section-real-estates/section-real-estates";
import SectionTestimonials from "./_components/page/section-testimonials/section-testimonials";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <SectionHero />
      <SectionRealEstates />
      <SectionTestimonials />
    </main>
  );
}
