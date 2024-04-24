'use client'

import { BiSearch } from "react-icons/bi";
import React from "react";

function Search() {
  return (    
  <div className="py-2 relative">
       <div className="flex-grow flex-col justify-center text-center">
         <div className="flex flex-col items-start py-2">
          <h2 className="text-3xl max-lg2:text-4xl mt-2 text-gray-700">
          FAQs
          </h2>
          <div className="w-10 h-[2px] bg-gray-700 mt-5"></div>
          </div>
          {/* Search Bar */}

           <div className='flex cursor-pointer items-center justify-between gap-1.5 text-gray-700 border-b-2 p-2 my-8 mx-1'>
              <input type="text" 
              className='focus:outline-none bg-transparent'
              placeholder='Search FAQs' />
              <BiSearch className="w-6 h-6 text-gray-700" />
          </div>
      </div>
  </div>
  )
}

export default Search;