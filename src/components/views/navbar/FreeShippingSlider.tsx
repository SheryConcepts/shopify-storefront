import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "./navbarSlider.css";

export default function FreeShippingSlider() {
  SwiperCore.use([Autoplay]);

  const slideText = [{ text: "Free shipping on all orders above $100" }];

  const slidesContent = Array.from({ length: 2 }, (_, index) => (
    <SwiperSlide key={index}>
      {slideText.map((data, index) => (
        <p key={index}>{data.text}</p>
      ))}
    </SwiperSlide>
  ));

  return (
    <div className={`bg-gray-800 h-8 md:h-11 lg:h-8 py-2 md:py-3 lg:py-2`}>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        breakpoints={{
          300: {
            speed: 12000,
          },
          520: {
            speed: 16000,
          },
          650: {
            speed: 20000,
          },
          1024: { speed: 35000 },
        }}
        className="absolute top-0 left-0 z-50 w-full text-stone-100 text-xs md:text-base lg:text-xs text-center swiper-container-free-mode tracking-wider pt-2 md:pt-3 lg:pt-2"
      >
        {slidesContent}
      </Swiper>
    </div>
  );
}
