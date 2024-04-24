'use client'
import { useEffect, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { All_Collections_Data } from '@/components/utils/collectionsdata'
import { Collection, Product } from '@/interface'
import CollectionGrid from '../../productList'
import Filter from '@/components/ui/filter'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'

function Search() {
  const router = useRouter()
  const pathname = usePathname()
  const urlQuery = useSearchParams().get('query')

  // UI States
  const [show, setShow] = useState(false)
  const [searchValue, setSearchValue] = useState(urlQuery || '')
  const [searchResults, setSearchResults] = useState<
    {
      category: string
      product: Product
    }[]
  >([])
  const [searchPerformed, setSearchPerormed] = useState(false)
  const placeholderText = 'Type to search'

  useEffect(() => {
    if (urlQuery) {
      handleSubmit(urlQuery as string)
      setSearchValue(urlQuery as string)
    } else {
      // Clear the search results and load empty page if the URL query is empty or null
      setSearchResults([])
      setSearchValue('')
      setSearchPerormed(false)
    }
  }, [urlQuery])

  // Function to search products
  const handleSubmit = (inputValue: string) => {
    const url = `${pathname}?query=${inputValue}`
    router.replace(url)
    setSearchResults([])

    // Do not perform search for empty string
    if (inputValue.trim() !== '') {
      // Empty array to store filtered products
      const filteredProducts: {
        category: string
        product: Product
      }[] = []
      // Filter products
      All_Collections_Data.forEach((category: Collection) => {
        const category_name = category.id
        category.products.forEach((product: Product) => {
          if (product.name.toLowerCase().includes(inputValue.toLowerCase())) {
            filteredProducts.push({
              category: category_name,
              product: product,
            })
          }
        })
      })

      setSearchResults(filteredProducts)
      setSearchPerormed(true)
    }
  }

  // Listen for the Enter key (key code 13)
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit(searchValue)
    }
  }

  // Handle input change event
  const handleInputChange = (event: any) => {
    setSearchValue(event.target.value)
  }

  // Function for filter button
  function handleClick() {
    setShow(!show)
  }
  const filterbutton = show ? 'CLOSE FILTERS' : 'SHOW FILTERS'

  return (
    <div className='mt-36 mb-32'>
      {/* Header */}
      <div>
        <h1 className='text-center md:text-4xl text-3xl'>Search</h1>
      </div>
      {/* Underline */}
      <div className='flex justify-center'>
        <div className='h-[3px] w-9 bg-gray-900 mt-4'></div>
      </div>
      {/* Input */}
      <div className='flex flex-col items-center my-16'>
        <div className='flex justify-center w-3/4 lg:w-1/3'>
          <input
            type='text'
            id='searchInput'
            value={searchValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            autoFocus={true}
            className='w-full text-xl md:text-2xl lg:text-xl rounded text-gray-800 placeholder-gray-950 focus:outline-none'
            placeholder={placeholderText}
          />
          {/* Arrow Button */}
          <button onClick={() => handleSubmit(searchValue)}>
            <BsArrowRight className='text-gray-800 h-8 w-8 md:h-10 md:w-10 lg:h-8 lg:w-8' />
          </button>
        </div>
        {/* Underline */}
        <div className='w-3/4 lg:w-1/3 h-[2px] bg-gray-800 mt-5'></div>
      </div>

      {/* Products Grid */}
      {searchPerformed && searchResults.length > 0 && (
        <div>
          <div className='min-h-screen grid grid-cols-[1fr,5fr] gap-5 mt-10 relative'>
            <div className='p-5 max-h-[800px] max-md:hidden'>
              {/* <Filter /> */}
            </div>
            <div
              className='no-scrollbar max-md:w-screen bg-[#f7f7f7ea] shadow-xl mx-auto pb-10  '
              style={{ scrollbarWidth: 'none' }}
            >
              {/*Note/Frontend/Backend: Reusing the collection grid will be a lot of work because, it is being used mutlitple places both places are assuming a different interface. So rather then adjusting its code. I suggest copy the code and create a different component for search page.*/}
              {/* <CollectionGrid results={searchResults} /> */}
            </div>
          </div>

          <div
            className={`${
              show ? 'block' : 'hidden'
            } absolute bg-white w-full h-full top-0 md:hidden `}
          >
            <div className='fixed h-screen overflow-scroll pb-36 bg-white  '>
              {/* <Filter /> */}
            </div>
          </div>
          <div
            className='w-screen h-20 bg-black text-white bottom-0 text-sm fixed flex justify-center items-center md:hidden'
            onClick={handleClick}
          >
            {filterbutton}
          </div>
        </div>
      )}
      {searchPerformed && searchResults.length === 0 && (
        <div className='flex items-center justify-center mt-20 text-xl md:text-3xl lg:text-xl'>
          No search results
        </div>
      )}
    </div>
  )
}

export default Search
