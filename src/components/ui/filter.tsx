'use client'
import React from 'react'
import SubComponent from '@/components/ui/subComponent'
import SortBy from '@/components/views/sortBy'
import { getFilterVariantsNames } from '@/lib/helpers'
import { usePathname } from 'next/navigation'

const Filter = ({ variantNames }: { variantNames: string[] }) => {
  const pathname = usePathname()
  return (
    <div className='max-w-[250px] xl:w-[350px] w-full mx-auto  text-gray-600 max-md:w-screen max-md:max-w-full max-md:px-6'>
      {/*Wrapper*/}
      {pathname.includes('/search') ? (
        ''
      ) : (
        <SubComponent //heading 1
          heading='Availability'
          subHeading={['In stock', 'Out of stock']}
        />
      )}

      <SubComponent heading='Price' />
      {/*this one is for the price range*/}
      <SubComponent heading='Color' subHeading={variantNames} />
      {/* <SubComponent heading="Product type" subHeading={["Tote Bag"]} /> */}
      <SortBy
        heading='Sort by'
        subHeading={[
          'Best selling',
          'Alphabetically, A-Z',
          'Alphabetically, Z-A',
          'Price, low to high',
          'Price, high to low',
          'Date, old to new',
          'Date, new to old',
        ]}
      />
    </div>
  )
}

export default Filter
