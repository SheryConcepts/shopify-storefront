import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

interface CircleProps {
  checked: boolean;
  onClick: () => void;
}


const RadioCircle = ({ checked, onClick }: CircleProps) => (
  <div
    className={`rounded-full w-6  h-6 bg-gray-300 flex justify-center items-center cursor-pointer ${
      checked ? "" : ""
    }`}
    onClick={onClick}
  >
    {checked ? <AiOutlineCheck /> : ""}
  </div>
);

export default RadioCircle;
