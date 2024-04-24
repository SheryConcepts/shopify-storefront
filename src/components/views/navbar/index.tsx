"use client";
import { useEffect, useState } from "react";
import FreeShippingSlider from "./FreeShippingSlider";
import NavbarLarge from "./NavbarLarge";
import NavbarSmall from "./NavbarSmall";
import { useCartStore } from "@/store/useCart";

export default function Navbar({ quantity }: { quantity: number | undefined }) {
  const [scrolling, setScrolling] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("none");
  const { total_Quantity, updateQuantity } = useCartStore();

  useEffect(() => {
    updateQuantity(quantity || 0);
  }, []);

  // Handle scroll events and update scroll-related state
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrolling(currentPosition > 0);
      setScrollDirection(
        currentPosition > scrollPosition
          ? "down"
          : currentPosition < scrollPosition
          ? "up"
          : "none"
      );
      setScrollPosition(currentPosition);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  // Calculate the middle of the screen
  const middleOfScreen =
    typeof window !== "undefined" ? window.innerHeight / 2 : 0;
  // Check if scrolled to the middle or up from the middle
  const scrolledToMiddle = scrollPosition > middleOfScreen;
  // Check if scrolled to the top of the page
  const scrolledUpFromMiddle =
    scrollPosition < middleOfScreen && scrollDirection === "up";
  const scrolledToTop = scrollPosition === 0;
  // Calculate whether the navbar should be hidden or not
  const navbarHidden =
    !scrolledToTop &&
    ((scrolling && scrollDirection === "down" && scrolledToMiddle) ||
      (!scrolling && scrolledUpFromMiddle));

  return (
    <div className={`relative`}>
      {/* Navbar with blur effect */}
      <div
        className={`
        ${navbarHidden ? "-translate-y-[100%]" : "translate-y-0"} 
        fixed left-0 top-0 z-50 h-24 w-full bg-white bg-opacity-50 backdrop-blur-md md:h-[8.5rem] lg:h-24 pb-8 transition-transform duration-700 ease-in-out`}
      >
        <div>
          <FreeShippingSlider />
        </div>

        <div>
          <div className="hidden lg:block">
            <NavbarLarge total_Quantity={total_Quantity} />
          </div>
          <div className="block lg:hidden">
            <NavbarSmall total_Quantity={total_Quantity} />
          </div>
        </div>
      </div>
    </div>
  );
}
