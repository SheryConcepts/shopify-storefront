import { Ibuttons } from "@/interface";
import Link from "next/link";

const HowerGrowButton = (props: Ibuttons) => {
  if (props.href) {
    // Render the Link component only if href is provided
    return (
      <Link href={props.href}>
        <button className="cursor-pointer h-14 px-10 font-light mt-5 text-sm bg-white rounded-sm hover:transform hover:scale-105 duration-300 text-[#353839]">
          {props.text}
        </button>
      </Link>
    );
  } else {
    // Render a button without the Link component if href is not provided
    return (
      <button className="cursor-pointer h-14 px-10 font-light mt-5 text-sm bg-white rounded-sm hover:transform hover:scale-105 duration-300 text-[#353839]">
        {props.text}
      </button>
    );
  }
};

export default HowerGrowButton;
