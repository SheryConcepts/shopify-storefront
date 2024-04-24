import Link from "next/link";
import Image from "next/image";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import navbar1 from "../../assets/images/navbar/navbar1.jpg";
import navbar2 from "../../assets/images/navbar/navbar2.jpg";
import { leftCategories, rightCategories } from "./NavbarData";

interface DropdownMenuProps {
  handleBackButtonClick?: () => void;
  handleLinkClick?: () => void;
}
export default function DropdownMenu({
  handleBackButtonClick,
  handleLinkClick,
}: DropdownMenuProps) {
  return (
    <div
      className={`absolute left-0 top-24 md:top-[8.5rem] lg:top-auto flex h-screen w-screen flex-col overflow-y-auto bg-stone-300/95 px-5 md:px-12 lg:px-5 pt-5 pb-12 lg:pb-0 md:flex-row md:pt-10 lg:h-auto lg:pl-16 lg:pr-12 lg:pt-0`}
    >
      {/* Left Side With Text */}
      <div className="flex basis-full h-screen lg:h-auto flex-col md:basis-1/2 md:text-2xl lg:basis-2/5 lg:flex-row lg:text-base">
        {/* Back button for small screens */}

        <button
          className={`flex items-center py-4 ml-2 font-semibold lg:hidden text-gray-800`}
          onClick={handleBackButtonClick}
        >
          <span className="mr-4 block lg:hidden text-gray-800">
            <MdOutlineKeyboardArrowLeft className="h-6 w-6 md:h-7 md:w-7" />
          </span>
          Back
        </button>

        {/*Left side category list */}
        {leftCategories.map((category, index) => (
          <div
            className="w-full px-4 py-4 md:py-10 lg:w-1/2 lg:px-5"
            key={index}
          >
            <h3 className="mb-5 md:pt-3 lg:pt-0">
              <Link
                href={category.href}
                onClick={handleLinkClick}
                className="font-semibold text-gray-800 transition-colors duration-100 hover:text-gray-600 cursor-pointer"
              >
                {category.title}
              </Link>
            </h3>
            <ul className="space-y-3 font-medium text-gray-700 md:space-y-5 lg:space-y-3">
              {category.subCategories.map((subCategory, subIndex) => (
                <li key={subIndex}>
                  <Link
                    href={subCategory.href}
                    onClick={handleLinkClick}
                    className="transition-colors duration-100 hover:text-gray-950 cursor-pointer"
                  >
                    {subCategory.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Right side category list */}
        {rightCategories.map((category, index) => (
          <div
            className="w-full px-4 py-5 md:py-10 lg:w-1/2 lg:px-5"
            key={index}
          >
            <h3 className="mb-5 md:pt-12 lg:pt-0">
              <Link
                href={category.href}
                onClick={handleLinkClick}
                className="font-semibold text-gray-800 transition-colors duration-100 ease-in-out hover:text-gray-600 cursor-pointer"
              >
                {category.title}
              </Link>
            </h3>
            <ul className="space-y-3 font-medium text-gray-700 md:space-y-6 lg:space-y-3">
              {category.subCategories.map((subCategory, subIndex) => (
                <li key={subIndex}>
                  <Link
                    href={subCategory.href}
                    onClick={handleLinkClick}
                    className="transition-colors duration-100 hover:text-gray-950 cursor-pointer"
                  >
                    {subCategory.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Right Side with Images */}
      <div className="flex min-h-screen lg:min-h-0 basis-full flex-col space-y-7 p-4 md:basis-1/2 md:space-y-16 md:pt-28 lg:h-[19rem] lg:basis-3/5 lg:flex-row lg:space-x-12 lg:space-y-0 lg:p-10">
        {/* Left Image */}
        <Link
          href="/collections/shoulder-bags"
          onClick={handleLinkClick}
          className=" group/img  relative h-[19rem] w-full overflow-hidden lg:h-auto lg:w-1/2 lg:-ml-14"
        >
          <Image
            src={navbar1}
            alt="nav_image1"
            width={690}
            height={547}
            className="transition-transform duration-700 ease-in-out group-hover/img:scale-105 object-cover w-full h-[19rem] lg:h-full relative"
          />
          {/* Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-black opacity-20"></div>
          {/* Text on Image */}
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center space-y-2">
            <h1 className="text-sm font-semibold text-stone-100">
              BEST SELLERS
            </h1>
            <p className="pb-2 text-3xl text-stone-100 lg:font-medium">
              Shoulder Bags
            </p>
            <button className="h-12 rounded-sm bg-stone-100 px-8 text-sm text-[#353839] font-normal">
              SHOP
            </button>
          </div>
        </Link>

        {/* Right Image */}
        <Link
          href="/collections/leather-bags"
          onClick={handleLinkClick}
          className="relative h-[19rem] w-full group/img overflow-hidden lg:h-auto lg:w-1/2 "
        >
          <Image
            src={navbar2}
            alt="nav_image2"
            width={690}
            height={547}
            className="transition-transform duration-700 ease-in-out group-hover/img:scale-105 object-cover w-full h-[19rem] lg:h-full relative"
          />

          {/* Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-black opacity-20"></div>
          {/* Text on Image */}
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center space-y-2">
            <h1 className="text-sm font-semibold text-stone-100">
              NEW ARRIVALS
            </h1>
            <p className="pb-2 text-3xl text-stone-100 lg:font-medium">
              Leather Bags
            </p>
            <button className="h-12 rounded-sm bg-stone-100 px-8 text-sm text-[#353839] font font-normal">
              SHOP
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
