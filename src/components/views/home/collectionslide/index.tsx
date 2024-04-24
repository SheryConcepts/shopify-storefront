// import Image from "next/image";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import { Swiper, SwiperSlide } from "swiper/react";
// import HowerColorButton from "@/components/ui/howercolorbutton";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// import "@/components/ui/swiper-styles/swipercirclearrow.css";
import Link from "next/link";
import { HomePageCollection } from "@/lib/helpers";
import CollectionSlider from "./CollectionSlider";

const CollectionCarousel = ({
  collections,
}: {
  collections: HomePageCollection[] | undefined;
}) => {
  return (
    <div className="px-5 md:px-10 lg:px-16 bg-stone-50 overflow-hidden  pt-12 pb-24 md:pt-16">
      <div className="flex justify-between items-center mb-7">
        <h2 className="text-[27px] text-[#423F3F] font-normal">
          Collections list
        </h2>
        <Link
          href="/collections"
          className="relative group inline-block text-decoration-none text-[16px] text-[#5E5C5C]"
        >
          View All
          <span className="absolute -bottom-[2px] left-0 w-0 h-[2px] bg-[#5e5c5c] transition-all group-hover:w-full"></span>
        </Link>
      </div>

      <CollectionSlider collections={collections} />

      {/* <Swiper
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
        {/*NOTE: In case data from shopify is not available our UI needs to handle relevant changes
        {collections &&
          collections.map((col) => (
            <SwiperSlide key={col.handle} className="py-3">
              <Link href={`/collections/${col.handle}`} passHref>
                <div className="slide-image group group-hover:opacity-100">
                  <div className="relative w-full h-[26rem] xxs:h-[28rem] xs:h-[30rem] xsm:h-[32rem] sm:h-[33rem] md:h-[28rem] lg2:h-[29rem] lg:h-[27rem] xl:h-[29rem] 3xl:h-[29rem] ">
                    <Image
                      src={col.image.url}
                      alt={col.image.altText ?? ""}
                      fill
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
      </Swiper> */}
    </div>
  );
};
export default CollectionCarousel;
