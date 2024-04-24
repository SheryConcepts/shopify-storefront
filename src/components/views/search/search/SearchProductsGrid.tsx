"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AverageRating from "@/components/utils/functions/averageRating";
import { Product } from "@/lib/shopify/types";
import PlaceholderImage from "../../../../../public/placeholder.png";
export function ProductsGrid({
  products,
  placeholderImages,
}: {
  products: Product[];
  placeholderImages: string[];
}) {
  const [hoverdImage, sethoverdImage] = useState("");

  const disPrice = 10;
  // const price = 40
  // Random Review untill Ayesha figures out how to add custom content in shopify.
  // const reviews = Array.from({ length: Math.floor(Math.random() * 13) }).map(
  //   (i) => {
  //     return {
  //       rating: Math.floor(Math.random() * 5),
  //     }
  //   }
  // )
  return (
    <div className="grid grid-cols-2  xl:grid-cols-3 gap-5 mx-auto pt-8 ">
      {products.map((product, index) => (
        <Link
          onMouseEnter={() => sethoverdImage(product.handle)}
          onMouseLeave={() => sethoverdImage("")}
          href={`collections/all/${product.handle}`}
          key={product.id}
        >
          <div className="relative overflow-hidden group flex flex-col justify-center items-center  ">
            {/* Image Div */}

            <div className=" w-full  max-w-[460px] aspect-square bg-gray-100/70 mb-5  mr-auto  relative">
              <Image
                src={product?.images[0]?.url || PlaceholderImage}
                alt={product?.images[0]?.altText || "ImageAlt"}
                fill
                // width={product.images[0].width}
                // height={product.images[0].height}
                placeholder="blur"
                blurDataURL={placeholderImages[index]}
                className={`object-contain p-4 duration-700 mx-auto 
                     ${
                       hoverdImage === product.handle
                         ? "opacity-0 scale-105  "
                         : "opacity-100 scale-100"
                     }`}
              />
              <Image
                src={product?.images[1]?.url || PlaceholderImage}
                alt={product?.images[1]?.altText || "ImageAlt"}
                fill
                className={`object-contain p-4 duration-700 mx-auto 
                     ${
                       hoverdImage === product.handle
                         ? "opacity-100 scale-105 "
                         : "opacity-0 scale-100  "
                     }`}
              />
            </div>
          </div>

          {/* Product Content Right Under THe Image */}

          <div
            className="flex flex-col mb-4 justify-start items-start place-content-start text-gray-700 space-y-2  pb-9 max-xs:pb-4 
                        
                        text-[15px] max-md2:text-[13.8px] max-md1:text-[12px]

                        max-md:text-sm max-xs:text-[12.5px] max-xs1:text-[12px]

                        max-2xl:max-w-[220px] max-md2:max-w-[210px] max-md1:max-w-[170px] 

                        max-md:max-w-[220px]  max-sm:max-w-[220px] max-xsm:max-w-[210px] 

                        max-xs:max-w-[185px]  max-xs1:max-w-[112px] 

                        max-xxs1:max-w-[112px]    "
          >
            <h2>{product.title}</h2>

            <p className="flex gap-2 ml-[1px] mt-1 text-sm max-md2:text-[13.2px] max-xs1:text-[12.7px] max-xxs1:text-[11px] max-xxs:text-[13px]">
              <span className={`text-gray-800`}>
                ${product.priceRange.minVariantPrice.amount}
              </span>
              <del
                className={`text-gray-400 ${
                  disPrice ? "block" : "hidden"
                } pr-14 max-xs:pr-6 max-xxs:pr-2 `}
              >
                ${disPrice}.00
              </del>
            </p>

            {/* Colors & Reviews */}

            {/* <div className='max-xs:hidden'>
              <div className='flex items-center '>
                <div className='flex gap-x-4  '>
                  <AverageRating reviews={reviews} />
                  <p className='text-sm max-md2:text-[12px] gap-x-4 max-xs:gap-x-2 max-xs:text-[12px] '>
                    {reviews?.length} review
                    {reviews.length > 1 && 's'}
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </Link>
      ))}
    </div>
  );
}
