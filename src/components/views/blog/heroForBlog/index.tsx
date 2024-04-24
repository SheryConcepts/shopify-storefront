import Image from "next/image";
import { bigImage } from "@/components/assets/images";

const HeroForBlog = () => {
  return (
    <div className="relative h-[500px] w-full my-10">
      {/* Background Image */}
      <Image
        src={bigImage}
        alt="Black Bag"
        className="z-0 h-full w-full object-cover"
        priority
      />
      {/* Opacity Layer */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      {/* Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center h-full text-red-50">
        <div className="flex justify-center items-center flex-col gap-10 text-gray-100 tracking-[2px] transition-all text-center">
          <h1 className="md:text-5xl text-[32px] md:px-2 px-4 text-center slide-left-fade-in">
            Style Guides
          </h1>
        </div>
      </div>
    </div>
  );
};
export default HeroForBlog;
