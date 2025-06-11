import AiSection from "@/components/AISection";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main className="min-h-screen md:mx-10 mt-28">
      <Products />
      <AiSection />
    </main>
  );
}
