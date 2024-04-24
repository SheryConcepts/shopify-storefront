import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SearchBar({ onClose }: { onClose: () => void }) {
  // User typed input will be saved in searchValue
  const [searchValue, setSearchValue] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const placeholderText = "Type to search";
  const router = useRouter();

  useEffect(() => {
    // Trigger the animation when the component is mounted
    setIsMounted(true);

    // Add an event listener for the Escape key
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        // Close the modal when the Escape key is pressed
        onClose();
      }
    }

    // Add the event listener when the component is mounted
    window.addEventListener("keydown", handleEscapeKey);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  // Handle input change event
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  // Handle input focus event
  const handleInputFocus = () => {
    if (searchValue === placeholderText) {
      setSearchValue("");
    }
  };

  // Handle input blur event
  const handleInputBlur = () => {
    if (searchValue === "") {
      setSearchValue(placeholderText);
    }
  };

  // Listen for the Enter key (key code 13)
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // Call the submit function when Enter key is pressed
      handleSubmit();
    }
  };

  // Access the value of the input field using searchValue
  const handleSubmit = () => {
    // Close the search modal
    onClose();

    // Check if the searchValue is not empty and not equal to the placeholder text before redirecting
    if (searchValue.trim() !== "" && searchValue !== placeholderText) {
      router.push(`/search?query=${encodeURIComponent(searchValue)}`);
    }
  };

  return (
    <div className="fixed z-[80] top-0 left-0 h-screen w-screen bg-stone-300">
      {/* Cross Button */}
      <div className="flex items-center justify-end mr-8 mt-8">
        <button
          onClick={handleSubmit}
          className="h-8 w-8 md:h-14 md:w-14 lg:h-8 lg:w-8 bg-stone-100 rounded-full flex items-center justify-center z-[100]"
        >
          <span className="text-gray-800 text-3xl md:text-5xl lg:text-3xl mt-1 cursor-pointer">
            &times;
          </span>
        </button>
      </div>
      {/* Input field */}
      <div
        className={`flex flex-col -mt-20 items-center justify-center h-full w-full ${
          isMounted
            ? "opacity-100 transform translate-x-0 duration-700"
            : "opacity-0 transform -translate-x-10"
        } transition-all ease-in-out`}
      >
        <div className="flex justify-center w-3/4 lg:w-1/2">
          <input
            type="text"
            id="searchInput"
            value={searchValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyDown}
            autoFocus={true}
            className="w-full text-2xl md:text-3xl lg:text-2xl rounded bg-stone-300 text-gray-800 placeholder-gray-800 focus:outline-none"
            placeholder={placeholderText}
          />
          {/* Arrow button */}
          <button onClick={handleSubmit}>
            <BsArrowRight className="text-gray-800 h-8 w-8 md:h-10 md:w-10 lg:h-8 lg:w-8" />
          </button>
        </div>
        {/* Underline */}
        <div className="w-3/4 lg:w-1/2 h-[2px] bg-gray-800 mt-5"></div>
      </div>
    </div>
  );
}
