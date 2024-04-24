"use client";

import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/components/views/home/homebagscarousel/style.css";
import { CarouselArray, CarouselProps } from "@/interface";

const LeatherLikeColection = ({ data, title, link }: CarouselArray) => {
  return (
    <div className="overflow-hidden px-20 pt-12 pb-24 md:pt-16 bg-white">
      <div className="flex justify-between items-center mb-7">
        <h2 className="text-2xl">{title}</h2>
        <Link
          href={`${link}`}
          className="relative group inline-block text-decoration-none"
        >
          View All
          <span className="absolute -bottom-[2px] left-0 w-0 h-[2px] bg-[#5e5c5c] transition-all group-hover:w-full"></span>
        </Link>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={2}
        navigation
        scrollbar={{ draggable: true }}
        breakpoints={{
          340: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        style={{ overflow: "visible" }}
      >
        {data?.map((item: CarouselProps) => (
          <SwiperSlide key={item.id} className="cursor-pointer">
            <div className="group px-2">
              <Link href={`/product/${item.id}`}>
                <div className="">
                  <div className="overflow-hidden relative h-[300px] md:h-[400px]  xl:h-[500px] ">
                    <Image
                      src={item.image[0].img}
                      alt={title}
                      fill
                      sizes="(max-width: 360px) 100vw"
                      className="mb-2 group-hover:scale-110 w-full transition duration-300 bg-[rgba(66,63,63,.13)]"
                    />
                  </div>
                  <div className="flex flex-col gap-1 mt-4  pb-3 text-[#5e5c5c]">
                    <h2 className="text-2xl text-gray-700">{item.title}</h2>
                    <p className="flex gap-5 ml-[1px] text-lg">
                      <del
                        className={`text-[#5e5c5c] ${
                          item.disPrice ? "block" : "hidden"
                        } pr-10`}
                      >
                        ${item.disPrice}
                      </del>
                      <span className={`text-gray-800`}>${item.price}</span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default LeatherLikeColection;
