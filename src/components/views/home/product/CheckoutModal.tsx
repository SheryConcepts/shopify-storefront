'use client'

import { getCheckoutData } from '@/app/actions'
import { Cart, CartItem, Product } from '@/lib/shopify/types'
import { useEffect, useState } from 'react'
import { MdOutlineDone } from 'react-icons/md'
import { IoIosClose } from 'react-icons/io'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function CheckoutModal({
  setIsModalOpen,
  data,
}: {
  setIsModalOpen: (v: boolean) => void
  data: Cart | null
}) {
  // const [data, setData] = useState<Array<CartItem["merchandise"]>>([]);

  // useEffect(() => {
  //   async function operation() {
  //     const data = await getCheckoutData();
  //     if (typeof data === "string" || !data) throw new Error(data);
  //     setData(data.lines.map((i) => i.merchandise));
  //   }
  //   operation();
  // }, []);
  console.log('Cart Data', data)

  const disPrice = 10
  const router = useRouter()
  const lastItemPurchased = data?.lines[data.lines.length - 1]
  const variantImage =
    lastItemPurchased?.merchandise.product.variants.edges.find(
      (i) => i.node.title === lastItemPurchased?.merchandise.title
    )?.node.image.url
  return (
    <div
      onClick={() => setIsModalOpen(false)}
      className='fixed inset-0 flex flex-col top-0 items-start justify-end md:p-4 bg-black bg-opacity-50 w-full h-full'
      style={{ zIndex: 9999 }}
    >
      {/* {data?.lines?.map((item) => { */}
      {/* console.dir(item, { depth: null }) */}

      <div
        // key={item.merchandise.title}
        onClick={(e) => e.stopPropagation()}
        className='m-4 p-6 bg-[#423F3F] rounded text-white relative w-full md:w-fit'
      >
        <button
          onClick={() => setIsModalOpen(false)}
          className='absolute right-4 top-4 text-white text-5xl'
        >
          <IoIosClose />
        </button>
        <div className='flex items-center'>
          <MdOutlineDone className='text-2xl' />
          <p className='px-2'>Added to cart</p>
        </div>
        <div className='flex items-center pt-5'>
          <Image
            src={variantImage as string}
            alt='selectedProduct'
            width={80}
            height={80}
          />
          <div className='space-y-1 pl-5'>
            <p className='text-lg'>
              {lastItemPurchased?.merchandise.product.title}
            </p>
            <p className='flex'>
              <del
                className={`text-gray-300 ${
                  disPrice ? 'block' : 'hidden'
                } pr-3`}
              >
                ${disPrice}
              </del>
              $
              {
                lastItemPurchased?.merchandise.product.priceRange
                  .minVariantPrice.amount
              }
            </p>
            <p className='text-gray-300'>
              Color:{' '}
              {lastItemPurchased?.merchandise.selectedOptions[0].value.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
      {/* ) */}
      {/* })} */}
      <div className='flex flex-col md:flex-row gap-x-3 gap-y-5 pt-8'>
        <Link
          href={'/cart'}
          className='text-sm px-10 py-4 border border-black bg-white text-black rounded-sm hover:bg-black hover:text-white'
        >
          VIEW CART
        </Link>
        <button
          onClick={() => router.push(data?.checkoutUrl as string)}
          className='text-sm px-10 py-4 border border-black bg-black text-white rounded-sm hover:bg-white hover:text-gray-700'
        >
          CHECKOUT
        </button>
      </div>
    </div>
  )
}
