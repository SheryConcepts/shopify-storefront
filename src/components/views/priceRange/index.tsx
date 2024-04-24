'use client'
import React, { useEffect, useState, useCallback } from 'react'
import PriceSlider from '../priceSlider'
import { usePushSearchParams } from '@/hooks'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebounce } from 'use-debounce'
const PriceRange = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!
  const price = searchParams.get('priceRange')?.split(',')

  const [priceRange, setPriceRange] = useState([
    price ? (Number(price[0]) ? Number(price[0]) : 0) : 0,
    price ? (Number(price[1]) ? Number(price[1]) : 500) : 500,
  ])
  const [debouncedValue] = useDebounce(priceRange, 1000)
  // we are using this truthy value to avoid pushing route during frist render,
  // we want to push route only when user changes value
  // if you want to change default values of slider also change the values below
  const avoidPush = priceRange[0] === 0 && priceRange[1] === 1000

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      console.log('Params', params)
      // if (searchParams.has(name, value)) {
      //   params.delete(props.heading)
      //   return params.toString()
      // }
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )
  const handlePriceChange = (value: any) => {
    setPriceRange(value)
  }

  const handleMinInputChange = (e: any) => {
    const minValue = parseInt(e.target.value)
    setPriceRange([minValue, priceRange[1]])
  }

  const handleMaxInputChange = (e: any) => {
    const maxValue = parseInt(e.target.value)
    setPriceRange([priceRange[0], maxValue])
  }

  useEffect(() => {
    if (avoidPush) return
    router.push(
      pathname +
        '?' +
        createQueryString('priceRange', `${priceRange[0]},${priceRange[1]}`)
    )
  }, [debouncedValue])

  return (
    <div className='mx-auto py-8 flex flex-col  items-center'>
      <div className='flex space-x-4 my-4'>
        <input
          type='number'
          value={priceRange[0]}
          onChange={handleMinInputChange}
          className='w-24 h-12 px-2 bg-gray-100 text-black'
        />
        <span className='flex items-center'>-</span>
        <input
          type='number'
          value={priceRange[1]}
          onChange={handleMaxInputChange}
          className='w-24 h-12 px-2  bg-gray-100 text-black'
        />
      </div>
      <div className='mx-auto'>
        <PriceSlider
          minValue={0}
          maxValue={500} // Change this to your desired max price value
          value={priceRange}
          onChange={handlePriceChange}
        />
      </div>
    </div>
  )
}
export default PriceRange
