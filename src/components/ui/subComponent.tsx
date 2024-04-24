'use client'
import React, { useCallback, useEffect, useState } from 'react'
import Circle from '@/components/ui/circle'
import PriceRange from '@/components/views/priceRange'
import { usePushSearchParams } from '@/hooks'
import { convertStringToPascalCase } from '@/lib/utils'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { AiOutlineCheck } from 'react-icons/ai'

interface MyProps {
  heading: string
  subHeading?: string[] | null
}

const SubComponent5 = (props: MyProps) => {
  // console.log('Props', props)
  const [show, setShow] = useState(false)
  // const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  // let name: string
  // if (props.heading) {
  //   name = convertStringToPascalCase(props.heading)
  // }

  // function updateSelection(value: string, op: 'push' | 'pop') {
  //   if (op === 'push') {
  //     setSelectedOptions([...selectedOptions, value])
  //   } else {
  //     setSelectedOptions(selectedOptions.filter((s) => s !== value))
  //   }
  // }
  // const [_, pushParams] = usePushSearchParams()
  // useEffect(() => {
  //   // console.log(name)
  //   // console.log(_)
  //   console.log(selectedOptions)
  //   if (!name) return
  //   if (selectedOptions.length === 0) {
  //     pushParams([{ name, value: selectedOptions, op: 'pop' }])
  //     return
  //   }
  //   pushParams([{ name, value: selectedOptions, op: 'push' }])
  // }, [selectedOptions])

  function handleClick() {
    setShow(!show)
  }

  const divStyles = {
    cursor: 'pointer',
    fontSize: '1.5rem',
    transform: show ? 'rotate(0deg)' : 'rotate(180deg)',
    transition: 'all 0.3s ease',
  }
  const dropdownStyles = {
    transform: show ? 'scaleY(1)' : 'scaleY(0)',
    opacity: show ? '1' : '0',
    height: show ? 'auto' : '0',
    overflow: 'hidden',
    transformOrigin: 'top',
    transition: 'transform 0.3s ease, opacity 0.3s ease, height 0.3s ease', // Include both transform, opacity, and height properties in the transition
  }
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      console.log('Params', params)
      if (searchParams.has(name)) {
        params.delete(props.heading)
        params.set(name, value)

        return params.toString()
      }
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )
  const colorValue = searchParams.get('color')
  return (
    <div className='flex flex-col border-b border-gray-300 max-md:pb-2'>
      <div className='flex justify-between'>
        <div className='mt-3 text-base '>{props.heading}</div>
        <div
          onClick={handleClick}
          className=' -mb-1 cursor-pointer text-3xl focus:rotate-180 delay-300 transition-all ease-in-out duration-500'
          style={divStyles}
        >
          {show ? '-' : '+'}
        </div>
      </div>

      <div className='ml-2 mt-1' style={dropdownStyles}>
        {props.subHeading == null ? (
          <div className='-ml-2 -mt-4'>
            <PriceRange />
          </div>
        ) : (
          <div></div>
        )}

        {props.subHeading &&
          props.subHeading.map((item) => (
            <div className='flex my-2' key={item}>
              {/* <Circle
                handleUpdates={updateSelection}
                heading={props.heading}
                subHeading={item}
              /> */}
              {/* <input
                checked={searchParams.has('color', item)}
                type='checkbox'
                value={item}
                onClick={() => {
                  // <pathname>?sort=asc
                  router.push(pathname + '?' + createQueryString('color', item))
                }}
              /> */}
              <div
                className='rounded-full w-6 h-6 bg-gray-300 flex justify-center items-center cursor-pointer'
                onClick={() => {
                  // setShow(!show)
                  router.push(
                    pathname +
                      '?' +
                      createQueryString(props.heading.toLowerCase(), item)
                  )
                }}
              >
                <AiOutlineCheck
                  className={`${
                    colorValue === item ? 'opacity-100' : 'opacity-0'
                  } duration-500`}
                />
              </div>
              <span className='pl-3'>{item}</span>
            </div>
          ))}
      </div>
    </div>
  )
}

export default SubComponent5
