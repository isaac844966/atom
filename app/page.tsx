import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="bg-[#EEFDFF] mx-2 md:mx-10 mt-28 rounded-2xl md:rounded-3xl overflow-hidden">
        <HeroSection />
        <ServicesSection />
      </div>
      <ContactSection />
    </main>
  );
}
