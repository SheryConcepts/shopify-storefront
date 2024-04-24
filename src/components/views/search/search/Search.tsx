import Filter from "@/components/ui/filter";
import SearchInput from "./SearchInput";
import SearchHeader from "./SearchHeader";
import SearchMobileFilter from "./SearchMobileFilter";
import { getProducts } from "@/lib/shopify";
import { ProductsGrid } from "./SearchProductsGrid";
import { getFilterVariantsNames } from "@/lib/helpers";
import addBlurredDataUrls from "@/components/utils/functions/getBase64";

export default async function Search({
  query,
  reverse,
  sort_key,
  searchValue,
}: {
  query: string;
  reverse: boolean;
  sort_key: string;
  searchValue: string;
}) {
  const res = await getProducts({
    query,
    reverse,
    sort_key,
  });
  const variantNames = await getFilterVariantsNames();
  const resultsText = res.length > 1 ? "results" : "result";
  // console.log('SEARCH RESULT', res)
  // const extractedColors: string[] = []
  // res.forEach((product) => {
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
    res?.map((product) => product.images[0].url)
  );
  return (
    <>
      {query ? (
        <p className="mb-4 mx-32">
          {res.length === 0
            ? "There are no products that match "
            : `Showing ${res.length} ${resultsText} for `}
          <span className="font-bold">&quot;{query}&quot;</span>
        </p>
      ) : null}
      <div className="mt-36 mb-32">
        <SearchHeader />

        <SearchInput searchQuery={searchValue} />
        {/* Products Grid */}
        {res.length > 0 && (
          <div>
            <div className="min-h-screen flex gap-5 mt-10 relative lg:px-20 px-5 items-start">
              <div className="p-5  max-md:hidden sticky top-5 ">
                <Filter variantNames={uniqueColors as string[]} />
              </div>
              <div
                className="verflow-scroll no-scrollbar w-full bg-white  pb-10  "
                style={{ scrollbarWidth: "none" }}
              >
                {/*Not: Here we need a component that renders a list of product, but we also need collection to which a product belongs to with the product.*/}
                <ProductsGrid
                  products={res}
                  placeholderImages={imagesWithBlur}
                />
              </div>
            </div>
            {/* <SearchMobileFilter variantNames={uniqueColors} /> */}
          </div>
        )}
        {res.length === 0 && (
          <div className="flex items-center justify-center mt-20 text-xl md:text-3xl lg:text-xl">
            No search results
          </div>
        )}
      </div>
    </>
  );
}
