import Link from "next/link";
import Image from "next/image";
import { SlideImages } from "@/interface";
import SingleImage from "@/components/views/home/collection/SingleImage";

// slideImages is array of objects contain data
const Collection = ({ slideImages }: { slideImages: SlideImages[] }) => {
  const colSpans = [
    "grid col-span-2",
    "sm:grid col-span-3 hidden",
    "sm:grid col-span-3 hidden",
    "sm:grid col-span-2 hidden",
  ];

  return (
    // there are two main divs and one will run at a time.
    // one for large screen i.e. collections of four components called "CollectionItem"
    // one for small screen i.e. swiper and component name is "SwiperImages"
    <div className="flex flex-col  overflow-hidden">
      <div className="hidden md:block">
        <div className="grid sm:grid-cols-5 grid-cols-1 text-gray-50 ">
          {slideImages.map((obj, index) => {
            return (
              <div className={colSpans[index]} key={index}>
                <Link href={obj.href} className="relative">
                  <div className="grid col-span-2 relative group hover:brightness-110 transition-all duration-500  ease-in-out h-[50vh] md:h-[80vh] overflow-hidden cursor-pointer text-gray-50">
                    <Image
                      className="h-full w-full object-cover group-hover:scale-110 transition-all duration-500 group-hover:saturate-[110%] brightness-75  hover:brightness-90"
                      src={obj.src as string}
                      height={1500}
                      width={1500}
                      alt={obj.alt as string}
                    />
                    <div className="absolute transform top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] group-hover:-translate-y-[65%] transition duration-500 delay-300 ease-in-out">
                      <div className="flex flex-col items-center gap-3">
                        <p>{obj.text.sub_Header}</p>
                        {/* The capital heading in small size font means first upper heading*/}
                        <h1 className="text-4xl font-light">
                          {obj.text.heading}
                        </h1>
                        {/* The second heading  */}
                        <button className="bg-gray-50 text-gray-900 py-4 px-8 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-[2s]  text-xs rounded-sm mt-5">
                          SHOP NOW
                          {/* button text shows on hover */}
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="md:hidden">
        <SingleImage slideImage={slideImages[1]} />
      </div>
    </div>
  );
};

export default Collection;
