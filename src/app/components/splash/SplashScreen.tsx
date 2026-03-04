"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [showIntro, setShowIntro] = useState(true);

  // Auto transition after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#D00505] flex items-center justify-center overflow-hidden">
      {/* SLIDE WRAPPER */}
      <div className="relative w-full h-full flex items-center justify-center">

        {/* FIRST SLIDE (LOGO ONLY) */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${
            showIntro
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <Image
            src="/bv-logo.png" 
            alt="Burger Village Logo"
            width={300}
            height={300}
            priority
            className="w-56 md:w-64 lg:w-72 h-auto object-contain"
          />
        </div>

        {/* SECOND SLIDE */}
        <div
          className={`absolute inset-0 flex flex-col items-center md:gap-0 justify-center text-center px-6 transition-all duration-700 ease-in-out ${
            showIntro
              ? "opacity-0 scale-105 pointer-events-none"
              : "opacity-100 scale-100"
          }`}
        >
          <Image
            src="/bv-logo.png"
            alt="Burger Village Logo"
            width={250}
            height={250}
            className="w-56 lg:w-64 h-auto object-contain mb-10 md:mb-8"
          />

          <p className="text-white text-base sm:text-lg md:text-xl max-w-md leading-relaxed mb-50 md:mb-12">
            Get your freshly-made burgers swiftly, directly from the kitchen
            down to your doorstep.
          </p>

          <button className="bg-gray-200 text-black font-medium px-10 py-3 rounded-full text-base sm:text-lg hover:scale-105 transition-transform duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}