import Image from "next/image";
import Vegan from "@/components/assets/images/faq/vegan.png"
import Cruelty from "@/components/assets/images/faq/cruelty.png"
import Water2 from "@/components/assets/images/faq/water 2.png"

function Faq() {
    return <div className="p-5">
        <div className="md:max-w-[90%] max-w-[100%] mx-auto my-20">
            {/* icons */}
            <div className="grid md:grid-cols-3 gap-y-10 place-items-center mt-7">
                {/* Pont 1 */}
                <div className="max-w-[100%] ">
                    <Image src={Vegan} alt="vegan" width={100} height={100} className="mx-auto" />
                    <h1 className="text-center text-2xl mt-4">Vegan</h1>
                    <p className="text-center mt-2">All are bags are suitable for vegans.</p>
                </div>

                {/* Point 2 */}
                <div className="max-w-[100%]">
                    <Image src={Cruelty} alt="cruelty" width={100} height={100} className="mx-auto" />
                    <h1 className="text-center text-2xl mt-4">Cruelty free</h1>
                    <p className="text-center mt-2">Ethically made cruelty-free materials.</p>
                </div>

                {/* Point 3 */}
                <div className="max-w-[100%]">
                    
                    <Image src={Water2} alt="water" width={100} height={100} className="mx-auto" />
                    <h1 className="text-center text-2xl mt-4">Water & stain resistant</h1>
                    <p className="text-center mt-2">Vegan faux leather and resistant Tyvek</p>
                </div>
           
            </div>
        </div>
    </div>
}

export default Faq;
