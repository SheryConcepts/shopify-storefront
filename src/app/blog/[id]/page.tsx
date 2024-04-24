import Link from "next/link";
import Image from "next/image";
import "@/components/utils/stylesForHeroAnimation/app.css";
import { LuLoader2 } from "react-icons/lu";
import { Suspense } from "react";
import { FaFacebookF, FaPinterest, FaTwitter } from "react-icons/fa";
import {
  firstThreeCards,
  secondThreeCards,
} from "@/components/utils/blogdetailpagedata";
import { blogTypes } from "@/interface";
import parse, { Element, domToReact } from "html-react-parser";
import { getBlogArticle } from "@/lib/shopify";

export const generateMetadata = ({ params }: { params: { id: string } }) => {
  return {
    title: params.id,
  };
};

const BlogDetailPage = async ({ params }: { params: { id: string } }) => {
  const { contentHtml, image, publishedAt, title } = await getBlogArticle(
    params.id
  );
  return (
    <div>
      <Suspense
        fallback={
          <h1 className="h-screen grid place-items-center ">
            <LuLoader2 className=" h-10 w-10 animate-spin" />
          </h1>
        }
      >
        <div className="relative h-[95vh] max-w-full">
          <Image
            src={image.url}
            alt={image.altText || ""}
            width={image.width}
            height={image.height}
            className="
            object-cover h-full w-full"
          />
          <div className="absolute inset-0 bg-black opacity-20"></div>

          {/* Opacity Layer */}

          <div className="absolute left-[10%] lg:left-[20%] bottom-28 flex flex-col gap-y-4">
            <time dateTime={publishedAt} className="text-[13px] text-white">
              {publishedAt}
            </time>
            <h2 className="md:text-[45px] text-[35px] text-white max-w-2xl">
              {title}
            </h2>
          </div>
        </div>
        <div className="max-w-5xl m-auto text-justify">
          <div className=" p-[35px] sm:p-[50px]">
            {parse(contentHtml, {
              replace: (domNode) => {
                if (domNode instanceof Element && domNode.name === "p") {
                  return (
                    <p className="text-[15px] my-[15px] text-[#5E5C5C]">
                      {domToReact(domNode.children)}
                    </p>
                  );
                } else if (
                  domNode instanceof Element &&
                  (domNode.name === "h2" || domNode.name === "h1")
                ) {
                  return (
                    <h2 className="text-[27px] text-[#423F3F] italic text-center">
                      {domToReact(domNode.children)}
                    </h2>
                  );
                } else if (
                  domNode instanceof Element &&
                  (domNode.name === "h3" ||
                    domNode.name === "h4" ||
                    domNode.name === "h5" ||
                    domNode.name === "h6")
                ) {
                  return (
                    <h2 className="text-[18px] font-normal text-[#423F3F]">
                      {domToReact(domNode.children)}
                    </h2>
                  );
                } else if (
                  domNode instanceof Element &&
                  domNode.name === "img"
                ) {
                  console.log(console.log(domNode.attribs));
                  return (
                    <div className="my-3 md:my-8 mx-auto h-[250px] sm:h-[290px]  md:h-[400px] max-w-[800px] relative">
                      <Image
                        src={domNode.attribs.src}
                        alt={domNode.attribs.alt}
                        height={500}
                        width={500}
                        priority
                        className="object-cover w-full h-full relative"
                      />

                      <div className="absolute inset-0 bg-black opacity-20"></div>
                    </div>
                  );
                } else {
                  return;
                }
              },
            })}
            {/* socail media links */}
            <div className="border-b">
              <div className="flex justify-center items-center gap-7 py-9">
                <Link href={``}>
                  <FaFacebookF
                    fill="#4A5568"
                    className="w-6 h-6 hover:fill-[#6b7280] "
                  />
                </Link>
                <Link href={``}>
                  <FaPinterest
                    fill="#4A5568"
                    className="w-6 h-6 hover:fill-[#6b7280]"
                  />
                </Link>
                <Link href={``}>
                  <FaTwitter
                    fill="#4A5568"
                    className="w-6 h-6 hover:fill-[#6b7280]"
                  />
                </Link>
              </div>
            </div>
            {/* comment form  */}
            <div className="max-w-[530px] my-8 m-auto">
              <h2 className="uppercase text-center text-[21px] text-[#423F3F] font-normal mb-3">
                Leave a comment
              </h2>

              <form>
                <div className="flex flex-col ">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    className="blog-comment-input"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="blog-comment-input"
                  />
                  <textarea
                    placeholder="Comment"
                    required
                    className="blog-comment-input"
                  />
                  <button
                    type="submit"
                    className="uppercase mt-4 bg-slate-950 p-3 text-slate-50 rounded-md hover:bg-transparent hover:border hover:border-slate-950 hover:transition-all hover:text-slate-950 border"
                  >
                    Post comment
                  </button>
                </div>
              </form>

              <div className="text-center py-12">
                <Link
                  href="/blog"
                  className="text-[14px] text-[#423F3F] tracking-wider "
                >
                  BACK TO STYLE GUIDES
                </Link>
              </div>
            </div>
            {/* subscribe use letter */}
          </div>
        </div>
        {/* subscrbe news letter */}
        {/* <div
            className="bg-cover bg-no-repeat bg-center h-screen bg-fixed max-w-full relative"
            style={{ backgroundImage: `url(${item.image.src})` }}
          >
            <div className="absolute flex flex-col justify-center items-center w-full h-full gap-y-8 px-3">
              <h3 className="text-[45px] text-[#efefef]">
                Subscribe to our newsletter
              </h3>
              <p className="text-[15px] text-[#efefef]">
                Sign up to our newsletter and we’ll keep you up to date with the
                latest arrivals
              </p>
              <input
                type="email"
                placeholder="Email"
                className="placeholder:text-[#efefef] bg-transparent py-3 md:w-[400px] max-w-[400px] border-b-[2px] outline-none text-[#efefef]"
              />
            </div>
          </div> */}
      </Suspense>
    </div>
  );
};

export default BlogDetailPage;
