import { ServiceCard } from "./service-card";
import {
  ServiceIcon1,
  ServiceIcon2,
  ServiceIcon3,
  ServiceIcon4,
} from "./service-icons";

const services = [
  {
    id: 1,
    title: "Data Engineering & Analytics",
    description:
      "We enable data-driven decision-making by transforming raw data into actionable intelligence.",
    icon: ServiceIcon2,
    bgColor: "bg-gradient-to-br from-rose-500 to-pink-600",
    textColor: "text-white",
  },
  {
    id: 2,
    title: "Software & Application Development",
    description:
      "We engineer robust digital solutions with a focus on reliability, performance, and user experience.",
    icon: ServiceIcon4,
    bgColor: "bg-gradient-to-br from-violet-600 to-purple-700",
    textColor: "text-white",
  },
  {
    id: 3,
    title: "Technical Strategy & Systems Consulting",
    description:
      "We work with companies to design, optimize, and scale their digital infrastructure.",
    icon: ServiceIcon3,
    bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600",
    textColor: "text-white",
  },
  {
    id: 4,
    title: "Artificial Intelligence & Automation",
    description:
      "We build intelligent systems that drive efficiency and innovation across industries.",
    icon: ServiceIcon1,
    bgColor: "bg-gradient-to-br from-slate-700 to-gray-800",
    textColor: "text-white",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 lg:mb-16">
          <h2 className="text-sm font-semibold text-[#1AA9B9] uppercase tracking-wide mb-4">
            Services
          </h2>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1D2B34] mb-6">
            What We DO
          </h1>
          <p className="text-lg text-[#6A767D] max-w-2xl leading-relaxed">
            At ATOM, we deliver cutting-edge, enterprise-grade technology
            services designed to meet the evolving needs of modern businesses
            and institutions.
          </p>
        </div>

        <div className="relative">
          <div className="lg:hidden space-y-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
      <div className="hidden lg:block overflow-hidden">
        <div className="flex gap-6">
          <div className="flex gap-6 animate-scroll py-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
            {services.map((service) => (
              <ServiceCard key={`duplicate-${service.id}`} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
