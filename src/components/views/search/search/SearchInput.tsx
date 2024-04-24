'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import { useCallback, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { useRouter } from 'next/navigation'

export default function SearchInput({ searchQuery }: { searchQuery?: string }) {
  const [searchValue, setSearchValue] = useState(searchQuery || '')
  const router = useRouter()
  const searchParams = useSearchParams()!
  const pathname = usePathname()
  // function handleSubmit() {
  //   router.push(`/search?query=${searchValue ?? ''}`)
  // }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      router.push(pathname + '?' + createQueryString('query', searchValue))
    }
  }

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )
  return (
    <div className='flex flex-col items-center my-16'>
      <div
        className={`flex justify-center w-3/4 lg:w-1/3 
      
      relative after:absolute after:content-[''] after:-bottom-[2px] after:left-0 after:h-[2px] after:bg-[#5e5c5c] after:transition-[width] after:w-full after:mt-2 after:duration-500`}
      >
        <input
          type='text'
          id='searchInput'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus={true}
          className='w-full text-xl md:text-2xl lg:text-xl rounded text-gray-800 placeholder-gray-950 focus:outline-none py-2'
          placeholder='Type to search'
        />
        {/* Arrow Button */}
        <button
          onClick={() =>
            router.push(
              pathname + '?' + createQueryString('query', searchValue)
            )
          }
        >
          <BsArrowRight className='text-gray-800 h-8 w-8 md:h-10 md:w-10 lg:h-8 lg:w-8' />
        </button>
      </div>
      {/* Underline */}
      {/* <div className='w-3/4 lg:w-1/3 h-[2px] bg-gray-800 mt-5'></div> */}
    </div>
  )
}
