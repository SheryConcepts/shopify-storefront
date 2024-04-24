import Image from "next/image";
import React from "react";
import Hero1 from "../../../assets/images/story/hero1.jpg";

const AboutTheBags = ({
  h2,
  p,
  image,
}: {
  h2: JSX.Element;
  p: JSX.Element;
  image?: JSX.Element;
}) => {
  return (
    <section>
      <div className="max-md:mx-4 mt-8 flex max-md:flex-col-reverse items-center md:py-24 max-md:pb-16 md:px-28 gap-20">
        {/* Left Side */}

        <div className="flex-[3_1] max-w-screen-xl text-center flex flex-col items-center">
          <h2 className="mb-2 text-3xl font-[370] text-slate-900 ">{h2}</h2>
          <div className="h-[3px] w-8 bg-black rounded-full pl-10"></div>
          <p className="text-[17px] text-slate-900 max-w-[850px] font-[350] tracking-widest mt-10 px-10">{p}</p>
        </div>

        {/* Right Side */}

        <div className="flex-[2_1]">{image}</div>
      </div>
    </section>
  );
};

export default AboutTheBags;
