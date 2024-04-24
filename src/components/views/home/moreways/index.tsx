"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function MoreWays() {
  // Data for Cards
  const data = [
    {
      id: 1,
      title: "Strength",
      Desc: "The bags are moulded, which means they are very strong, no need to worry about weight restrictions.",
      img: "/images/moreways/cardImage1.jpg",
    },
    {
      id: 2,
      title: "Wipe clean",
      Desc: "Our bags are made from soft, velvety & non-toxic silicone. They are highly resistant to stains and scratches.",
      img: "/images/moreways/cardImage2.jpg",
    },
    {
      id: 3,
      title: "Ethical",
      Desc: "All products are ethically manufactured in two family run factories, which we visit on regular basis.",
      img: "/images/moreways/cardImage3.jpg",
    },
  ];
  const [index, setIndex] = useState(0);
  let hasNext = index < (data?.length as number) - 1;
  let hasPrev = index > 0;

  return (
    <div className=" flex justify-center items-center my-10">
      <div className="max-w-7xl  px-5 ">
        {/* <h3 className='text-center text-2xl lg:text-3xl my-10 text-[#423f3f]'>More ways our bags <br className='lg:hidden' /> can help out</h3> */}
        {/* product images as slider to be shown only on screens medium or above size */}
        <div className="hidden md:grid md:grid-cols-3 gap-x-6">
          {data.map((item: any) => (
            // Card
            <div key={item.id} className="flex flex-col items-center mx-1 mb-5">
              {/* Card Image */}
              <Image
                className=" w-full h-80 sm:h-[450px] md:h-[430px] lg:h-[500px] object-cover   "
                src={item.img}
                height={460}
                width={370}
                alt="image"
              />
              {/* Card Heading */}
              <h3 className="mt-5 text-xl lg:text-2xl text-[#423f3f]">
                {item.title}
              </h3>
              {/* Description */}
              <p className="mx-2 mt-4 text-center text-sm text-[#5e5c5c]">
                {item.Desc}
              </p>
              <button className="text-xs my-8 border-b border-[#e57373] text-[#e57373] hover:text-[#5e5c5c] hover:border-[#5e5c5c] font-semibold">
                <Link href={"/story"}>Learn more</Link>
              </button>
            </div>
          ))}
        </div>

        {/* product images as slider to be shown only on screens less than medium size */}
        <div className="md:hidden flex relative">
          <button
            onClick={() => {
              if (hasPrev) {
                setIndex(index - 1);
              }
            }}
            disabled={!hasPrev}
            className="text-gray-800 disabled:text-gray-400 absolute left-3 top-1/3 transform -translate-y-1/2 z-10"
          >
            <IoIosArrowBack className="text-3xl md:text-4xl" />
          </button>

          <div
            key={data[index].id}
            className="z-0 w-full flex flex-col items-center mx-1 mb-5"
          >
            {/* Card Image */}
            <Image
              className=" w-full h-80 sm:h-[450px] md:h-[430px] lg:h-[500px] object-cover   "
              src={data[index].img}
              height={460}
              width={370}
              alt="image"
            />
            {/* Card Heading */}
            <h3 className="mt-5 text-xl lg:text-2xl text-[#423f3f]">
              {data[index].title}
            </h3>
            {/* Description */}
            <p className="mx-2 mt-4 text-center text-sm text-[#5e5c5c]">
              {data[index].Desc}
            </p>
            <button className="text-xs my-8 border-b border-[#e57373] text-[#e57373] hover:text-[#5e5c5c] hover:border-[#5e5c5c] font-semibold">
              <Link href={"/story"}>Learn more</Link>
            </button>
          </div>

          <button
            onClick={() => {
              if (hasNext) {
                setIndex(index + 1);
              }
            }}
            disabled={!hasNext}
            className="text-gray-800 disabled:text-gray-400 absolute right-3 top-1/3 transform -translate-y-1/2 z-10"
          >
            <IoIosArrowForward className="text-3xl md:text-4xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
