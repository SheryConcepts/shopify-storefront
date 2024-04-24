import { iconComponent } from '@/components/utils/collectionsdata'
import { CarouselProps } from '@/interface'
import { BsBagCheck, BsHeart } from 'react-icons/bs'
import { IoExtensionPuzzleOutline, IoLeafOutline } from 'react-icons/io5'
import AddToCart from './AddToCart'
import ProductDetailFaq from './ProductDetailFaq'
import { GrStar } from 'react-icons/gr'
import AverageRating from '@/components/utils/functions/averageRating'
import { Product } from '@/lib/shopify/types'

type Props = {
  // data: CarouselProps[];
  data: Product | undefined
}

// function AverageRating({ reviews }: { reviews: any }) {
//   // Calculate average rating
//   const avgRating =
//     reviews.reduce((acc: any, review: any) => acc + review.rating, 0) /
//     reviews.length;

//   return (
//     <div className="flex">
//       {[...Array(5)].map((_, i) => (
//         <GrStar
//           key={i}
//           color={i < avgRating ? "#EF9A9A" : "#C0C0C0"}
//           size="20px"
//         />
//       ))}
//     </div>
//   );
// }

const ProdDescription = ({ data }: Props) => {
  if (!data) return null
  // console.log('PRODUCT DATA', data)
  // Note: for the moment we are not using ratings from backend.
  // const reviews = [Array.from({ length: Math.floor(Math.random() * 13) })].map(
  //   (i) => {
  //     return {
  //       rating: Math.floor(Math.random() * 5),
  //     };
  //   },
  // );
  const disPrice = 10
  return (
    data && (
      <div className='relative items-start h-full flex'>
        <div className='flex flex-col sticky top-14 gap-y-2 my-8 px-6 md:px-16 md:mt-36 md:pt-10'>
          {/* {data?.map((item) => ( */}
          <div key={data.id}>
            <div className='gap-y-0.5'>
              {/* <p className='text-sm text-gray-400'>
                GraceGrip
               
              </p> */}
              <h2 className='text-2xl text-gray-700 -ml-0.5'>{data.title}</h2>
            </div>

            {
              <p className='py-1 flex text-lg gap-x-2 text-gray-800'>
                <span
                  className={`text-[#EF9A9A] line-through ${
                    disPrice ? 'block' : 'hidden'
                  } `}
                >
                  ${disPrice}
                </span>
                ${data.priceRange.minVariantPrice.amount}
              </p>
            }
            {/* <div className="flex gap-x-4 items-center">
            {
              <div className="flex">
                <AverageRating reviews={reviews} />
              </div>
            }
            {
              <p className="text-sm">
                {reviews?.length} review
                {reviews.length > 1 && "s"}
              </p>
            }
          </div> */}
          </div>
          {/* ))}  */}

          {<AddToCart data={data} />}

          {/* <div className="z-10 md:sticky md:top-0 md:mb-36"> */}
          <div className='z-10 md:sticky md:top-0'>
            <div className='pt-10 flex justify-around text-gray-700'>
              <div className='flex flex-col items-center'>
                <BsBagCheck className='text-3xl mb-2' />
                <p className='text-sm font-light'>Durable</p>
              </div>
              <div className='flex flex-col items-center'>
                <IoLeafOutline className='text-3xl mb-2' />
                <p className='text-sm font-light'>100% Vegan</p>
              </div>
              <div className='flex flex-col items-center'>
                <BsHeart className='text-3xl mb-2' />
                <p className='text-sm font-light text-center'>
                  Stain resistant
                </p>
              </div>
              <div className='flex flex-col items-center'>
                <IoExtensionPuzzleOutline className='text-3xl mb-2' />
                <p className='text-sm font-light'>Cruelty-free</p>
              </div>
            </div>
            {/* faq */}
            {
              // <ProductDetailFaq data={data} />
            }
          </div>
        </div>
      </div>
    )
  )
}
export default ProdDescription
