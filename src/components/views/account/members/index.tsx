import members from "../../../assets/images/account/members.jpg";
import Image from "next/image";

export default function Members() {
  return (
    <div className="py-12 md:py-20 flex flex-col md:flex-row">
      {/* Image on Left */}
      <div className="md:basis-1/2 flex items-center justify-center">
        {/* Member Image */}
        <div className="relative">
          <Image
            src={members}
            width={448}
            height={512}
            alt="about us"
            sizes="(min-width: 1040px) 448px, (min-width: 400px) 320px, calc(25vw + 225px)"
            className="object-cover object-bottom w-[20rem] h-[24rem] lg:w-[28rem] lg:h-[32rem]"
          />
          <div className="absolute inset-0 bg-black opacity-5 "></div>
        </div>
      </div>

      {/* Text on Right */}
      <div className="md:basis-1/2 flex flex-col items-center justify-center text-gray-800 text-center mt-10 md:mt-0">
        {/* Heading */}
        <div className="text-xl md:text-2xl lg:text-3xl w-5/6 md:w-2/3 lg:leading-10">
          Enjoy members-only offers, vouchers and exclusive invitations.
        </div>

        {/* Underline */}
        <div className="w-4 md:w-8 h-[2px] md:h-[4px] lg:h-[3px] bg-gray-800 mt-1 md:mt-2 "></div>

        {/* Text */}
        <div className="text-base space-y-4 mt-10 px-8 md:px-10 lg:px-0">
          <p>
            View your online orders. Members can also view in-store receipts.
          </p>
          <p>Update your personal details, password & manage payment cards.</p>
          <p>
            View and manage addresses, edit your contact address and add new
            addresses.
          </p>
        </div>
      </div>
    </div>
  );
}
