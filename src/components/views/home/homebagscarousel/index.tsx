// import Image from "next/image";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import "@/components/ui/swiper-styles/styles.css";
// import { Collection, Product } from "@/interface";
// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import AverageRating from "@/components/utils/functions/averageRating";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// import "@/components/i/swiper-styles/swipercirclearrow.css";
import Link from "next/link";
import { HomeCarouselCollection } from "@/lib/helpers";
import BagSlider from "./BagSlider";
const BagsCarousel = ({
  collection,
}: {
  collection: HomeCarouselCollection;
}) => {
  // const [hoverdImage, sethoverdImage] = useState("");
  // const category: Collection | undefined = data.find(
  //   (item) => item.id === category_name,
  // );
  // State to track hover state
  // const [hoveredSlide, setHoveredSlide] = useState<number | null>(null)
  // const disPrice = 90;
  // const reviews = Array.from({ length: Math.floor(Math.random() * 13) }).map(
  //   (i) => {
  //     return {
  //       rating: Math.floor(Math.random() * 5),
  //     };
  //   }
  // const reviews = Array.from({ length: 5 }).map((i) => {
  //   return {
  //     rating: 3,
  //   };
  // });
  return (
    <div className="bg-stone-50 px-5 md:px-10 lg:px-16 overflow-hidden pt-12 pb-24 md:pt-16">
      <div className="flex justify-between items-center mb-7">
        <h2 className="md:text-2xl text-[18px]">
          {collection?.collectionTitle}
        </h2>
        <Link
          href={`/collections/${collection?.collectionHandle}`}
          className="relative group text-sm md:text-lg lg:text-base inline-block text-decoration-none"
        >
          View All
          <span className="absolute -bottom-[2px] left-0 w-0 h-[2px] bg-[#5e5c5c] transition-all group-hover:w-full"></span>
        </Link>
      </div>
      <BagSlider collection={collection} />
      {/* <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        scrollbar={{ draggable: true }}
        spaceBetween={30}
        breakpoints={{
          310: {
            slidesPerView: 1.1,
          },
          768: {
            slidesPerView: 2.1,
          },
          900: {
            slidesPerView: 3.1,
          },
          1520: {
            slidesPerView: 4.1,
          },
        }}
        className='custom-swiper-container'
      >
        {collection.products?.map((product, index: number) => (
          <SwiperSlide
            key={product.id}
            onMouseEnter={() => sethoverdImage(product.handle)}
            onMouseLeave={() => sethoverdImage('')}
            // onMouseEnter={() => setHoveredSlide(index)}
            // onMouseLeave={() => setHoveredSlide(null)}
          >
            <Link
              href={`/collections/${collection.collectionHandle}/${product.handle}`}
            >
              <div className='h-full'>
                <div className='relative overflow-hidden'>
                  <div
                    className={`relative w-full h-[17rem] xxsm:h-[18rem] xxs:h-[20rem] xxs1:h-[22rem] xs1:h-[24rem] xs:h-[28rem] xsm:h-[30rem] sm:h-[30rem] md:h-[22rem] md2:h-[18rem] lg2:h-[20rem] lg:h-[18rem] xl:h-[23rem] 3xl:h-[21rem] 4xl:h-[24rem] 6xl:h-[25rem]`}
                  >
                    <Image
                      src={product.images[0].url}
                      alt={product.images[0].altText}
                      fill
                      className={`object-contain p-4 duration-700
                     ${
                       hoverdImage === product.handle
                         ? 'opacity-0 scale-105  '
                         : 'opacity-100 scale-100'
                     }`}
                    />
                    <Image
                      src={product.images[1].url}
                      alt={product.images[1].altText}
                      fill
                      className={`object-contain p-4 duration-700
                     ${
                       hoverdImage === product.handle
                         ? 'opacity-100 scale-105 '
                         : 'opacity-0 scale-100  '
                     }`}
                      // style={{
                      //   transform: `rotateY(${
                      //     hoveredSlide === index ? '0deg' : '180deg'
                      //   })`,
                      //   opacity: hoveredSlide === index ? 1 : 0,
                      //   transition: 'transform 0.6s ease-in-out, opacity 0.2s ',
                      // }}
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
                  
                </div>

                <div className='flex flex-col gap-1 mt-4 mx-3 md:mx-7 pb-5 text-[#5e5c5c]'>
                  <h2 className='text-base  text-gray-700'>{product.title}</h2>
                  <p className='flex gap-5 ml-[1px] mt-1 text-sm'>
                    {/* *
                     * TODO: figure out discounts 
                    <span className={`text-gray-800`}>
                      ${product.priceRange.minVariantPrice.amount}
                    </span>
                    <del
                      className={`text-[#EF9A9A] ${
                        product.variants[0] ? 'block' : 'hidden'
                      } pr-10`}
                    >
                      ${disPrice}
                    </del>
                  </p>
                  <div className='max-xs:hidden mt-1'>
                    <div className='flex items-center '>
                      <div className='flex gap-x-4  '>
                        <AverageRating reviews={reviews} />
                        <p className='text-sm max-md2:text-[12px] gap-x-4 max-xs:gap-x-2 max-xs:text-[12px] '>
                          {reviews?.length} review
                          {reviews.length > 1 && 's'}
                        </p>
                      </div>
                    </div>
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
export default BagsCarousel;
