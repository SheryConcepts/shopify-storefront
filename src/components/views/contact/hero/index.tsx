import Image from "next/image";
import black from "@/components/assets/images/contactus/black.jpg";
import "@/components/utils/stylesForHeroAnimation/app.css";

function ContactHero() {
  return (
    <section>
      <div className="relative w-full h-96 md:h-[400px] my-10">
        {/* Background Image */}
        <Image
          src={black}
          alt="Black Bag"
          fill
          priority
          objectFit="cover"
          className="z-0"
        />
        {/* Opacity Layer   */}

        <div className="absolute inset-0 bg-black opacity-20"></div>

        {/* Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center h-full text-red-50">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-6xl max-md:text-3xl max-lg2:text-4xl slide-left-fade-in">
              Contact Us
            </h1>

            <p className="text-center text-lg font-normal mt-5 mx-8 md:mx-0 slide-right-fade-in">
              Questions? Comments? Let your customers get in touch with you by
              filling out the email form below. Reassure them that someone will
              get back to them within a certain timeframe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;
