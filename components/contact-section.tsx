import Image from "next/image";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 lg:py-24   md:p-0 md:min-h-screen bg-[url('/pattern.svg')] bg-[length:300px_300px] bg-repeat"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#1D2B34] mb-8">
            Who are We?
          </h2>
          <p className="text-lg sm:text-xl text-[#6A767D] mb-8 max-w-3xl mx-auto font-medium">
            At ATOM, we are builders of intelligent, future-ready solutions.
          </p>
          <p className="text-base sm:text-lg text-[#6A767D] max-w-4xl mx-auto leading-relaxed">
            We're a multidisciplinary team of AI engineers, software developers,
            designers, and project managers dedicated to helping businesses
            thrive in the digital age. Whether it's developing our own
            innovative AI products or partnering with clients to build theirs,
            we bring deep technical expertise, strategic thinking, and creative
            problem-solving to every project.
          </p>
        </div>

        <div className="absolute right-4 sm:right-6 lg:right-8 -bottom-40">
          <Image
            src="/multi-icons.svg"
            alt="Tech Icons"
            width={150}
            height={400}
            className="w-20 sm:w-24 lg:w-32 xl:w-36 h-auto "
          />
        </div>
      </div>
    </section>
  );
}
