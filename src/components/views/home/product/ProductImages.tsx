"use client";
import { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type Props = {
  // data: CarouselProps[];
  data:
    | {
        id: number;
        img: string;
      }[]
    | undefined;
};

const ProductImages = ({ data }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("img1");
  const [activeImageId, setActiveImageId] = useState<null | number>(null);

  //filtering images
  // const images = data.flatMap((img) => img.img);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup when component is unmounted or if isOpen changes.
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && activeImageId) {
      const elem = document.getElementById(`modalimg${activeImageId}`);
      elem?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen, activeImageId]);

  // const [index, setIndex] = useState(0);
  // let hasNext = index < (data?.length as number) - 1;
  // let hasPrev = index > 0;

  // on refresh, page should be on top
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };
    }
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();

    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");

    // set selectedImage to the image being selected
    setSelectedImage(targetId);

    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });

    // in case you want to slower the speed, use smooth-scroll library
  };

  // This function will return the opacity class according to the selectedImage
  const getOpacityClass = (imgId: string) =>
    selectedImage === imgId ? "opacity-100" : "opacity-70";

  return data ? (
    <>
      {/* fixed image thumbnails to be shown only on medium screens or above */}
      <div className="sticky top-[10rem]">
        <div className="hidden md:block z-10 absolute ml-10">
          {data.map((img, ind) => {
            return (
              <Link href={`#img${img.id}`} onClick={handleScroll} key={img.id}>
                <div className="relative h-16 w-16 my-3">
                  <Image
                    key={ind}
                    src={img.img}
                    alt={`Image ${img.id}`}
                    fill
                    className={` object-contain rounded-sm my-3 ${getOpacityClass(
                      `img${img.id}`
                    )} hover:opacity-100`}
                    style={{ boxShadow: "0 0 2px 1px #a7a7a799" }}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* vertical product images to be shown only on medium screens or above */}
      <div className="hidden md:block w-full mt-[6rem] pl-32">
        {data.map((img, ind) => {
          return (
            <Image
              key={ind}
              src={img.img}
              width={800}
              height={800}
              className="h-[85vh] object-contain p-10 cursor-zoom-in"
              id={`img${img.id}`}
              alt={`Image ${img.id}`}
              onClick={() => {
                setIsOpen(true);
                setActiveImageId(img.id);
              }}
            />
          );
        })}

        {/* On product image click, all the images should pop up as modal */}
        {isOpen && (
          <div
            className="z-50 fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-75 w-full h-full"
            onClick={() => setIsOpen(false)}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-5 text-white text-5xl"
            >
              <IoIosClose />
            </button>
            {/* React does not currently support ::-webkit-scrollbar as an inline style. Therefore using style tag */}
            <style>
              {`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>
            <div className="flex flex-col overflow-y-auto w-[70%] bg-white max-h-full scrollbar-hide">
              {data.map((img, ind) => {
                return (
                  <Image
                    key={ind}
                    src={img.img}
                    width={800}
                    height={800}
                    className="h-screen object-contain z-100 mx-auto"
                    id={`modalimg${img.id}`}
                    alt={`Image ${img.id}`}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
      {/* product images as slider to be shown only on screens less than medium size */}
      {/* <div className="md:hidden flex items-center justify-evenly relative">
        <button
          onClick={() => {
            if (hasPrev) {
              setIndex(index - 1);
            }
          }}
          disabled={!hasPrev}
          className="text-gray-800 disabled:text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 z-10"
        >
          <IoIosArrowBack className="text-3xl md:text-4xl" />
        </button>

        <div className="z-0 w-full">
          <Image
            src={data[index].img}
            alt={`Image ${data[index]}`}
            width={800}
            height={800}
            className="w-full min-w-full"
            id={`img${data[index]}`}
          />
        </div>

        <button
          onClick={() => {
            if (hasNext) {
              setIndex(index + 1);
            }
          }}
          disabled={!hasNext}
          className="text-gray-800 disabled:text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 z-10"
        >
          <IoIosArrowForward className="text-3xl md:text-4xl" />
        </button>
      </div> */}
      <div className="md:hidden mt-24">
        <Swiper
          // navigation={{
          //   nextEl: ".swiper-button-next",
          //   prevEl: ".swiper-button-prev",
          // }}
          modules={[Navigation]}
          navigation
          className="flex items-center justify-center relative " 
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              {/* <div className="w-full mx-auto"> */}
                <Image
                  src={item.img}
                  alt={`Image ${item.id}`}
                  width={800}
                  height={800}
                  className="w-[80%] mx-auto"
                />
              {/* </div> */}
            </SwiperSlide>
          ))}

          {/* <button className="swiper-button-prev text-gray-800 disabled:text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
            <IoIosArrowBack className="text-3xl md:text-4xl" />
          </button>
          <button className="swiper-button-next text-gray-800 disabled:text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 z-10">
            <IoIosArrowForward className="text-3xl text-gray-800 md:text-4xl" />
          </button> */}
        </Swiper>
      </div>
    </>
  ) : (
    <></>
  );
};

export default ProductImages;
