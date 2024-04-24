import Image from "next/image";
import Link from "next/link";
import HowerColorButton from "@/components/ui/howercolorbutton";
import { All_Collections_Data } from "@/components/utils/collectionsdata";
import { Collection } from "@/interface";
import "@/components/utils/stylesForHeroAnimation/app.css";
import collection_cover from "../../components/assets/images/collectionComponentImages/collection_cover.jpg";
import { getCollections } from "@/lib/helpers";
import { LuLoader2 } from "react-icons/lu";
import { Suspense } from "react";
const CollectionSection = async () => {
  const collections = await getCollections();

  return (
    <section className="overflow-hidden">
      <Suspense
        fallback={
          <h1 className="h-screen grid place-items-center ">
            <LuLoader2 className=" h-10 w-10 animate-spin" />
          </h1>
        }
      >
        {/* Image with Heading */}
        <div className="h-[70vh] relative w-screen lg:h-[70vh]">
          {/* Image*/}
          <div className="relative w-full h-full">
            <Image
              src={collection_cover}
              fill
              alt="about us"
              priority
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            {/* Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-black/20"></div>
          </div>

          {/* Text on Image */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="flex flex-col items-center text-center text-white px-6 mt-20">
              <h1 className="text-3xl md:text-5xl lg:text-6xl mb-3 slide-left-fade-in">
                Collections
              </h1>
              {/* <div className="h-[3px] w-8 bg-white rounded-full mb-10"></div> */}
              <h2 className="text-base md:text-lg slide-right-fade-in">
                Elevate your style with our hand-picked collection of bags
              </h2>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-y-5 gap-x-4 max-lg:grid-cols-2 max-md:grid-cols-1 p-10">
          {collections &&
            collections.map((col, index: number) => (
              <div
                key={index}
                className="relative flex justify-center items-center group group-hover:opacity-100 "
              >
                <div className="relative h-[560px] w-[580px] max-5xl:h-[540px] max-5xl:w-[560px]   max-4xl:h-[520px] max-4xl:w-[540px]  max-3xl:h-[500px] max-3xl:w-[520px] max-2xl:h-[450px] max-2xl:w-[450px] max-xl:h-[380px] max-xl:w-[400px] max-lg:h-[440px] max-lg:w-[440px] max-lg2:h-[430px] max-lg2:w-[430px] max-md:h-[700px] max-md:w-[700px] max-sm:h-[580px] max-sm:w-[580px] max-xsm:h-[500px] max-xsm:w-[500px] max-xs:h-[350px] max-xs:w-[350px] max-xxs:w-[340px] max-xxs:h-[320px] max-xxsm:w-[320px] max-xxsm:h-[300px]  max-lg:mb-16 ">
                  <Image
                    src={col.image.url}
                    alt={col.image.altText ?? ""}
                    width={540}
                    height={560}
                    className="object-cover h-[560px] w-[580px]  max-5xl:h-[540px] max-5xl:w-[560px]   max-4xl:h-[520px] max-4xl:w-[540px]  max-3xl:h-[500px] max-3xl:w-[520px] max-2xl:h-[450px] max-2xl:w-[450px] max-xl:h-[380px] max-xl:w-[420px] max-lg:h-[440px] max-lg:w-[440px] max-lg2:h-[430px] max-lg2:w-[430px] max-md:h-[700px] max-md:w-[700px] max-sm:h-[580px] max-sm:w-[580px] max-xsm:h-[500px] max-xsm:w-[500px] max-xs:h-[350px] max-xs:w-[350px] max-xxs:w-[340px] max-xxs:h-[320px] max-xxsm:w-[320px] max-xxsm:h-[300px]"
                  />

                  {/* Responisve div */}
                  <div className="lg:hidden flex flex-col text-gray-800 text-center  ">
                    <h2 className="mt-3 font-medium text-xl">{col.title}</h2>
                    <div className="gap-2">
                      <Link
                        href={`/collections/${col.handle}`}
                        className="text-black text-[14px] lowercase"
                      >
                        {col.productCount} Products
                      </Link>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-black opacity-20 " />
                </div>

                {/* Overlay Content */}
                <div className="absolute top-[100px] bottom-0 left-0 right-0 z-10 text-white items-center justify-center flex  flex-col transition-all group-hover:translate-x-0 group-hover:-translate-y-7 duration-2000 max-lg:hidden ">
                  <h2 className="text-[32px] font-normal text-center ">
                    {col.title}
                  </h2>
                  <div className="opacity-0 flex flex-col items-center gap-1 transition ease-in group-hover:opacity-100">
                    <Link
                      href={`/collections/${col.handle}`}
                      className="text-white text-[15px] font-medium lowercase"
                    >
                      {col.productCount} Products
                    </Link>
                    <HowerColorButton
                      text="VIEW"
                      href={`/collections/${col.handle}`}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Suspense>
    </section>
  );
};

export default CollectionSection;
