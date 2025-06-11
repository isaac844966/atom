"use client";

import { Button } from "@/components/ui/button";
import { scrollToSection } from "./navbar";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section id="about" className="py-16 md:min-h-screen md:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 mb-6 leading-tight">
            From <span className="text-teal-500 font-normal">Bold Ideas</span>{" "}
            to
            <br />
            <span className="text-teal-500 font-normal">Industry Changing</span>
            <br />
            Solutions.
          </h1>

          <p className="text-md text-[#6A767D] mb-6 max-w-4xl mx-auto font-medium">
            Africa’s Emerging AI Powerhouse – Building Tomorrow’s Tech <br />
            Today. Directly states your market positioning and innovative edge.
          </p>

          <div className="flex gap-4 justify-center mb-12 lg:mb-16">
            <Button
              variant="outline"
              size="lg"
              onClick={() => router.push("/products")}
              className="px-8 py-3 text-base border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-50"
            >
              See Our Work
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 text-base bg-[#1AA9B9] hover:bg-teal-600 text-white"
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}