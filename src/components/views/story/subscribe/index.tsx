import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import BackgroundImg from "@/components/assets/images/faq/background1.jpg";

const Subscribe1 = () => {
  return (
    <section className="relative w-full h-96 md:h-[500px] mt-10">
      {/* Background Image */}
      <Image
        src={BackgroundImg}
        alt="bg image"
        className="z-0 object-cover w-full h-96 md:h-[500px]"
      />
      {/* Opacity Layer   */}

      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center h-full text-red-50">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h4 className="pt-2 font-semibold">KEEP IN TOUCH</h4>
          <h1 className="md:text-4xl text-3xl pt-2 font-semibold">
            Subscribe to our newsletter
          </h1>
          <h5 className="pt-5 md:px-0 px-2 font-semibold">
            Promotions, new products and sales. Directly to your inbox.
          </h5>
          <div className="flex items-center mx-auto gap-x-3 border-b-2 pb-2 md:w-[80%] w-[60%] mt-9">
            <input
              type="text"
              className="px-2 focus:outline-none w-[100%] placeholder-white bg-transparent"
              size={20}
              placeholder="Email"
            />
            <BsArrowRight size={25} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe1;
