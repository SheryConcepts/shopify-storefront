"use client";

import {
  Navigation,
  Pagination,
  Autoplay,
  A11y,
  Parallax,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image, { StaticImageData } from "next/image";
import "@/components/ui/swiper-styles/styles.css";
import HowerGrowButton from "@/components/ui/howergrowbutton";
import { SlideData } from "@/interface";
import Link from "next/link";

const HeroSection = ({
  slideData,
}: {
  slideData: Array<SlideData | undefined>;
}) => {
  return (
    <>
      <section>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y, Parallax]}
          slidesPerView={1}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          parallax={true}
          loop={true}
          breakpoints={{
            320: {
              speed: 1500,
            },
            768: {
              speed: 1700,
            },
            1024: { speed: 2500 },
          }}
        >
          {slideData.map((slideData, index) => {
            if (!slideData) return;
            return (
              <SwiperSlide key={index}>
                <Link href={slideData.href}>
                  <div className="relative w-screen h-screen flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {/* layout="fill" , objectFit="cover" property on the Image to set w-screen */}
                      <Image
                        src={slideData?.src ?? ""}
                        alt={slideData?.alt ?? ""}
                        // loading="eager" //Pre-loaded image
                        className="z-1 object-cover w-full h-full"
                        width={2000}
                        height={2000}
                        priority
                      />
                    </div>

                    {/* Overlay content */}

                    <div className="absolute inset-0 bg-black opacity-30" />
                    <div className="absolute z-10 text-white items-center text-center">
                      <div
                        className="mb-6 text-sm max-md:text-xs"
                        data-swiper-parallax="-300"
                        data-swiper-parallax-opacity="0"
                      >
                        {slideData.text.sub_Header}
                      </div>
                      <h2
                        className="text-6xl max-md:text-3xl max-lg2:text-4xl "
                        data-swiper-parallax="-300"
                        data-swiper-parallax-opacity="0"
                      >
                        {slideData.text.heading}
                      </h2>
                      <div
                        className="text-xl mt-6"
                        data-swiper-parallax="-300"
                        data-swiper-parallax-opacity="0"
                      >
                        <p>{slideData.text.paragraph}</p>
                      </div>
                      <div
                        className="mt-9"
                        data-swiper-parallax="-300"
                        data-swiper-parallax-opacity="0"
                      >
                        <HowerGrowButton text={slideData.text.button} />
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default HeroSection;
