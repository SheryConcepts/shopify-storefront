"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";

export default function Joinus() {
  const [closeButton, setCloseButton] = useState(false);

  // Session strorage to keep the component close on other pages
  useEffect(() => {
    const shouldShowPopup = sessionStorage.getItem("showPopup");

    if (shouldShowPopup !== "false") {
      const timeout = setTimeout(() => {
        setCloseButton(true);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, []);

  // Close component on clicking cross button
  const handleClose = () => {
    setCloseButton(false);
    sessionStorage.setItem("showPopup", "false");
  };

  return (
    <div
      className={`fixed flex bottom-4 right-4 justify-end w-11/12 md:w-[27rem] z-[100] transition-all duration-300 ${
        closeButton ? "translate-x-0" : "translate-x-[110%]"
      }`}
    >
      <div className="flex flex-col bg-white shadow-md h-[23rem] flex-grow lg:flex-grow-0 w-full">
        {/* Close Button */}
        <div className="flex justify-end mt-5 mr-2 ">
          <button
            className="cursor-pointer px-3 text-gray-800 text-3xl"
            onClick={handleClose}
          >
            &times;
          </button>
        </div>

        {/* Heading */}
        <div className=" flex flex-col items-center space-y-4 mb-4">
          <h1 className="font-normal text-2xl text-gray-800">Join Us</h1>
          <p className="w-96 px-10 md:px-8 text-center text-sm tracking-normal text-gray-800">
            Entice customers to sign up for your mailing list with discounts or
            exclusive offers.
          </p>
        </div>

        {/* Input field */}
        <div className="flex flex-col lg:items-center px-8 w-full space-y-3 mb-4">
          <input
            type="email"
            placeholder="Your email"
            className="flex-grow lg:w-full p-4 text-sm border-gray-300 border-[1px]"
          />

          {/* Subscribe button */}
          <button className="h-14 px-10 text-[15px] text-white font-light bg-gray-800 w-full rounded-sm hover:bg-white border border-black mt-9 hover:text-gray-800 transition-colors duration-200">
            Subscribe
          </button>
        </div>

        {/* Icons */}
        <div className="flex justify-center items-center space-x-4">
          <Link href="www.facebook.com">
            <AiFillFacebook className="w-8 h-8 text-gray-700" />
          </Link>

          <Link href="www.youtube.com">
            <BsYoutube className="h-8 w-8 text-gray-700 mt-0.5" />
          </Link>

          <Link href="www.instagram.com">
            <AiFillInstagram className="w-8 h-8 text-gray-700" />
          </Link>
        </div>
      </div>
    </div>
  );
}
