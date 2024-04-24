import BgImg from "@/components/assets/images/home/protection/bg.png";
import HowerColorButton from "@/components/ui/howercolorbutton";
import Image from "next/image";

function Protection() {
  return <div className="md:flex md:max-h-screen">
    <div className="basis-[50%]  p-7 md:p-10 lg:p-20 xl:p-32">
      <h2 className="font-light mb-5">PROTECTION</h2>
      <h1 className="text-3xl mb-1">
        Wipe clean & drama-free
      </h1>
      <div className="bg-gray-900 h-[3px] w-9 mb-10"></div>
      <p className="font-light mb-10 text-justify">
        Our bags are made from soft, velvety & non-toxic silicone. They are
        highly resistant to stains and scratches. Absolutely no hassle. No
        matter what you spill on it - coffee, oil, cranberry juice, nail
        polish, you can easily wipe it clean with just soap and water.
      </p>
      <div className="w-48">
        <HowerColorButton text="READ MORE" href="/story" />
      </div>
    </div>
    <div className="basis-[50%]">
      <Image src={BgImg} alt="bg-img" className="w-full h-full object-cover" />
    </div>
  </div>
}

export default Protection;



