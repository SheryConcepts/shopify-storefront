"use client";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import HowerColorButton from "@/components/ui/howercolorbutton";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { HomePageCollection } from "@/lib/helpers";
import "@/components/ui/swiper-styles/swipercirclearrow.css";

export default function CollectionSlider({
  collections,
}: {
  collections: HomePageCollection[] | undefined;
}) {
  if (!collections || collections.length === 0) {
    return <p>No collections found</p>;
  }
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={3}
      navigation
      scrollbar={{ draggable: true }}
      breakpoints={{
        300: {
          slidesPerView: 1.1,
        },
        768: {
          slidesPerView: 2.1,
        },
        1024: {
          slidesPerView: 3.1,
        },
        1520: {
          slidesPerView: 4.1,
        },
      }}
      className="custom-swiper-container"
    >
      {collections &&
        collections.map((col) => (
          <SwiperSlide
            key={col.handle}
            className="py-3 md:max-w-xs xl:max-w-[25rem] 3xl:max-w-xl"
          >
            <Link href={`/collections/${col.handle}`} passHref>
              <div className="slide-image group group-hover:opacity-100">
                <div className="relative w-full h-[26rem] xxs:h-[28rem] xs:h-[30rem] xsm:h-[32rem] sm:h-[33rem] md:h-[28rem] lg2:h-[29rem] lg:h-[27rem] xl:h-[29rem] 3xl:h-[29rem] ">
                  <Image
                    src={col.image.url}
                    alt={col.image.altText ?? ""}
                    fill
                    sizes="(min-width: 2800px) 644px, (min-width: 1480px) 451px, (min-width: 1200px) 339px, (min-width: 880px) 376px, (min-width: 680px) 581px, (min-width: 420px) 345px, 235px"
                    className="object-cover object-bottom duration-500"
                  />
                </div>

                <div className="absolute top-[100px] bottom-0 left-0 right-0 text-[#e5e5e5] text-[16px] opacity-100 max-w-full flex flex-col z-10 items-center justify-center transition-all duration-500 group-hover:translate-x-0 group-hover:-translate-y-7 duration-2000">
                  <h3 className="text-[27px]">{col.title}</h3>
                  <div className="opacity-0 flex flex-col items-center gap-2 translate-y-5 transition ease-out group-hover:opacity-100 ">
                    <p className="text-[#e5e5e5] text-[13px] lowercase">
                      {col.productCount} Products
                    </p>
                    <HowerColorButton text="VIEW" />
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
