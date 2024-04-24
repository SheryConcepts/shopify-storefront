import Link from "next/link";
import { logo } from "./NavbarData";

export default function Logo() {
  return (
    <div>
      {logo.map((data, index) => (
        <Link
          key={index}
          href={"/"}
          className="ml-6 text-2xl font-bold text-gray-800 md:text-4xl lg:ml-0 lg:text-2xl"
        >
          {data.text}
        </Link>
      ))}
    </div>
  );
}
