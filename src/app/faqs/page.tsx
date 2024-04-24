import Subscribe2 from "@/components/views/faqs/subscribe";
import FaqsMain from "@/components/views/faqs";
import FaqHero from "@/components/views/faqs/hero";
import Faq from "@/components/views/faqs/faq1";
import { getFAQs } from "@/lib/helpers";
import { LuLoader2 } from "react-icons/lu";
import { Suspense } from "react";

export default async function Faqs() {
  const data = await getFAQs();
  if (!data) throw new Error("Error while getting Faqs data");
  return (
    <div>
      <Suspense
        fallback={
          <h1 className="h-screen grid place-items-center ">
            <LuLoader2 className=" h-10 w-10 animate-spin" />
          </h1>
        }
      >
        <FaqHero
          title={data.title}
          description={data.description}
          image={data.image}
        />
      </Suspense>
      <Suspense
        fallback={
          <h1 className="h-screen grid place-items-center ">
            <LuLoader2 className=" h-10 w-10 animate-spin" />
          </h1>
        }
      >
        <FaqsMain sections={data.question_sections} />
      </Suspense>
      <Suspense
        fallback={
          <h1 className="h-screen grid place-items-center ">
            <LuLoader2 className=" h-10 w-10 animate-spin" />
          </h1>
        }
      >
        <Faq />
      </Suspense>
      <Suspense
        fallback={
          <h1 className="h-screen grid place-items-center ">
            <LuLoader2 className=" h-10 w-10 animate-spin" />
          </h1>
        }
      >
        <Subscribe2 />
      </Suspense>
    </div>
  );
}
