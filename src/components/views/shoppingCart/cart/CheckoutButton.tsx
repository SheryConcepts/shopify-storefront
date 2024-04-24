"use client";
import Link from "next/link";

export default function CheckoutButton({
  checkoutURL,
}: {
  checkoutURL: string;
}) {
  return (
    <Link href={checkoutURL}>
      <button className="w-fit text-sm px-5 py-4 border border-black bg-black text-white rounded-md hover:bg-white hover:text-gray-700">
        CHECK OUT
      </button>
    </Link>
  );
}
