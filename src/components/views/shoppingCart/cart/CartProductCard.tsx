import Image from 'next/image'
import { Cart } from '@/lib/shopify/types'
import DecreaseButton from './DecreaseButton'
import IncreaseButton from './IncreaseButton'
import RemoveButton from './RemoveButton'

export default function CartProductCard({ data }: { data: Cart }) {
  return (
    <>
      {/* for screens smaller than medium */}
      <div className='flex md:hidden flex-col gap-y-6'>
        {data.lines.map((prod, i) => {
          //NOTE: Assuming that there will only be 1 selected option ('variant' in our case.)
          // const selectedVariant = prod.merchandise.selectedOptions[0].value
          // const merchandisePrice = prod.merchandise.product.variants.edges.find(
          //   (i) => i.node.title === selectedVariant
          // )?.node.price
          const variantImage = prod.merchandise.product.variants.edges.find(
            (i) => i.node.title === prod.merchandise.title
          )?.node.image.url
          return (
            <div className='flex flex-col' key={i}>
              <div className='flex items-start'>
                <Image
                  src={variantImage as string}
                  alt='prod img'
                  width={70}
                  height={70}
                />
                <div className='space-y-1 pl-5'>
                  <p className='text-gray-700'>
                    {prod.merchandise.product.title}
                  </p>
                  {/*TODO: Need variant selected here */}
                  {/* <p className='text-gray-500'>{prod.merchandise.title}</p>
                  <p className='text-gray-500'>${merchandisePrice?.amount}</p> */}
                  <div className='flex items-center pt-2'>
                    <div className='w-fit cursor-auto px-5 py-3 flex md:justify-between items-center gap-x-6 border border-gray-400 text-gray-700 rounded-md'>
                      <DecreaseButton
                        lineId={prod.id}
                        variantId={prod.merchandise.id}
                        quantity={prod.quantity}
                      />
                      <p>{prod.quantity}</p>
                      <IncreaseButton
                        lineId={prod.id}
                        variantId={prod.merchandise.id}
                        quantity={prod.quantity}
                      />
                    </div>
                    <RemoveButton lineId={prod.id} />
                  </div>
                  <p className='pt-2 text-lg'>{prod.cost.totalAmount.amount}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {/* for medium or larger screens */}
      <div className='hidden md:flex flex-col gap-y-6'>
        <div className='flex border-b-2'>
          <div className='w-[50%] text-left'>
            <p>Product</p>
          </div>
          <div className='w-[15%] text-center'>
            <p>Price</p>
          </div>
          <div className='w-[20%] text-center'>
            <p>Quantity</p>
          </div>
          <div className='w-[15%] text-right'>
            <p>Total</p>
          </div>
        </div>
        {data.lines.map((prod, i) => {
          //NOTE: Assuming that there will only be 1 selected option ('variant' in our case.)
          const selectedVariant = prod.merchandise.selectedOptions[0].value
          const merchandisePrice = prod.merchandise.product.variants.edges.find(
            (i) => i.node.title === selectedVariant
          )?.node.price
          const variantImage = prod.merchandise.product.variants.edges.find(
            (i) => i.node.title === prod.merchandise.title
          )?.node.image.url
          return (
            <div className='flex items-start' key={i}>
              <div className='w-[50%] text-left flex items-start'>
                <Image
                  src={variantImage as string}
                  alt='prod img'
                  width={70}
                  height={70}
                />
                <div className='space-y-1 pl-5'>
                  <p className='text-gray-700'>
                    {prod.merchandise.product.title}
                  </p>
                  <p className='text-gray-500'>{prod.merchandise.title}</p>
                </div>
              </div>
              <div className='w-[15%] text-center'>
                <p>${merchandisePrice?.amount}</p>
              </div>
              <div className='w-[20%] flex flex-col items-center'>
                <div className='w-fit cursor-auto px-5 py-3 flex md:justify-between items-center gap-x-6 border border-gray-400 text-gray-700 rounded-md'>
                  <DecreaseButton
                    lineId={prod.id}
                    variantId={prod.merchandise.id}
                    quantity={prod.quantity}
                  />
                  <p>{prod.quantity}</p>
                  <IncreaseButton
                    lineId={prod.id}
                    variantId={prod.merchandise.id}
                    quantity={prod.quantity}
                  />
                </div>
                <RemoveButton lineId={prod.id} />
              </div>
              <div className='w-[15%] text-right'>
                <p>${prod.cost.totalAmount.amount}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
