import Subscribe2 from "@/components/views/faqs/subscribe";
import Search from "@/components/views/search/search/Search";
import { Suspense } from "react";
import { LuLoader2 } from "react-icons/lu";
import { defaultSort, sorting } from "@/lib/constants";

function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const {
    query: searchValue,
    sortBy,
    color,
    availability,
    priceRange,
  } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    sorting.find((item) => item.title === sortBy) || defaultSort;

  const price = priceRange?.split(",");
  let query = `(${searchValue ? searchValue : ""}) AND (variants.price:>=${
    price && price[0] ? price[0] : 0
  } variants.price:<=${price && price[1] ? price[1] : 500}) AND (${
    color ? color : ""
  })`;
  // console.log('Query', query)
  // let query = {`(bag)   AND   (variants.price:>=0 variants.price:<=45) AND (Pink)`}
  return (
    <div>
      <Suspense
        // key={searchValue}
        // key={
        //   sortKey +
        //   reverse +
        //   priceRange +
          // availability +
          // queryObject.available?.valueOf.toString() ||
          // queryObject.product_type ||
          // color +
          // queryObject.variant_name ||
          // queryObject.min_price ||
          // queryObject.max_price ||
          // queryObject.reverse?.valueOf.toString() ||
          // searchValue
        // }
        fallback={
          <h1 className="h-screen grid place-items-center ">
            <LuLoader2 className=" h-10 w-10 animate-spin" />
          </h1>
        }
      >
        <Search
          query={query}
          reverse={reverse}
          sort_key={sortKey}
          searchValue={searchValue}
        />
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

export default SearchPage;
