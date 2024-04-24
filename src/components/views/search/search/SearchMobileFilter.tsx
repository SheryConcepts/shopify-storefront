"use client";
import Filter from "@/components/ui/filter";
import { useState } from "react";

export default function SearchMobileFilter({
  variantNames,
}: {
  variantNames: string[];
}) {
  const [show, setShow] = useState(false);
  const filterButtonText = show ? "CLOSE FILTERS" : "SHOW FILTERS";
  return (
    <>
      <div
        className={`${show ? "block" : "hidden"
          } absolute bg-white w-full h-full top-0 md:hidden `}
      >
        <div className="fixed h-screen overflow-scroll pb-36 bg-white  ">
          <Filter variantNames={variantNames}/>
        </div>
      </div>
      <div
        className="cursor-pointer w-screen h-20 bg-black text-white bottom-0 text-sm fixed flex justify-center items-center md:hidden"
        onClick={() => setShow(!show)}
      >
        {filterButtonText}
      </div>
    </>
  );
}
