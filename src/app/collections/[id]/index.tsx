import React from "react";
import Hero from "@/components/views/hero";
import Filter from "@/components/ui/filter";
import CollectionGrid from "@/components/views/productList";
import { CompleteCollectionInput, getCompleteCollection } from "@/lib/shopify";
import { getFilterVariantsNames } from "@/lib/helpers";
import addBlurredDataUrls from "@/components/utils/functions/getBase64";

type queryObjectTypes = {
  handle: string;
  reverse: boolean;
  sort_key: "RELEVANCE" | "BEST_SELLING" | "CREATED_AT" | "PRICE" | "TITLE";
  variant_value: string;
  variant_name: string;
  available: boolean;
};

const SingleCategoryPage = async ({ queryObject }: any) => {
  const show = false;
  const filterbutton = show ? "CLOSE FILTERS" : "SHOW FILTERS";
  const collection = await getCompleteCollection(queryObject);
  const variantNames = await getFilterVariantsNames();
  if (!collection) {
    return <div>Category not found</div>;
  }

  // const extractedColors: string[] = []
  // collection.products.forEach((product) => {
  //   const colorOption = product.options.find(
  //     (option) => option.name === 'Color'
  //   )
  //   if (colorOption) {
  //     extractedColors.push(...colorOption.values)
  //   }
  // })

  // Deduplicate the extracted colors
  const uniqueColors = Array.from(new Set(variantNames));

  // placeholder images for grid
  const imagesWithBlur = await addBlurredDataUrls(
    collection?.products?.map((product) => product.images[0].url)
  );
  return (
    <section className="py-20">
      <div className="text-gray-600">
        {/*Wrapper*/}
        <div className="col-span-2">
          {/*This can be done better*/}
          <Hero
            category={{
              image: collection.image.url,
              name: collection.title,
              paragraph: collection.description,
            }}
          />
        </div>
        <div className="min-h-screen flex gap-5 mt-10 relative lg:px-20 px-5 items-start">
          <div className="p-5  max-md:hidden sticky top-5">
            <Filter variantNames={uniqueColors as string[]} />
          </div>
          <div
            className=" overflow-scroll no-scrollbar w-full bg-white  pb-10  "
            style={{ scrollbarWidth: "none" }}
          >
            {collection.products.length === 0 ? (
              <div>No Products Found</div>
            ) : (
              <CollectionGrid
                category={collection}
                placeholderImages={imagesWithBlur}
              />
            )}
          </div>
        </div>
        {/* <div className='min-h-screen grid grid-cols-[1fr,5fr] gap-5 mt-10 relative md:ml-10'>
          <div className='p-5 max-h-[800px] max-md:hidden'>
            <Filter variantNames={uniqueColors} />
          </div>
          <div
            className=' overflow-scroll no-scrollbar max-md:w-screen bg-white mx-auto pb-10  '
            style={{ scrollbarWidth: 'none' }}
          >
          
            {collection.products.length === 0 ? (
              <div>No Products Found</div>
            ) : (
              <CollectionGrid category={collection} />
            )}
          </div>
        </div> */}

        <div
          className={`${
            show ? "block" : "hidden"
          } absolute bg-white w-full h-full top-0 md:hidden `}
        >
          <div className="fixed h-screen overflow-scroll pb-36 bg-white  ">
            <Filter variantNames={uniqueColors as string[]} />
          </div>
        </div>
        <div
          className="w-screen h-20 bg-black text-white bottom-0 text-sm fixed flex justify-center items-center md:hidden"
          // Here we had a and event listener, 'onClick' please for the love of god create self contained client components for such things
        >
          {filterbutton}
        </div>
      </div>
    </section>
  );
};

export default SingleCategoryPage;
