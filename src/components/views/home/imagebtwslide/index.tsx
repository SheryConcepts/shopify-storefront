import Image from "next/image";
import  bgImage  from "@/components/assets/images/blogImages/bigImage.jpg";

const BigImageInCarousel = () => {
  return (
    <section className="relative h-screen w-full my-10">
      {/* Background Image */}
      <Image
        src={bgImage}
        alt="Black Bag"
        className="z-0 object-cover w-full h-full" 
      />
      {/* Opacity Layer   */}

      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center h-full text-red-50">
        <div className="flex justify-center items-center flex-col gap-10 text-gray-100 tracking-[2px] transition-all text-center">
          <h1 className="md:text-5xl text-[32px] md:px-2 px-4 text-center">
            Ethically Manufactured
          </h1>
          <h2 className="md:text-2xl text-[14px]">
            Suitable for vegans BPA free
          </h2>
          <button className="cursor-pointer h-14 px-10 text-sm bg-white rounded-sm hover:transform hover:scale-105 duration-300 text-[#353839]">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};
export default BigImageInCarousel;
