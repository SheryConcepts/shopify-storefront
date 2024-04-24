import { convertStringToPascalCase } from '@/lib/utils'
import React, { useEffect, useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'

interface MyProps {
  heading: string
  subHeading: string
  handleUpdates: (value: string, op: 'push' | 'pop') => void
}

const Circle = ({ heading, subHeading, handleUpdates }: MyProps) => {
  const value = subHeading
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (show) {
      handleUpdates(value, 'push')
    } else {
      handleUpdates(value, 'pop')
    }
  }, [show])

  return (
    <div
      className='rounded-full w-6 h-6 bg-gray-300 flex justify-center items-center cursor-pointer'
      onClick={() => {
        setShow(!show)
      }}
    >
      {show ? <AiOutlineCheck /> : ''}
    </div>
  )
}

export default Circle
