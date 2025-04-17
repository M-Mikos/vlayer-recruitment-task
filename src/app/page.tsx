import SectionHero from "./_components/page/section-hero/section-hero";
import SectionRealEstates from "./_components/page/section-real-estates/section-real-estates";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <SectionHero />
      <SectionRealEstates />
    </main>
  );
}
