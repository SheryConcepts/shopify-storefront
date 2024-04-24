import Link from "next/link";
import { LiaUserCircleSolid } from "react-icons/lia";
import DropdownMenu from "./DropdownMenu";
import Logo from "./Logo";
import RightSideIcons from "./RightSideIcons";
import { nav_buttons } from "./NavbarData";

export default function NavbarLarge({
  total_Quantity,
}: {
  total_Quantity?: number | undefined;
}) {
  return (
    <div className="flex h-full items-center justify-between px-5 lg:px-10 -mt-0 md:-mt-1 lg:-mt-0">
      {/* Webiste Logo */}
      <Logo />

      {/* Menu Buttons */}
      <div className={`z-50`}>
        {nav_buttons.map((btn, index) => (
          <ul
            key={index}
            className="flex h-16 items-center font-semibold space-x-4 text-gray-800 flex-row"
          >
            {/* Home Button */}
            <li>
              <Link
                href={btn.href1}
                className="decoration-2 pl-4 underline-offset-[10px] hover:underline hover:decoration-gray-700"
              >
                {btn.text1}
              </Link>
            </li>

            {/* Shop Button */}

            <li className="h-full group/navbtn">
              <button className="px-8 decoration-2 underline-offset-[10px] hover:underline hover:decoration-gray-700 h-full">
                {btn.text2}
              </button>

              <div className="invisible group-hover/navbtn:visible opacity-0 group-hover/navbtn:opacity-100 transition-opacity duration-500">
                <DropdownMenu />
              </div>
            </li>

            {/* Our Story Button*/}

            <li>
              <Link
                href={btn.href3}
                className="pr-4 decoration-2 underline-offset-[10px] hover:underline hover:decoration-gray-700"
              >
                {btn.text3}
              </Link>
            </li>

            {/* Blog Button */}

            <li>
              <Link
                href={btn.href4}
                className="px-4 decoration-2 underline-offset-[10px] hover:underline hover:decoration-gray-700"
              >
                {btn.text4}
              </Link>
            </li>

            {/* FAQs Button*/}

            <li>
              <Link
                href={btn.href5}
                className="px-4 decoration-2 underline-offset-[10px] hover:underline hover:decoration-gray-700"
              >
                {btn.text5}
              </Link>
            </li>
          </ul>
        ))}
      </div>

      {/* Icons on the right side of navbar */}

      <div className="flex">
        <RightSideIcons total_Quantity={total_Quantity} />
        <Link href="/account" className="ml-4">
          <LiaUserCircleSolid className="mt-0.5 text-gray-800 h-8 w-8" />
        </Link>
      </div>
    </div>
  );
}
