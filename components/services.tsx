import Image from "next/image"

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/ai-hero.png"
              alt="Our Services"
              width={1200}
              height={600}
              className="w-full md:h-auto object-cover h-52"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
