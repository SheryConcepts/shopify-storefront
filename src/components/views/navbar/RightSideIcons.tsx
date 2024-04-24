import { useState } from "react";
import { LuSearch } from "react-icons/lu";
import SearchBar from "./SearchBar";
import { LiaShoppingBagSolid } from "react-icons/lia";
import Link from "next/link";
// import { useCartStore } from "@/store/useCart";

export default function RightSideIcons({
  total_Quantity,
}: {
  total_Quantity: number | undefined;
}) {
  // {quantity}: {quantity?: number | undefined}
  const [showSearchBar, setShowSearchBar] = useState(false);
  // const { total_Quantity, updateQuantity } = useCartStore();

  // useEffect(() => {
  //   updateQuantity(quantity ? quantity : 0);
  // }, []);

  // Search modal
  const handleSearchBar = () => {
    setShowSearchBar(!showSearchBar);

    // Toggle overflow property to prevent scrolling
    if (!showSearchBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };
  return (
    <div className="flex items-center space-x-2 md:space-x-5">
      {/* Search Icon */}
      <button onClick={handleSearchBar}>
        <LuSearch className="mt-0.5 h-[26px] w-[26px] text-gray-800 md:h-10 md:w-10 lg:h-[26px] lg:w-[26px]" />
      </button>

      {/* Show Search Bar  */}
      {showSearchBar && (
        <div>
          <SearchBar onClose={handleSearchBar} />
        </div>
      )}

      {/* Cart Icon */}

      <Link
        href="/cart"
        className=""
        // onClick={handleLinkClick}
      >
        <div className="relative">
          <LiaShoppingBagSolid className="h-8 w-10 text-gray-800 md:h-12 md:w-16 lg:h-8 lg:w-10" />
          <div className="absolute left-0 top-1 flex h-8 w-10 items-center justify-center text-xs  font-semibold text-red-700 md:h-12 md:w-16 md:mt-0.5 lg:mt-0 md:text-base lg:h-8 lg:w-10 lg:text-xs">
            {total_Quantity}
          </div>
        </div>
      </Link>
    </div>
  );
}
