"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/components/ui/swiper-styles/styles.css";
import Image from "next/image";
import { SlideImages } from "@/interface";
//slideImages is array of objects constain data

const SingleImage = ({ slideImage }: { slideImage: SlideImages }) => {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center cursor-pointer">
      <div className="relative w-full h-full">
        {/* layout="fill" , objectFit="cover" property on the Image to set w-screen */}
        <Image
          src={slideImage.src}
          alt={slideImage.alt}
          width={1000}
          height={1000}
          loading="eager" //Pre-loaded image
          className="z-1 object-cover w-full h-full"
        />
      </div>
      {/* Overlay content */}
      <div className="absolute inset-0 bg-black opacity-30" />
      <div className="absolute z-10 text-white items-center text-center">
        <div className="mb-6 text-sm max-md:text-xs">
          {slideImage.text.sub_Header}
        </div>
        <h2 className="text-6xl max-md:text-3xl max-lg2:text-4xl ">
          {slideImage.text.heading}
        </h2>
        {/* <div className="text-xl mt-6">
                  <p>{slideImage.text.paragraph}</p>
                </div> */}
        <div className="mt-9">
          <button className="cursor-pointer h-14 px-10 text-sm bg-white rounded-sm hover:transform hover:scale-105 duration-300 text-[#353839]">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleImage;
