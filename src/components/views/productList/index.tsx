"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AverageRating from "@/components/utils/functions/averageRating";
import { CompleteCollection } from "@/lib/shopify/types";
import { LuLoader2 } from "react-icons/lu";
import { Suspense } from "react";

interface Category {
  category: CompleteCollection;
  placeholderImages: string[];
}

// CHANGES REQUIRED FOR SEARCH PAGE, CURRENTLY HAVE BEEN COMMENTED OUT IN ORDER TO AVOID BUGS IN DYNAMIC DATA
// interface SearchResults {
//   results: {
//     category: string;
//     product: Product;
//   }[];
// }
// const CollectionGrid = (props: Category | SearchResults) => {
//   const pathname = usePathname();
//   const category_name = pathname.split("/")[2];

const CollectionGrid = (prop: Category) => {
  const { category: collection, placeholderImages } = prop;
  const [hoverdImage, sethoverdImage] = useState("");

  // CHANGES REQUIRED FOR SEARCH PAGE, CURRENTLY HAVE BEEN COMMENTED OUT IN ORDER TO AVOID BUGS IN DYNAMIC DATA
  // let products: Product[] = [];
  // let category_name_result: string[];
  // if ("category" in props) {
  //   products = props.category.products;
  // } else if ("results" in props) {
  //   products = props.results.map((item) => item.product);
  //   category_name_result = props.results.map((item) => item.category);
  // }
  // Temp. disPrice for the moment, we need to get it from the shopify.
  const disPrice = 10;
  const price = 40;
  // Random Review untill Ayesha figures out how to add custome content in shopify.
  // const reviews = Array.from({ length: Math.floor(Math.random() * 13) }).map(
  //   (i) => {
  //     return {
  //       rating: Math.floor(Math.random() * 5),
  //     }
  //   }
  // )

  return (
    // CHANGES REQUIRED FOR SEARCH PAGE, CURRENTLY HAVE BEEN COMMENTED OUT IN ORDER TO AVOID BUGS IN DYNAMIC DATA
    // <div className="grid grid-cols-3 max-xl:grid-cols-2  justify-center items-center gap-x-10 pt-10 px-10">
    //   {products.map((product) => (
    //     <Link
    //       href={`${
    //         "category" in props
    //           ? `${category_name}/`
    //           : `/collections/${category_name_result}/`
    //       }${product.id}`}
    //       key={product.id}
    //     >
    //       <div className="relative overflow-hidden group flex flex-col justify-center items-center   ">
    //         {/* Image Div */}

    //         <div
    //           className=" h-[400px] w-[400px]

    //                          max-3xl:h-[320px] max-3xl:w-[320px]

    //                          max-2xl:h-[300px] max-2xl:w-[300px]

    //                          max-xl:h-[380px] max-xl:w-[380px]

    //                          max-xl2:h-[340px] max-xl2:w-[340px]

    //                          max-lg:h-[300px] max-lg:w-[300px]

    //                          max-lg2:h-[250px] max-lg2:w-[250px]

    //                          max-md2:h-[220px] max-md2:w-[220px]

    //                          max-md:h-[320px] max-md:w-[320px]

    //                          max-sm:h-[270px] max-sm:w-[270px]

    //                          max-xsm:h-[220px] max-xsm:w-[220px]

    //                          max-xs:h-[180px] max-xs:w-[180px]

    //                          max-xxs:h-[150px] max-xxs:w-[150px]

    //                          max-xxsm:h-[120px] max-xxsm:w-[120px]

    //                         bg-white shadow-lg shadow-gray-300 mb-8 "
    //         >
    //           <Image
    //             src={product.images[0].img}
    //             alt={product.name}
    //             height={400}
    //             width={400}
    //             className="object-contain h-[400px] w-[400px]

    //                        max-3xl:h-[320px] max-3xl:w-[320px] max-2xl:h-[300px] max-2xl:w-[300px]

    //                       max-xl:h-[380px] max-xl:w-[380px] max-xl2:h-[340px] max-xl2:w-[340px]

    //                       max-lg:h-[300px] max-lg:w-[300px] max-lg2:h-[250px] max-lg2:w-[250px]

    //                       max-md2:h-[220px] max-md2:w-[220px] max-md:h-[320px] max-md:w-[320px]

    //                       max-sm:h-[270px] max-sm:w-[270px] max-xsm:h-[220px] max-xsm:w-[220px]

    //                       max-xs:h-[180px] max-xs:w-[180px] max-xxs:h-[150px] max-xxs:w-[150px]

    //                       max-xxsm:h-[120px] max-xxsm:w-[120px] p-6"
    //           />

    //           {/* Overlay Span  */}

    //           <span
    //             className={`absolute left-7 top-5 max-xxs:hidden ${
    //               product.sale === "sale"
    //                 ? "bg-[#EF9A9A] text-gray-950"
    //                 : "bg-black/75 text-[#efefef]"
    //             }  md:px-2 md:py-1 p-[6px] group-hover:opacity-0  text-sm max-lg:text-[10px]  uppercase tracking-[0.15em] ${
    //               product.sale ? "block" : "hidden"
    //             }`}
    //           >
    //             {product.sale}
    //           </span>
    ////////////////////////////////////////////////////////////////////
    // TODO/Frontend: Someone from frontend correct the UI. Grid is squished.

    // <div className="grid grid-cols-3 max-lg:grid-cols-2 justify-center gap-8 max-md:pb-24">
    //   {/* fix the height of the grid which does not according to content */}
    //   {collection.products.map((product) => (
    //     <Link href={`${collection.handle}/${product.handle}`} key={product.id}>
    //       <div className="shadow-xl">
    //         <div className="relative overflow-hidden group">
    //           <div className="relative group h-fit group-hover:rotate-2 group-hover:scale-110 group-hover:transition group-hover:ease-in-out group-hover:duration-500">
    //             <div className="h-40 lg:h-72 w-full">
    //               <Image
    //                 src={product.images[0].url}
    //                 alt={product.images[0].altText ?? ""}
    //                 fill
    //                 className="object-contain p-12 lg:p-3 max-lg:p-0"
    //               />
    //             </div>
    //           </div>

    //           <div className="flex flex-col gap-1 mt-4 ml-4 pb-3 text-[#5e5c5c]">
    //             <h2 className="text-[18px] text-gray-700 max-lg:text-[14px] max-xs:text-[13px]">
    //               {product.title}
    //             </h2>
    //             <p className="flex gap-5 ml-[1px] text-lg max-xs:text-[13px]">
    //               {
    //                 // Note: discound prices need to be handled by backend
    //                 <del
    //                   className={`text-[#EF9A9A] ${disPrice ? "block" : "hidden"
    //                     } pr-10 max-sm:pr-1`}
    //                 >
    //                   ${disPrice}
    //                 </del>
    //               }
    //               <span className={`text-gray-800`}>
    //                 ${product.priceRange.minVariantPrice.amount}
    //               </span>
    //             </p>
    //             {
    //               // NOTE/TODO: Reviews need to handled by the backend
    //               <div className={`flex items-center`}>
    //                 {/* TODO: color needs to be corrected here, initially it was coming from the predefined dummy data. */}
    //                 <p className={`flex items-center text-gray-800`}>
    //                   <AverageRating reviews={reviews} />
    //                   <span className="px-2">
    //                     {reviews.length} review
    //                     {reviews.length > 1 && "s"}
    //                   </span>
    //                 </p>
    //               </div>
    //             }
    //           </div>
    //           {
    //             // NOTE/TODO: Sales need to be handled by the backend, below product.availableForSale is just a temp. hack.
    //             <span
    //               className={`absolute left-5 top-5 ${product.availableForSale
    //                   ? "bg-[#EF9A9A] text-gray-800"
    //                   : "bg-black/75 text-[#efefef]"
    //                 }  md:px-2 md:py-1 p-[6px] group-hover:opacity-0 md:text-base text-[12px] uppercase tracking-[0.15em] xxs:text-[8px] ${product.availableForSale ? "block" : "hidden"
    //                 }`}
    //             >
    //               {/* Here the there should be something like product.sale, hint: custome data fields in shopify for each product.*/}
    //               {10}
    //             </span>
    //           }
    //         </div>
    //       </div>
    //     </Link>
    //   ))}
    //</div>

    // NOTE:FOR BACKEND TEAM
    // Latest grid starts from line 282
    <Suspense
      fallback={
        <h1 className="h-screen grid place-items-center ">
          <LuLoader2 className=" h-10 w-10 animate-spin" />
        </h1>
      }
    >
      <div className="grid grid-cols-2  xl:grid-cols-3 gap-5 mx-auto pt-8 ">
        {collection?.products?.map((product, index) => (
          <Link
            onMouseEnter={() => sethoverdImage(product.handle)}
            onMouseLeave={() => sethoverdImage("")}
            href={`${collection.handle}/${product.handle}`}
            key={product.id}
            className="   "
          >
            <div className="relative overflow-hidden group flex flex-col justify-center items-center   ">
              {/* Image Div */}

              <div className=" w-full  max-w-[460px] aspect-square bg-gray-100/70 mb-5  mr-auto  relative">
                {product?.images ? (
                  <>
                    <Image
                      src={product?.images[0].url}
                      alt={product?.images[0].altText}
                      fill
                      placeholder="blur"
                      blurDataURL={placeholderImages[index]}
                      // width={product.images[0].width}
                      // height={product.images[0].height}
                      className={`object-contain p-4 duration-700 mx-auto 
                         ${
                           hoverdImage === product.handle
                             ? "opacity-0 scale-105  "
                             : "opacity-100 scale-100"
                         }`}
                    />
                    <Image
                      src={product?.images[1].url}
                      alt={product?.images[1].altText}
                      fill
                      className={`object-contain p-4 duration-700 mx-auto 
                         ${
                           hoverdImage === product.handle
                             ? "opacity-100 scale-105 "
                             : "opacity-0 scale-100  "
                         }`}
                    />
                  </>
                ) : (
                  <>
                    <div className="flex h-full items-center justify-center">
                      <LuLoader2 className="h-10 w-10 animate-spin" />
                    </div>
                  </>
                )}
                {/* <Image
                src={product.images[0].url}
                alt={product.images[0].altText ?? ''}
                height={463}
                width={463}
                className='object-contain object-center h-[450px] w-[450px] 

                        max-4xl:h-[340px] max-4xl:w-[340px]   max-5xl:h-[360px] max-5xl:w-[360px] 
                        
                        max-3xl:h-[320px] max-3xl:w-[320px] max-2xl:h-[300px] max-2xl:w-[300px] 

                        max-xl:h-[380px] max-xl:w-[380px] max-xl2:h-[340px] max-xl2:w-[340px] 

                        max-lg:h-[300px] max-lg:w-[300px] max-lg2:h-[250px] max-lg2:w-[250px]

                        max-md2:h-[220px] max-md2:w-[220px] max-md:h-[320px] max-md:w-[320px] 

                        max-sm:h-[270px] max-sm:w-[270px] max-xsm:h-[220px] max-xsm:w-[220px] 

                        max-xs:h-[200px] max-xs:w-[200px] max-xxs:h-[175px] max-xxs:w-[175px] 

                        max-xxsm:h-[150px] max-xxsm:w-[150px]  '
              /> */}
                {/* NOTE:BACKEND TEAM NEED TO FIGURE OUT SALE VALUE FROM SHOPIFY,AFTER THAT UNCOMMIT THIS */}

                {/* Overlay Span  */}

                {/* <span
              className={`absolute left-7 top-5 max-xxs:hidden ${
                product. === "sale"
                  ? "bg-[#EF9A9A] text-gray-950"
                  : "bg-black/75 text-[#efefef]"
              }  md:px-2 md:py-1 p-[6px] group-hover:opacity-0  text-sm max-lg:text-[10px]  uppercase tracking-[0.15em] ${
                product.sale ? "block" : "hidden"
              }`}
            >
              {product.sale}
            </span> */}
              </div>
            </div>

            {/* Product Content Right Under THe Image */}

            <div
              className="flex flex-col mb-4 justify-start items-start place-content-start text-gray-700 space-y-2   max-xs:pb-4 
                        
                        text-[15px] max-md2:text-[13.8px] max-md1:text-[12px]

                        max-md:text-sm max-xs:text-[12.5px] max-xs1:text-[12px]

                        max-2xl:max-w-[220px] max-md2:max-w-[210px] max-md1:max-w-[170px] 

                        max-md:max-w-[220px]  max-sm:max-w-[220px] max-xsm:max-w-[210px] 

                        max-xs:max-w-[185px]  max-xs1:max-w-[110px] 

                        max-xxs1:max-w-[110px]    "
            >
              <h2>{product.title}</h2>

              <p className="flex gap-2 ml-[1px] mt-1 text-sm max-md2:text-[13.2px] max-xs1:text-[12.7px] max-xxs1:text-[11px] max-xxs:text-[13px]">
                <span className={`text-gray-800`}>
                  ${product.priceRange.minVariantPrice.amount}.00
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
    </Suspense>
  );
};

export default CollectionGrid;
