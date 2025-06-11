import { StatCard } from "./stat-card";

const stats = [
  {
    value: "1000+",
    label: "Clients",
  },
  {
    value: "600%",
    label: "Value increase",
  },
  {
    value: "830",
    label: "Finished products",
  },
];

export function StatsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2B34] mb-4">
            Our Customer Footprint
          </h2>
          <p className="text-lg text-[#6A767D] max-w-2xl mx-auto">
            See how we're making an impact across regions and industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 bg-gray-50 py-10">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
