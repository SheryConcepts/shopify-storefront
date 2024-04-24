"use client";

import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./../homebagscarousel/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { CarouselArray, CarouselProps } from "@/interface";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// import { iconComponent } from "@/components/utils/homeslidesarray";
import AverageRating from "@/components/utils/functions/averageRating";

const ProductCategorySlider = ({ data, title }: CarouselArray) => {
  return (
    <div className="overflow-hidden p-11">
      <div className="flex justify-between items-center mb-7">
        <h2 className="text-2xl">{title}</h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={3}
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
            slidesPerView: 3,
          },
        }}
        style={{ overflow: "visible" }}
      >
        {data?.map((item: CarouselProps) => (
          <SwiperSlide key={item.id} className="cursor-pointer">
            <Link href={`/product/${item.id}`}>
              <div className="bg-[#f4f4f4] shadow-lg">
                <div className="relative overflow-hidden group">
                  <div className="relative md:w-[320px] md:h-[300px] w-[220px] h-[200px] m-auto group-hover:rotate-2 group-hover:scale-110 group-hover:transition group-hover:ease-in-out group-hover:duration-500 bg-[#f4f4f4]">
                    <Image
                      src={item.image[0].img}
                      alt={item.title}
                      fill
                      sizes="(max-width: 360px) 100vw"
                      className=" object-fill"
                    />
                  </div>
                  <span
                    className={`absolute left-5 top-5 ${
                      item.sale === "sale"
                        ? "bg-[#EF9A9A] text-gray-800"
                        : "bg-black/75 text-[#efefef]"
                    }  md:px-3 md:py-2 p-[6px] group-hover:opacity-0 md:text-[16px] text-[12px] uppercase ${
                      item.sale ? "block" : "hidden"
                    }`}
                  >
                    {item.sale}
                  </span>
                </div>

                <div className="flex flex-col gap-1 mt-4 ml-4 pb-3 text-[#5e5c5c]">
                  <h2 className="md:text-2xl text-[16px] text-gray-700">
                    {item.title}
                  </h2>
                  <p className="flex gap-5 ml-[1px] text-lg">
                    <del
                      className={`text-[#EF9A9A] ${
                        item.disPrice ? "block" : "hidden"
                      } pr-10`}
                    >
                      ${item.disPrice}
                    </del>
                    <span className={`text-gray-800`}>${item.price}</span>
                  </p>
                  <div className={`flex items-center`}>
                    {/* <p className={`flex items-center text-[${item.color}]`}> */}
                    <AverageRating reviews={item.reviews} />
                    <span className="px-2">
                      {item.reviews.length} review
                      {item.reviews.length > 1 && "s"}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ProductCategorySlider;
