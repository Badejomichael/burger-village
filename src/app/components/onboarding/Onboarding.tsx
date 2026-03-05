"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

export default function Onboarding() {
  const router = useRouter();
  const swiperRef = useRef<SwiperType | null>(null);

  const finishOnboarding = () => {
    router.push("/");
  };

  const nextSlide = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className="w-full min-h-screen bg-[#D00505] flex items-center justify-center">

      {/* mobile frame */}
      <div className="w-full h-screen md:max-w-md md:h-[720px]">

        <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="h-full"
            style={
                {
                "--swiper-pagination-color": "#D9D9D9",
                "--swiper-pagination-bullet-inactive-color": "#ffffff",
                "--swiper-pagination-bullet-inactive-opacity": "0.4",
                } as React.CSSProperties
            }
            >

          {/* Slide 1 */}
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center h-full text-center px-6">

              <Image
                src="/bv-logo.png"
                alt="logo"
                width={120}
                height={120}
                className="rounded-full mb-6"
              />

              <Image
                src="/chef.png"
                alt="chef"
                width={260}
                height={260}
                className="mb-8"
              />

              <p className="text-white text-sm md:text-base max-w-xs">
                Get your freshly-made burgers swiftly – directly from the
                kitchen straight down to your doorstep.
              </p>

              <div className="flex justify-between w-full mt-12 text-white text-sm">
                <button onClick={finishOnboarding}>Skip</button>
                <button onClick={nextSlide}>Next</button>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center h-full text-center px-6">

              <Image
                src="/bv-logo.png"
                alt="logo"
                width={120}
                height={120}
                className="rounded-full mb-6"
              />

              <Image
                src="/store.png"
                alt="store"
                width={260}
                height={260}
                className="rounded-[50px] mb-8"
              />

              <p className="text-white text-sm md:text-base max-w-xs">
                No more stress and long queues. Order everything at the comfort
                of your home.
              </p>

              <div className="flex justify-between w-full mt-12 text-white text-sm">
                <button onClick={finishOnboarding}>Skip</button>
                <button onClick={nextSlide}>Next</button>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center h-full text-center px-6">

              <Image
                src="/bv-logo.png"
                alt="logo"
                width={120}
                height={120}
                className="rounded-full mb-6"
              />

              <Image
                src="/farm.png"
                alt="farm"
                width={260}
                height={260}
                className="rounded-[50px] mb-8"
              />

              <p className="text-white text-sm md:text-base max-w-xs">
                Follow up and track your order in real time and get feedback
                about the purchase. Your satisfaction is guaranteed and secure.
              </p>

              <div className="flex justify-between w-full mt-12 text-white text-sm">
                <button onClick={finishOnboarding}>Skip</button>
                <button onClick={finishOnboarding}>Get Started</button>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
}