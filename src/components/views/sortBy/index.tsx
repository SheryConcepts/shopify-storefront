'use client'
import React, { useCallback, useEffect, useState } from 'react'
import RadioCircle from './radioCircle'
import { usePushSearchParams } from '@/hooks'
import { convertStringToPascalCase } from '@/lib/utils'
import { AiOutlineCheck } from 'react-icons/ai'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

interface MyProps {
  heading: string
  subHeading: string[]
}

const SortBy = (props: MyProps) => {
  const [show, setShow] = useState(false)
  // const [selectedIndex, setSelectedIndex] = useState(-1); // Initialize with -1 (no selection)
  // const [firstRender, setFirstRender] = useState(true);
  // const [_, pushParams] = usePushSearchParams();
  // const name = convertStringToPascalCase(props.heading);
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      console.log('Params', params)
      if (searchParams.has(name)) {
        params.delete('sortBy')
        return params.toString()
      }
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )
  function handleClick() {
    setShow(!show)
  }

  // useEffect(() => {
  //   if (firstRender) {
  //     setFirstRender(false);
  //     return;
  //   }
  //   if (selectedIndex < 0) {
  //     pushParams([
  //       {
  //         name,
  //         value: convertStringToPascalCase(props.subHeading[selectedIndex]),
  //         op: "pop",
  //       },
  //     ]);
  //     return;
  //   }
  //   pushParams([
  //     {
  //       name,
  //       value: convertStringToPascalCase(props.subHeading[selectedIndex]),
  //       op: "push",
  //     },
  //   ]);
  // }, [selectedIndex]);

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
    transition: 'transform 0.3s ease, opacity 0.3s ease, height 0.3s ease',
  }
  const sortValue = searchParams.get('sortBy')

  return (
    <div className='flex flex-col border-b border-gray-300 max-md:pb-2'>
      <div className='flex justify-between'>
        <div className='mt-3'>{props.heading}</div>
        <div
          onClick={handleClick}
          className=' -mb-1 cursor-pointer text-3xl focus:rotate-180 delay-300 transition-all ease-in-out duration-500'
          style={divStyles}
        >
          {show ? '-' : '+'}
        </div>
      </div>

      <div className='ml-2 mt-1' style={dropdownStyles}>
        {props.subHeading?.map((item, index) => (
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
                router.push(pathname + '?' + createQueryString('sortBy', item))
              }}
            >
              <AiOutlineCheck
                className={`${
                  sortValue === item ? 'opacity-100' : 'opacity-0'
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

export default SortBy
