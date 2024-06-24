import { Footer } from "@/components/landing-page/footer";
import { Navbar } from "@/components/landing-page/navbar";
import { AboutSection } from "@/components/landing-page/sections/about-section";
import { FeatureSection } from "@/components/landing-page/sections/features-section";
import { GetStartedSection } from "@/components/landing-page/sections/get-started-section";
import { HeroSection } from "@/components/landing-page/sections/hero-section";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <GetStartedSection />
      <Footer />
    </main>
  );
}
