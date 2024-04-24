import { useState } from "react";
import HamBurgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import RightSideIcons from "./RightSideIcons";
import DropdownMenu from "./DropdownMenu";
import { nav_buttons } from "./NavbarData";

export default function NavbarSmall({
  total_Quantity,
}: {
  total_Quantity: number | undefined;
}) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [openHamBurger, setOpenHamBurger] = useState(false);

  // Hamburger menu on tab and mobile view
  const handleHamBurgerClick = () => {
    // If dropdown is already visible, do not close it
    if (dropdownVisible) {
      setDropdownVisible(false);
    }
    // If dropdown is not visible, open the center buttons and toggle the hamburger menu state
    setOpenHamBurger((prevOpen) => !prevOpen);

    // Apply or remove overflow hidden to the body
    if (!openHamBurger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  };

  // Display dropdownmenu when Shop button is clicked
  const handleShopButtonClick = () => {
    setDropdownVisible(true);
  };

  // Back button to hide dropdownmenu
  const handleBackButtonClick = () => {
    setDropdownVisible(false);
  };

  // Function to handle closing both center buttons and dropdown menu for small screens
  const handleLinkClick = () => {
    // Close the Hamburger Menu
    setOpenHamBurger(false);
    // Close the Dropdown Menu
    setDropdownVisible(false);
  };

  return (
    <div className="flex items-center justify-between px-2 xxs:px-5 ">
      {/* Hamburger Menu */}
      <HamBurgerMenu
        openHamBurger={openHamBurger}
        onClick={handleHamBurgerClick}
      />
      {/* Webiste Logo */}
      <Logo />
      {/* Menu Buttons */}
      {dropdownVisible ? null : ( // Render nothing when the dropdown is visible
        <div
          className={`absolute left-0 top-24 z-50 h-screen w-screen transition-all duration-500 ease-in-out md:top-[8.5rem] bg-stone-300/95 
                ${
                  openHamBurger
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }`}
        >
          {nav_buttons.map((btn, index) => (
            <div className="max-h-screen overflow-y-scroll" key={index}>
              <ul className="pt-10 flex flex-col items-start space-y-5 pl-11 text-left font-semibold text-gray-800 md:pt-14 md:space-y-7 w-full md:pl-14 md:text-2xl ">
                {/* Home Button */}
                <li>
                  <Link
                    href={btn.href1}
                    onClick={handleLinkClick}
                    className="mt-10 decoration-2 underline-offset-[10px] hover:underline hover:decoration-gray-700"
                  >
                    {btn.text1}
                  </Link>
                </li>

                {/* Shop Button */}
                <li>
                  <button
                    className="flex items-center decoration-2 underline-offset-[10px] hover:underline hover:decoration-gray-700"
                    onClick={handleShopButtonClick}
                  >
                    {btn.text2}
                    <span className="ml-4">
                      <MdOutlineKeyboardArrowRight className="h-6 w-6 md:h-7 md:w-7" />
                    </span>
                  </button>
                </li>

                {/* Our Story Button*/}
                <li>
                  <Link
                    href={btn.href3}
                    onClick={handleLinkClick}
                    className="decoration-2 underline-offset-[10px] hover:underline hover:decoration-gray-700"
                  >
                    {btn.text3}
                  </Link>
                </li>

                {/* Blog Button */}

                <li>
                  <Link
                    href={btn.href4}
                    onClick={handleLinkClick}
                    className="decoration-2 underline-offset-[10px] hover:underline hover:decoration-gray-700"
                  >
                    {btn.text4}
                  </Link>
                </li>

                {/* FAQs Button*/}

                <li>
                  <Link
                    href={btn.href5}
                    onClick={handleLinkClick}
                    className="decoration-2 underline-offset-[10px] hover:underline hover:decoration-gray-700"
                  >
                    {btn.text5}
                  </Link>
                </li>
              </ul>

              {/* User / Account button for small screens */}
              <div className="mt-10 px-10 md:px-14">
                <hr className="mb-3 h-[0.5px] w-full border-none bg-gray-600" />

                <Link
                  href={btn.text6}
                  onClick={handleLinkClick}
                  className="pb-28 md:pb-44 flex items-center text-base font-medium text-gray-800 md:text-2xl"
                >
                  {btn.text6}
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Render the dropdown menu when shop is clicked */}
      <div
        className={`transition-all duration-500 top-0 absolute ${
          dropdownVisible ? "left-0 opacity-100" : "-left-full opacity-0"
        }`}
      >
        <DropdownMenu
          handleBackButtonClick={handleBackButtonClick}
          handleLinkClick={handleLinkClick}
        />
      </div>
      {/* Icons on the right side of navbar */}
      <RightSideIcons total_Quantity={total_Quantity} />
    </div>
  );
}
