"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const products = [
  {
    title: "Handyman",
    image: "/handyman.png",
  },
  {
    title: "Delygen Ai",
    image: "/delygen-ai.png",
  },
  {
    title: "Atom Group",
    image: "/atom-group.jpeg",
  },
];

export default function Products() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current.filter(Boolean);

    if (!section || cards.length === 0) return;

    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      cards,
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      }
    );

    cards.forEach((card) => {
      if (!card) return;
      const arrowIcon = card.querySelector(".arrow-icon");
      const cardImage = card.querySelector(".card-image");

      card.addEventListener("mouseenter", () => {
        gsap.to(arrowIcon, { scale: 1.2, duration: 0.3 });
        gsap.to(cardImage, { scale: 1.05, duration: 0.5 });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(arrowIcon, { scale: 1, duration: 0.3 });
        gsap.to(cardImage, { scale: 1, duration: 0.5 });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative container mt-6 rounded-3xl mx-auto bg-[#121921] text-white py-16 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 border-b border-gray-700 pb-6">
          <h2 className="text-4xl font-bold mb-4 md:mb-0">Products</h2>
          <p className="text-gray-300 max-w-lg">
            A showcase of the products we’ve brought to life — blending design,
            technology, and strategy to deliver real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              ref={(el: any) => (cardsRef.current[index] = el)}
              className="group relative"
            >
              <div className="relative pt-2 bg-[#8080808C] rounded-2xl overflow-hidden shadow-xl">
                <div className="px-6 pb-4  border-gray-700">
                  <h3 className="text-2xl font-semibold">{product.title}</h3>
                </div>
                <div className="relative  pt-6">
                  <div className="absolute top-6 left-6 right-6 h-[17rem]">
                    <div className="absolute inset-0 bg-gray-700 rounded-2xl -translate-x-2 -translate-y-2"></div>
                    <div className="absolute inset-0 bg-gray-600 rounded-2xl -translate-x-1 -translate-y-1"></div>
                  </div>
                  <div className="relative h-64 w-full overflow-hidden rounded-2xl rounded-br-[8rem] ">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-500 card-image "
                    />
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 rounded-full bg-[#121921] p-10">
                  <div className="bg-[#8080808C] rounded-full p-4 shadow-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
                    <ArrowUpRight className="h-6 w-6 text-white arrow-icon" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
