import Image from "next/image";
import React from "react";
import Hero2 from "../../../assets/images/story/hero2.jpg";
import HowerColorButton from "@/components/ui/howercolorbutton";

const EthicallySection = ({
  image,
  h,
  p,
  subh,
}: {
  image: JSX.Element;
  h: JSX.Element;
  p: JSX.Element;
  subh: JSX.Element;
}) => {
  return (
    <section>
      <div className="max-md:mx-4 flex items-center gap-20 md:px-28 md:py-20 max-md:pb-16 max-md:flex-col mb-20">
        {/* Left Side */}
        <div className="flex-[2_1] ">{image}</div>
        {/* Right Side */}
        <div className="flex-[3_1] flex flex-col items-center text-center">
          <div className="font-light mb-2">{subh}</div>
          <h2 className="mb-2 text-3xl font-[370] text-slate-900 px-5">{h}</h2>
          <div className="h-[3px] w-8 bg-black rounded-full"></div>
          <p className="text-[17px] text-slate-900 max-w-[850px] font-[350]  tracking-widest mt-10 px-10">{p}</p>
          <span>
            <HowerColorButton text="SHOP THE COLLECTIONS" href="/collection" />
          </span>{" "}
          {/* href leads to a collection dynamic page */}
        </div>
      </div>
    </section>
  );
};

export default EthicallySection;
