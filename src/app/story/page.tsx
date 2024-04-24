import Subscribe2 from "@/components/views/faqs/subscribe";
import AboutTheBags from "@/components/views/story/aboutbags";
import ContenSection from "@/components/views/story/contentsection";
import EthicallySection from "@/components/views/story/ethicalsection";
import OurStoryHero from "@/components/views/story/hero/";
import LeatherLikeCollection from "@/components/views/story/leatherlikecollectionslide";
import { LuLoader2 } from "react-icons/lu";
import { Suspense } from "react";
import Subscribe1 from "@/components/views/story/subscribe";
import { getPage } from "@/lib/shopify";
import Image from "next/image";
import parse, { Element, domToReact } from "html-react-parser";

const page = async () => {
  function elementChildren(id: string) {
    // get content element by its id
    return parse(body, {
      replace: (domNode) => {
        if (domNode instanceof Element && domNode.attribs.id === id) {
          return <>{domToReact(domNode.children)}</>;
        }
        return <></>;
      },
    }) as JSX.Element;
  }

  function elementImage(id: string) {
    return parse(body, {
      replace: (domNode) => {
        if (domNode instanceof Element && domNode.attribs.id === id) {
          return (
            <Image
              src={domNode.attribs.src}
              alt={domNode.attribs.alt}
              width={650}
              height={650}
              className="w-screen"
              priority
            />
          );
        }
        return <></>;
      },
    }) as JSX.Element;
  }

  const { body } = await getPage("story");
  const hero_h = elementChildren("hero-h");
  const hero_p = elementChildren("hero-p");
  const content_h = elementChildren("content-h");
  const content_p = elementChildren("content-p");
  const bags_h = elementChildren("bags-h");
  const bags_p = elementChildren("bags-p");
  const bags_image = elementImage("bags-img");
  const ethical_h = elementChildren("ethical-h");
  const ethical_subh = elementChildren("ethical-subh");
  const ethical_p = elementChildren("ethical-p");
  const ethical_img = elementImage("ethical-img");

  return (
    <main>
      <Suspense
        fallback={
          <h1 className="h-screen grid place-items-center ">
            <LuLoader2 className=" h-10 w-10 animate-spin" />
          </h1>
        }
      >
        <OurStoryHero h2={hero_h} p={hero_p} />;
      </Suspense>
      <Suspense
        fallback={
          <h1 className="h-screen grid place-items-center ">
            <LuLoader2 className=" h-10 w-10 animate-spin" />
          </h1>
        }
      >
        <ContenSection h2={content_h} p={content_p} />
      </Suspense>
      <Suspense
        fallback={
          <h1 className="h-screen grid place-items-center ">
            <LuLoader2 className=" h-10 w-10 animate-spin" />
          </h1>
        }
      >
        <AboutTheBags h2={bags_h} p={bags_p} image={bags_image} />
      </Suspense>
      {/* storypage bag slider component */}
      {/* <LeatherLikeCollection
  data={StoryPageCarousel}
  title="New Leather Like Collection"
  link="https://google.com"
/> */}
      <Suspense
        fallback={
          <h1 className="h-screen grid place-items-center ">
            <LuLoader2 className=" h-10 w-10 animate-spin" />
          </h1>
        }
      >
        <EthicallySection
          h={ethical_h}
          p={ethical_p}
          image={ethical_img}
          subh={ethical_subh}
        />
      </Suspense>
      <Suspense
        fallback={
          <h1 className="h-screen grid place-items-center ">
            <LuLoader2 className=" h-10 w-10 animate-spin" />
          </h1>
        }
      >
        <Subscribe1 />
      </Suspense>
    </main>
  );
};

export default page;
