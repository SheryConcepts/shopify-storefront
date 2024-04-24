import { Ibuttons } from "@/interface";
import Link from "next/link";

const HowerColorButton = (props: Ibuttons) => {
  return props.href ? (
    <Link href={props.href}>
      <button className="h-14 px-10 text-[15px] font-light bg-white text-black w-full hover:bg-black/70 border border-black mt-5 hover:text-white  shadow-xl hover:shadow-black/50 ">
        {props.text}
      </button>
    </Link>
  ) : (
    <button className="h-14 px-10 text-[15px] font-light bg-white text-black w-full hover:bg-black/70 border border-black mt-5 hover:text-white  shadow-xl hover:shadow-black/50 ">
      {props.text}
    </button>
  );
};

export default HowerColorButton;
