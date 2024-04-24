import dynamic from "next/dynamic";
import Betty from "@/components/views/home/betty";
import HomeVideo from "@/components/views/home/video";
import HeroSection from "@/components/views/home/hero";
import Collection from "@/components/views/home/collection";
import BagsCarousel from "@/components/views/home/homebagscarousel";
import { slideImages } from "@/components/views/home/collection/data";
import { All_Collections_Data } from "@/components/utils/collectionsdata";
import CollectionCarousel from "@/components/views/home/collectionslide";
import {
  getHomeCarouselCollectionData,
  getCollections,
  getHeroSlides,
} from "@/lib/helpers";
import { LuLoader2 } from "react-icons/lu";
import { Suspense } from "react";

// giving video URL here
let videoURL =
  "https://res.cloudinary.com/dkbtayo2l/video/upload/v1691066584/samples/Shopify%20store%20Videos/Bbag_hovmwl.mkv";

export default async function Home() {
  const slideData = await getHeroSlides();
  const homeCarouselCollection1 = await getHomeCarouselCollectionData(
    "Leather Bags"
  );
  const homeCarouselCollection2 = await getHomeCarouselCollectionData(
    "Shoulder Bags"
  );
  const collections = await getCollections();

  return (
    <main>
      {/* Hero Section Slider */}
      <Suspense
        fallback={
          <h1 className="h-screen grid place-items-center ">
            <LuLoader2 className=" h-10 w-10 animate-spin" />
          </h1>
        }
      >
        <HeroSection slideData={slideData} />
      </Suspense>

      {/* Leather Bags Slider*/}
      {/* TODO: figure out why passing homeCarouselCollection collection as prop to below component gives undefined.*/}
      <Suspense
        fallback={
          <h1 className="h-screen grid place-items-center ">
            <LuLoader2 className=" h-10 w-10 animate-spin" />
          </h1>
        }
      >
        <BagsCarousel
          // data={All_Collections_Data}
          // category_name="leatherbags"
          // title="Leather Bags"
          collection={homeCarouselCollection1}
        />
      </Suspense>

      {/* <BigImageInCarousel /> */}
      <div className="flex flex-col  overflow-hidden">
        <Suspense
          fallback={
            <h1 className="h-screen grid place-items-center ">
              <LuLoader2 className=" h-10 w-10 animate-spin" />
            </h1>
          }
        >
          <Collection slideImages={slideImages} />
        </Suspense>
      </div>

      {/* Shoulder Bags Slider */}
      <Suspense
        fallback={
          <h1 className="h-screen grid place-items-center ">
            <LuLoader2 className=" h-10 w-10 animate-spin" />
          </h1>
        }
      >
        <BagsCarousel collection={homeCarouselCollection2} />
      </Suspense>
      {/* Section 8 */}
      {/* <Protection /> */}

      <Suspense
        fallback={
          <h1 className="h-screen grid place-items-center ">
            <LuLoader2 className=" h-10 w-10 animate-spin" />
          </h1>
        }
      >
        <HomeVideo videoURL={videoURL} />
      </Suspense>

      {/* <MoreWays /> */}

      {/* All Colection Slider */}
      {/* @ts-ignore */}
      <Suspense
        fallback={
          <h1 className="h-screen grid place-items-center ">
            <LuLoader2 className=" h-10 w-10 animate-spin" />
          </h1>
        }
      >
        <CollectionCarousel collections={collections} />
      </Suspense>
      <Suspense
        fallback={
          <h1 className="h-screen grid place-items-center ">
            <LuLoader2 className=" h-10 w-10 animate-spin" />
          </h1>
        }
      >
        <Betty />
      </Suspense>
    </main>
  );
}
