import { Suspense } from "react";
import SingleCategoryPage from ".";
import "./app.css";
import { CompleteCollectionInput } from "@/lib/shopify";
import { LuLoader2 } from "react-icons/lu";
import { revalidatePath } from "next/cache";
import { defaultSort, sorting } from "@/lib/constants";

const DynamicCategoryPage = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}) => {
  // function collectionPageQueryObject(searchParams: {
  //   [key: string]: string | undefined
  // }): CompleteCollectionInput {
  //   // h1 = 'helper 1', just used for short names
  //   function h1(v: string) {
  //     return v
  //   }

  //   let max_price: number | undefined
  //   let min_price: number | undefined
  //   let available: boolean | undefined
  //   let variant_name: string | undefined
  //   let variant_value: string | undefined
  //   let sort_key: string | undefined
  //   let reverse: boolean | undefined
  //   let product_type: string | undefined
  //   for (let param in searchParams) {
  //     const value = searchParams[param]
  //     if (param === 'priceRange') {
  //       if (!value) continue
  //       const priceRange = h1(value)
  //       min_price = Number(priceRange[0])
  //       max_price = Number(priceRange[1])
  //     } else if (param === 'color') {
  //       if (!value) continue
  //       const colors = h1(value)
  //       variant_value = colors[colors.length - 1]
  //     } else if (param === 'availability') {
  //       if (!value) continue
  //       const temp = h1(value)
  //       temp.forEach((s, i) => {
  //         if (s === 'inStock') {
  //           available = true
  //         } else {
  //           available = false
  //         }
  //       })
  //     } else if (param === 'productType') {
  //       if (!value) continue
  //       product_type = value
  //     } else if (param === 'sortBy') {
  //       if (!value) continue
  //       if (value === 'bestSelling') {
  //         sort_key = 'BEST_SELLING'
  //       } else if (value === 'alphabeticallyAZ') {
  //         sort_key = 'TITLE'
  //       } else if (value === 'alphabeticallyZA') {
  //         sort_key = 'TITLE'
  //         reverse = true
  //       } else if (value === 'priceLowToHigh') {
  //         sort_key = 'PRICE'
  //       } else if (value === 'priceHighToLow') {
  //         sort_key = 'PRICE'
  //         reverse = true
  //       } else if (value === 'dateOldToNew') {
  //         sort_key = 'CREATED'
  //       } else if (value === 'dateNewToOld') {
  //         sort_key = 'CREATED'
  //         reverse = true
  //       }
  //     }
  //   }

  //   console.log({
  //     handle: params.id,
  //     reverse,
  //     sort_key,
  //     variant_value,
  //     variant_name,
  //     available,
  //     min_price,
  //     max_price,
  //     product_type,
  //   })
  //   return {
  //     handle: params.id,
  //     reverse,
  //     sort_key,
  //     variant_value,
  //     variant_name,
  //     available,
  //     min_price,
  //     max_price,
  //     product_type,
  //   }
  // }

  // const queryObject = collectionPageQueryObject(searchParams)
  const { sortBy, color, availability } = searchParams as {
    [key: string]: string;
  };
  const { sortKey, reverse } =
    sorting.find((item) => item.title === sortBy) || defaultSort;
  // console.log("Search Params", searchParams, availability);
  return (
    <div>
      <Suspense
        // key={
        //   sortKey +
        //   reverse +
        //   availability +
        // queryObject.available?.valueOf.toString() ||
        // queryObject.product_type ||
        // color +
        // queryObject.variant_name ||
        // queryObject.min_price ||
        // queryObject.max_price ||
        // queryObject.reverse?.valueOf.toString() ||
        // params.id
        // }
        fallback={
          <h1 className="h-screen grid place-items-center ">
            <LuLoader2 className=" h-10 w-10 animate-spin" />
          </h1>
        }
      >
        <SingleCategoryPage
          queryObject={{
            handle: params.id,
            reverse: reverse,
            sort_key: sortKey,
            variant_value: color,
            variant_name: "color",
            available: availability == "Out of stock" ? false : true,
            //     min_price,
            //     max_price,
            //     product_type,
          }}
        />
      </Suspense>
    </div>
  );
};
export default DynamicCategoryPage;
