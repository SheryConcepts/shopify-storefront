import React from "react";

export default function HamBurgerMenu({
  openHamBurger,
  onClick,
}: {
  openHamBurger: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className="relative h-16 md:h-[5.5rem] w-10 focus:outline-none"
      onClick={onClick}
    >
      <div className="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/2 transform">
        <span
          aria-hidden="true"
          className={`absolute block h-[2.5px] md:h-[3.5px] w-5 transform bg-current transition duration-500 ease-in-out md:w-8 lg:w-5 bg-gray-700 ${
            openHamBurger ? "rotate-45" : "-translate-y-1.5 md:-translate-y-2.5"
          }`}
        ></span>
        <span
          aria-hidden="true"
          className={`absolute block h-[2.5px] md:h-[3.5px] w-5 transform bg-current transition duration-500 ease-in-out md:w-8 lg:w-5 bg-gray-700 ${
            openHamBurger ? "opacity-0 " : ""
          }`}
        ></span>
        <span
          aria-hidden="true"
          className={`ease-in-out" absolute block h-[2.5px] md:h-[3.5px] w-5 transform bg-current transition  duration-500 md:w-8 lg:w-5 bg-gray-700 ${
            openHamBurger ? "-rotate-45" : "translate-y-1.5 md:translate-y-2.5"
          }`}
        ></span>
      </div>
    </button>
  );
}
