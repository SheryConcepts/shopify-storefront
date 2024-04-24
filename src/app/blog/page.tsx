import {
  firstThreeCards,
  secondThreeCards,
  allSixCards,
} from "@/components/utils/blogdetailpagedata";
import BlogPageStyle from "@/components/views/blog/styleguide";
import HeroForBlog from "@/components/views/blog/heroForBlog";
import "@/components/utils/stylesForHeroAnimation/app.css";
import { LuLoader2 } from "react-icons/lu";
import { Suspense } from "react";
const BlogPage = () => {
  //The code below upto line 21 is used to generate an array of numbers, which is then used to check the indexes
  //of cards in allSixCards array and then style certain cards based on these indexes (apply cols-span-2 class to certain cards)
  const arr: number[] = [];
  let i = 0;
  arr.push(i);
  while (i < 1000) {
    i = i + 5;
    arr.push(i);
    i = i + 1;
    arr.push(i);
  }

  return (
    <div>
      {/* Hero Section for Blog Page */}
      <div className="mb-36">
        <Suspense
          fallback={
            <h1 className="h-screen grid place-items-center ">
              <LuLoader2 className=" h-10 w-10 animate-spin" />
            </h1>
          }
        >
          <HeroForBlog />
        </Suspense>
      </div>

      {/* Cards for Blog page
      <div>
        first three cards
        <div className='lg:pb-[40px]  grid md:gap-0 gap-2    grid-cols-1 px-[2px] lg:px-[70px]  lg:grid-cols-[50%,25%,25%]'>
          {firstThreeCards.map((card, index) => (
            <BlogPageStyle key={index} {...card} />
          ))}
        </div>

        Secong three cards
        <div className='lg:pb-[70px] grid md:gap-0 gap-2    grid-cols-1  px-[2px] lg:px-[70px] lg:grid-cols-[25%,25%,50%]'>
          {secondThreeCards.map((card, index) => (
            <BlogPageStyle key={index} {...card} />
          ))}
        </div>
      </div> */}

      <div>
        {/* all six cards */}
        <div className="lg:pb-[40px]  grid md:gap-0 gap-2    grid-cols-1 px-[2px] lg:px-[70px]  lg:grid-cols-4 ">
          {allSixCards.map((card, index) => (
            // checking if the index of the card is in the array, then apply cols-span-2 class
            <div
              key={index}
              className={`${arr.includes(index) ? "col-span-2" : ""}`}
            >
              <Suspense
                fallback={
                  <h1 className="h-screen grid place-items-center ">
                    <LuLoader2 className=" h-10 w-10 animate-spin" />
                  </h1>
                }
              >
                <BlogPageStyle key={index} {...card} />
              </Suspense>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
