import ContactHero from "@/components/views/contact/hero";
import ContactForm from "@/components/views/contact/contactform";
import { LuLoader2 } from "react-icons/lu";
import { Suspense } from "react";

export default function Contactus() {
  return (
    <div>
      <Suspense
        fallback={
          <h1 className="h-screen grid place-items-center ">
            <LuLoader2 className=" h-10 w-10 animate-spin" />
          </h1>
        }
      >
        <ContactHero />
      </Suspense>
      <div className="mt-4">
        <Suspense
          fallback={
            <h1 className="h-screen grid place-items-center ">
              <LuLoader2 className=" h-10 w-10 animate-spin" />
            </h1>
          }
        >
          <ContactForm />
        </Suspense>
      </div>
    </div>
  );
}
