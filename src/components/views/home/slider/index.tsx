"use client";
import { Pagination, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// Import the main Swiper stylesheet
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Link from "next/link";
import Image from "next/image";
import "@/components/ui/swiper-styles/styles.css";
import sliderbag1 from "../../../assets/images/home/slider/sbag2.jpg";
import sliderbag2 from "../../../assets/images/home/slider/sbag1.jpg";
import sliderbag3 from "../../../assets/images/home/slider/sbag3.jpg";

const slideImages = [
  {
    src: sliderbag1,
    alt: "Slide 1",
    text: {
      heading: "Elegant simplicity",
    },
  },
  {
    src: sliderbag2,
    alt: "Slide 2",
    text: {
      heading: "Effortless design",
    },
  },
  {
    src: sliderbag3,
    alt: "Slide 3",
    text: {
      heading: "High quality, less waste",
    },
  },
];
const SimpleSlider = () => {
  return (
    <section className="overflow-hidden ">
      <Swiper
        modules={[Pagination, Autoplay, A11y]}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {slideImages.map((slideImage, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-screen h-[650px] flex items-center justify-center cursor-pointer">
              <div className="relative w-full h-full">
                <Image
                  src={slideImage.src}
                  alt={slideImage.alt}
                  loading="eager"
                  className="z-1 object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black opacity-30" />
              </div>
              <div className="absolute z-10 text-white items-center text-center">
                <h2 className="text-6xl max-md:text-3xl max-lg2:text-4xl">
                  {slideImage.text.heading}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SimpleSlider;
