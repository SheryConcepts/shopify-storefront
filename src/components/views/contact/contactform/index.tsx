import HowerColorButton from "@/components/ui/howercolorbutton";

function ContactForm(){
return (
<section>
<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg text-center">
    <div className="flex flex-col items-center py-2">
    <h1 className="text-2xl font-bold sm:text-3xl text-gray-700">Get in touch!</h1>
    <div className="w-10 h-[2px] bg-gray-700 mt-5">
    </div>
    </div>
    <p className="mt-6 text-gray-700 px-6">
    The Loft Rooms Manhattan Drive <br/> 40 Foot Curl Surfwell, USA <br/>
    Tel: 012-345-678-900
    </p>
    
  </div>

   <div className="flex justify-center pb-8">
          <form
            className="relative flex flex-col mx-4 space-y-6 mt-10"
          >
            {/* Input User Name*/}
            <input
              type="text"
              name="form_name"
              placeholder="Name"
              className="border border-gray-400 p-4 pe-12 w-full"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              className="border border-gray-400 p-4 pe-12 w-full"
             />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-gray-400 p-3 w-80 h-44 md:w-[480px]"
>

            </textarea>

            <div>
           <div>
            <HowerColorButton href="/siliconcollection" text="Send Message"/>
           </div>
            </div>
          </form>
          
    </div>
    </div>  
</section>
)
}
export default ContactForm;