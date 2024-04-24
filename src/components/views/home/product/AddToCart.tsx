'use client'
import { AiOutlineMinus } from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai'
import { useTransition, useEffect, useState, useRef } from 'react'
import { FaCheck } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import ProductAvailability from './ProductAvailability'
import { Cart, Product, ProductVariant } from '@/lib/shopify/types'
import { createCart } from '@/lib/shopify'
import { addItem } from '@/app/actions'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import CheckoutModal from './CheckoutModal'
import { createUrl } from '@/lib/utils'
import { useCartStore } from '@/store/useCart'

type Props = {
  // data: CarouselProps[];
  data: Product
}

const AddToCart = ({ data }: Props) => {
  // for the timebeing, i'm using this sizes object as mock data
  // let sizes = {
  //   compact: {
  //     stock: 14,
  //   },
  //   midi: {
  //     stock: 10,
  //   },
  //   grande: {
  //     stock: 5,
  //   },
  // };
  // type Sizes = {
  //   [id: string]: {
  //     stock: number
  //   }
  // }
  // let variant = data!.variants.reduce((acc: Sizes, curr) => {
  //   acc[curr.title] = {
  //     stock: Math.floor(Math.random() * 14),
  //   }
  //   return acc
  // }, {})
  // let maxStock = Math.max(...Object.values(variant).map((size) => size.stock))
  // const variantsNames = Object.keys(variant)

  // const [selectedVariant, setSelectedVariant] = useState<string>(
  //   variantsNames[0]
  // )
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()
  const defaultVariantId =
    data?.variants.length === 1 ? data.variants[0]?.id : undefined
  const variant = data?.variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === searchParams.get(option.name.toLowerCase())
    )
  )
  const selectedVariantId = variant?.id || defaultVariantId
  // let availableStock = variant![selectedVariant].stock
  const [count, setCount] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [cartData, setcartData] = useState<Cart | null>(null)
  const { updateQuantity } = useCartStore()
  // const [cartButtonText, setCartButtonText] = useState('ADD TO CART')

  // const ref = useRef<Cart>()
  // const [lineItems, setLineItems] = useState()

  // const getSelectedClass = (size: string) =>
  //   selectedVariant === size && 'border-b-2 border-gray-700 pb-0.5'

  // const getCartButtonClass = () =>
  //   cartButtonText === 'ADD TO CART'
  //     ? 'bg-white text-gray-700'
  //     : 'bg-black text-white opacity-70'

  const addToCart = () => {
    if (!selectedVariantId) return
    startTransition(async () => {
      console.log(selectedVariantId, count)
      const res = await addItem(selectedVariantId, count)
      console.log('RES XXXXXX', res)
      if (typeof res === 'string') {
        alert(res.toString())
        // Trigger the error boundary in the root error.js
        // throw new Error(error.toString())
      }
      // console.log(res)
      setcartData(res as Cart)

      setIsModalOpen(true)
      let quantity = res as Cart
      updateQuantity(quantity.totalQuantity)
      // router.refresh()
    })
    // startTransition(async () => {
    //   let response
    //   response = await addItem(
    //     data?.variants.find((v) => v.title === selectedVariant)?.id,
    //     count
    //   )
    //   console.log(response)
    //   if (typeof response === 'string') {
    //     throw new Error(response.toString())
    //   } else {
    //     ref.current = response as Cart
    //   }
    //   setIsModalOpen(true)

    // })
  }

  // function handleCheckout() {
  //   router.push(ref.current?.checkoutUrl!)
  // }

  // useEffect(() => {
  //   count > availableStock && setCount(availableStock);
  // }, [selectedVariant, availableStock, count]);
  // useEffect(() => {
  // }, []);
  console.log('Rendered', isPending)
  return (
    <>
      <p className='text-sm text-gray-700 pt-7 font-medium'>
        {data.options[0].name}
      </p>
      <div className='flex flex-wrap gap-y-2 gap-x-10 text-gray-500 text-sm'>
        {data.variants.map((i, ind) => (
          <button
            key={ind}
            // className={`${getSelectedClass('compact')} cursor-pointer`}
            onClick={() => {
              let optionNameLowerCase = data.options[0].name.toLowerCase()
              let optionSearchParams = new URLSearchParams(
                searchParams.toString()
              )

              // Update the option params using the current option to reflect how the url *would* change,
              // if the option was clicked.
              optionSearchParams.set(optionNameLowerCase, i.title)
              let optionUrl = createUrl(pathname, optionSearchParams)
              router.replace(optionUrl, { scroll: false })
            }}
            className={` relative after:absolute after:content-[''] after:-bottom-[2px] after:left-0 after:h-[2px] after:bg-[#5e5c5c] after:transition-[width] after:hover:w-full after:duration-500${
              searchParams.get(data.options[0].name.toLowerCase()) === i.title
                ? '  after:w-full '
                : ' after:w-0  '
            } `}
          >
            {i.title.toUpperCase()}
          </button>
        ))}
      </div>
      {/* <div className='pt-5 pb-8'>
        <p className='text-sm pb-1'>{availableStock} in stock</p>
        <div className='w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-600'>
          <div
            className='bg-[#EF9A9A] h-1.5 rounded-full'
            style={{
              width: `${(availableStock / (maxStock + 5)) * 100}%`,
            }}
          ></div>
        </div>
      </div> */}

      <div className='pt-5 flex gap-x-3 pb-3 md:pb-6'>
        <button className='md:w-full cursor-auto px-5 py-3 flex md:justify-between items-center gap-x-6 border border-gray-400 text-gray-700 rounded-md'>
          <AiOutlineMinus
            className='cursor-pointer min-w-fit mx-2'
            onClick={() => {
              if (count > 1) {
                setCount(count - 1)
              }
            }}
          />
          <p>{count}</p>
          <AiOutlinePlus
            className='cursor-pointer min-w-fit mx-2'
            onClick={() => {
              setCount(count + 1)
              // if (count < availableStock) {
              //   setCount(count + 1)
              // }
            }}
          />
        </button>
        {/* <button
          className={`md:hidden w-full border border-black text-sm  rounded-md hover:bg-black hover:text-white`}
          onClick={() => addToCart()}
        >
          ADD TO CART
        </button> */}
      </div>
      <button
        disabled={isPending || !selectedVariantId}
        className={` w-full px-5 py-4 border border-black text-sm disabled:cursor-not-allowed rounded-md hover:bg-black hover:text-white`}
        onClick={() => addToCart()}
      >
        {isPending ? 'ADDING ITEM TO CART' : 'ADD TO CART'}
      </button>

      {/* <div className='hidden md:flex gap-x-3 pb-2'>
        <button
          className={`w-full px-5 py-4 border border-black text-sm rounded-md hover:bg-black hover:text-white `}
          onClick={() => addToCart()}
        >
          BUY IT NOW
        </button>
      </div> */}

      {/* <button
        className={`w-full text-sm px-5 py-4 border border-black bg-black text-white rounded-md hover:bg-white hover:text-gray-700 ${
          cartButtonText == 'ADDING' && 'opacity-70'
        }`}
      >
        BUY IT NOW
      </button> */}
      {/* rendering product available component only if product available */}
      {/* {data?.map((item) => (  */}
      {/* <div key={data.id}>
        {data.availableForSale ? (
          <div className='flex items-center gap-2 mt-4'>
            <RxCross2 className='text-lg text-red-600' />
            <p>
              Pickup currently unavailable at{' '}
              <span className='font-bold'>Ottawa Warehouse</span>
            </p>
          </div>
        ) : (
          <div className='flex gap-x-4 pt-8'>
            <div>
              <FaCheck className='text-lg text-green-700 mt-1' />
            </div>
            <div className='text-gray-700'>
              <p className='text-sm font-normal'>
                Pickup available at{' '}
                <span className='font-medium'>Ottawa Warehouse</span>
              </p>
              <p className='text-xs pt-1'>Usually ready in 24 hours</p>
              <ProductAvailability selectSize={selectedVariant} data={data} />
            </div>
          </div>
        )}
      </div> */}
      {isModalOpen && (
        <CheckoutModal setIsModalOpen={setIsModalOpen} data={cartData} />
      )}
    </>
  )
}

export default AddToCart
