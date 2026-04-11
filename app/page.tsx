import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import AboutSection from "@/components/AboutSection/AboutSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Testimonials />
      <Services />
      <AboutSection />
    </main>

  );
}
