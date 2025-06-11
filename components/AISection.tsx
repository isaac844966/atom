"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CloudIcon from "@/components/icons/cloud-icon";
import GearIcon from "@/components/icons/gear-icon";
import DocumentIcon from "@/components/icons/document-icon";
import SettingsIcon from "@/components/icons/settings-icon";
import MailIcon from "@/components/icons/mail-icon";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const aiFeatures = [
  {
    id: 1,
    icon: <CloudIcon className="w-6 h-6 text-[#1AA9B9]" />,
    description:
      "Machine learning allows AI systems to improve over time — just like we learn from experience.",
    gridArea: "5 / 5 / 1 / 2",
  },
  {
    id: 2,
    icon: <SettingsIcon className="w-6 h-6 text-[#1AA9B9]" />,
    description:
      "AI analyzes huge amounts of data in seconds, helping businesses make faster, smarter decisions.",
    gridArea: "5 / 5 / 3 / 10",
  },
  {
    id: 3,
    icon: <DocumentIcon className="w-6 h-6 text-[#1AA9B9]" />,
    description:
      "From your smartphone keyboard to Netflix recommendations — AI is behind many tools you use daily.",
    gridArea: "7 / 7 / 5 / 1",
  },
  {
    id: 4,
    icon: <MailIcon className="w-6 h-6 text-[#1AA9B9]" />,
    description:
      "AI isn’t one-size-fits-all — businesses can build tailored models that solve their specific challenges.",
    gridArea: "5 / 7 / 8 / 10",
  },
  {
    id: 5,
    icon: <GearIcon className="w-6 h-6 text-[#1AA9B9]" />,
    description:
      "AI is revolutionizing healthcare, finance, education, agriculture, and beyond.",
    gridArea: "10 / 4 / 7 / 7",
  },
];

export default function AiSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const featuresRef = useRef<(HTMLDivElement | null)[]>([]);
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const features = featuresRef.current.filter(Boolean);
    const icons = iconsRef.current;

    if (!section || !title || features.length === 0 || !icons) return;

    gsap.fromTo(
      title,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      }
    );

    gsap.fromTo(
      features,
      { opacity: 0, y: 20, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
        },
      }
    );

    gsap.fromTo(
      icons,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      }
    );

    features.forEach((card) => {
      if (card) {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-12 lg:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0  items-start">
          <div
            ref={iconsRef}
            className="lg:w-1/3 flex justify-center lg:justify-start mx-auto"
          >
            <div className="relative w-[300px] h-[200px]">
              <Image
                src="/Group 14.svg"
                alt="AI Illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="lg:w-2/3 w-full">
            <h2
              ref={titleRef}
              className="text-3xl md:text-4xl lg:text-5xl  mb-12 text-[#1D2B34] text-center lg:text-left leading-tight"
            >
              The World of Artificial <br /> Intelligence
            </h2>

            <div className="w-full">
              <div className="hidden lg:grid grid-cols-10 grid-rows-10 gap-6 h-[700px] ">
                {aiFeatures.map((feature, index) => (
                  <div
                    key={feature.id}
                    ref={(el: any) => (featuresRef.current[index] = el)}
                    className="bg-[#FAFAFA] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
                    style={{ gridArea: feature.gridArea }}
                  >
                    <div className=" mb-1 rounded-lg w-fit shadow-sm">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 text-sm ">
                        <span className="text-gray-700 text-xs">
                          {feature.description}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
                {aiFeatures.map((feature, index) => (
                  <div
                    key={feature.id}
                    ref={(el: any) => (featuresRef.current[index] = el)}
                    className="bg-[#FAFAFA] rounded-xl p-6 transition-all duration-300"
                  >
                    <div className="mb-4 p-3 bg-white rounded-lg w-fit shadow-sm">
                      {feature.icon}
                    </div>
                    <p className="text-gray-800 text-sm leading-relaxed">
                      <span className="text-gray-700">
                        {feature.description}
                      </span>
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid md:hidden grid-cols-1 gap-4">
                {aiFeatures.map((feature, index) => (
                  <div
                    key={feature.id}
                    ref={(el: any) => (featuresRef.current[index] = el)}
                    className="bg-[#FAFAFA] rounded-xl p-6  transition-all duration-300"
                  >
                    <div className="mb-4 p-3 bg-white rounded-lg w-fit shadow-sm">
                      {feature.icon}
                    </div>
                    <p className="text-gray-800 text-sm leading-relaxed">
                      <span className="text-gray-700">
                        {feature.description}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
