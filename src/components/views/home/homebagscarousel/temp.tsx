"use client";

import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/components/ui/swiper-styles/styles.css";
import { Collection, Product } from "@/interface";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AverageRating from "@/components/utils/functions/averageRating";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { HomeCarouselCollection } from "@/lib/helpers";
//test commit

const BagsCarousel = ({
  collection,
}: {
  collection: HomeCarouselCollection;
}) => {
  // const category: Collection | undefined = data.find(
  //   (item) => item.id === category_name,
  // );
  // State to track hover state
  console.log(collection, "----")
  const [hoveredSlide, setHoveredSlide] = useState<number | null>(null);
  return (
    <div className="carousel px-5 md:px-10 lg:px-16 bg-stone-100">
      <div className="flex-between">
        <h2 className="md:text-2xl text-[18px]">
          {collection.collectionHandle}
        </h2>
        <Link
          href={`/collections/${collection.collectionHandle}`}
          className="relative group text-sm md:text-lg lg:text-base inline-block text-decoration-none"
        >
          View All
          <span className="absolute -bottom-[2px] left-0 w-0 h-[2px] bg-[#5e5c5c] transition-all group-hover:w-full"></span>
        </Link>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        scrollbar={{ draggable: true }}
        breakpoints={{
          310: {
            slidesPerView: 1.1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2.3,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 3.3,
            spaceBetween: 30,
          },
          1520: {
            slidesPerView: 4.3,
            spaceBetween: 30,
          },
        }}
        style={{ overflow: "visible" }}
      >
        {collection?.products?.map((product, index: number) => (
          <SwiperSlide
            key={product.id}
            onMouseEnter={() => setHoveredSlide(index)}
            onMouseLeave={() => setHoveredSlide(null)}
          >
            <Link
              href={`/collections/${collection.collectionHandle}/${product.handle}`}
            >
              <div className="shadow-lg h-full bg-white">
                <div className="relative overflow-hidden">
                  <div
                    className={`relative w-full h-[15rem] xxs:h-[20rem] xs:h-[24rem] xsm:h-[26rem] sm:h-[16rem] md:h-[19rem] lg2:h-[20rem] lg:h-[18rem] xl:h-[20rem] 3xl:h-[22rem]`}
                  >
                    <Image
                      src={product.images[0].url}
                      alt={product.images[0].altText}
                      fill
                      className={`object-contain p-8 duration-200
                       ${hoveredSlide === index ? "opacity-0 " : "opacity-100 "
                        }`}
                    />
                    <Image
                      src={product.images[1].url}
                      alt={product.images[1].altText}
                      fill
                      className="object-contain p-8"
                      style={{
                        transform: `rotateY(${hoveredSlide === index ? "0deg" : "180deg"
                          })`,
                        opacity: hoveredSlide === index ? 1 : 0,
                        transition: "transform 0.6s ease-in-out, opacity 0.2s ",
                      }}
                    />
                  </div>
                  {/*
                   * TODO: need to figure out how to integrate sales.
                  <span
                    className={`absolute left-7 top-5 ${product.tags === "sale"
                        ? "bg-[#EF9A9A] text-gray-950"
                        : "bg-black/75 text-[#efefef]"
                      }  md:px-2 md:py-1 p-[6px] group-hover:opacity-0 md:text-base text-sm lg:text-[10px] uppercase tracking-[0.15em] ${product.sale ? "block" : "hidden"
                      }`}
                  >
                    {product.sale}
                  </span>
                    */}
                </div>

                <div className="flex flex-col gap-1 mt-4 mx-3 md:mx-7 pb-3 text-[#5e5c5c]">
                  <h2 className="md:text-xl text-[16px] text-gray-700">
                    {product.title}
                  </h2>
                  <p className="flex gap-5 ml-[1px] mt-1 text-lg">
                    {/*
                   * 
                   * TODO: figure out discounts
                    <del
                      className={`text-[#EF9A9A] ${product.variants[0] ? "block" : "hidden"
                        } pr-10`}
                    >
                      ${product.disPrice}
                    </del>
                   * */}
                    <span className={`text-gray-800`}>
                      ${product.priceRange.minVariantPrice.amount}
                    </span>
                  </p>
                  {/*
                  TODO: figure out how reviews will work
                  <div className={`flex items-center mt-1`}>
                    <AverageRating reviews={product.reviews} />
                    <span className="px-2 text-sm md:text-base">
                      {product.reviews.length} review
                      {product.reviews.length > 1 && "s"}
                    </span>
                  </div>
                   * */}
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default BagsCarousel;
