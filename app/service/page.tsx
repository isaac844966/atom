import { ServicesSection } from "@/components/services-section";
import { StatsSection } from "@/components/stats-section";

export default function HomePage() {
  return (
    <main className="min-h-screen mt-4">
      <ServicesSection />
      <StatsSection />
    </main>
  );
}
