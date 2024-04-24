import { All_Collections_Data } from "@/components/utils/collectionsdata";
import MoreWays from "@/components/views/home/moreways";
import ProdDescription from "@/components/views/home/product/ProdDescription";
import ProductImages from "@/components/views/home/product/ProductImages";
import { Collection, Product } from "@/interface";
import { getProduct } from "@/lib/shopify";
import { notFound, usePathname } from "next/navigation";
import { LuLoader2 } from "react-icons/lu";
import { Suspense } from "react";
const CarouselDetailPage = async ({
  params,
}: {
  params: { prod_id: string };
}) => {
  // const pathname = usePathname();

  //   const newArray = allCatergoriesMergeArray.filter((item) => item.id === params.id);
  //   const pathname = usePathname();

  // useparams
  // const category_name = pathname.split("/")[2];
  // const category: Collection | undefined = All_Collections_Data.find(
  //   (item) => item.id === category_name,
  // );
  // // console.log("category---"+category)
  // const product: Product | undefined = category?.products.find(
  //   (prod) => `${prod.id}` === params.prod_id,
  // );
  // console.log("product---"+product)
  const product = await getProduct(params.prod_id);
  // console.dir(product, { depth: null })
  if (!product) return notFound();
  const imageData = product.images.map((i, ind) => {
    return { img: i.url, id: ind };
  });
  return (
    <>
      <div className="w-full flex flex-col md:flex-row ">
        <div className="md:w-7/12 xl:w-2/3">
          {/* Product detail  images Component */}
          <Suspense
            fallback={
              <h1 className="h-screen grid place-items-center ">
                <LuLoader2 className=" h-10 w-10 animate-spin" />
              </h1>
            }
          >
            <ProductImages data={imageData} />
          </Suspense>
        </div>
        <div className="md:w-5/12 xl:1/3 ">
          {/* Product detail  description Component */}
          {/*
          TODO: product description needed to be handled by backend
           * <ProdDescription data={product} />
           */}
          <Suspense
            fallback={
              <h1 className="h-screen grid place-items-center ">
                <LuLoader2 className=" h-10 w-10 animate-spin" />
              </h1>
            }
          >
            <ProdDescription data={product} />
          </Suspense>
        </div>
      </div>
      <div className="flex flex-col items-center py-10 md:pt-36 text-gray-700 ">
        <h2 className="text-4xl text-center w-2/3 md:w-7/12">
          It&apos;s Great To Have A Great Bag
        </h2>
        <p className="w-10 h-1 bg-gray-700 mb-10 mt-5 md:mt-3"></p>
        <p className="w-2/3 md:w-7/12 text-center">
          All our bags are stain & water resistant. They look great, wear great
          and will beautifully complement your life & style.
        </p>
      </div>
      <Suspense
        fallback={
          <h1 className="h-screen grid place-items-center ">
            <LuLoader2 className=" h-10 w-10 animate-spin" />
          </h1>
        }
      >
        <MoreWays />
      </Suspense>
    </>
  );
};
export default CarouselDetailPage;
