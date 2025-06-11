"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleAboutClick = () => {
    router.push("/");
    setIsOpen(false);
  };

  const handleServicesClick = () => {
    router.push("/service");
    setIsOpen(false);
  };

  const handleContactClick = () => {
    router.push("/#contact");
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Image
              src="/atom-logo.svg"
              alt="ATOM Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-md font-bold text-[#121921]">ATOM</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={handleAboutClick}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              About Us
            </button>
            <button
              onClick={handleServicesClick}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Services
            </button>
            <button
              onClick={handleContactClick}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Contact Us
            </button>
          </div>
          <div></div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <button
                onClick={handleAboutClick}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 font-medium"
              >
                About Us
              </button>
              <button
                onClick={handleServicesClick}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 font-medium"
              >
                Services
              </button>
              <button
                onClick={handleContactClick}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 font-medium"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
