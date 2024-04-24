import Image from "next/image";

import "@/components/utils/stylesForHeroAnimation/app.css";

const FaqHero = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: { url: string; altText: string | null };
}) => {
  return (
    <section className="relative w-full h-96 md:h-[500px] my-10">
      {/* Background Image */}
      <Image
        src={image.url}
        alt={image.altText ?? ""}
        width={2000}
        height={2000}
        priority
        className="z-0 object-cover w-full h-96 md:h-[500px]"
      />
      {/* Opacity Layer   */}

      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center h-full text-red-50">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-6xl max-md:text-3xl max-lg2:text-4xl slide-left-fade-in">
            {title}
          </h1>

          <p className="text-center text-lg font-normal mt-5 mx-8 slide-right-fade-in">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqHero;
