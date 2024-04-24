'use client'

import { hyphenize } from '@/lib/utils'
import React, { useState } from 'react'

function QuestionLinks({ questionsSection }: { questionsSection: string[] }) {
  const [activeLink, setActiveLink] = useState<string | null>(null)

  const handleLinkClick = (id: string) => {
    setActiveLink(id === activeLink ? null : id)
  }

  return (
    <div className='mb-6'>
      {/* Question links */}
      <ul className='ml-16 mt-10 space-y-3 hidden md:block'>
        <li>
          <a
            href='#ordering'
            onClick={() => handleLinkClick('ordering')}
            className={`${
              activeLink === 'ordering' ? 'text-black' : 'text-gray-500'
            } hover:text-black transition-colors duration-300`}
          >
            Quick links
          </a>
        </li>
        {questionsSection.map((i) => (
          <li key={i}>
            <a
              href={`#${hyphenize(i)}`}
              onClick={() => handleLinkClick(i)}
              className={`${
                activeLink === i ? 'text-black' : 'text-gray-500'
              } hover:text-black transition-colors duration-300`}
            >
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QuestionLinks

// <li>
//   <a
//     href="#ordering"
//     onClick={() => handleLinkClick("ordering")}
//     className={`${activeLink === "ordering" ? "text-black" : "text-gray-500"
//       } hover:text-black transition-colors duration-300`}
//   >
//     Ordering
//   </a>
// </li>
// <li>
//   <a
//     href="#shipping"
//     onClick={() => handleLinkClick("shipping")}
//     className={`${activeLink === "shipping" ? "text-black" : "text-gray-500"
//       } hover:text-black transition-colors duration-300`}
//   >
//     Shipping
//   </a>
// </li>
// <li>
//   <a
//     href="#returns"
//     onClick={() => handleLinkClick("returns")}
//     className={`${activeLink === "returns" ? "text-black" : "text-gray-500"
//       } hover:text-black transition-colors duration-300`}
//   >
//     Returns & Exchanges
//   </a>
// </li>
// <li>
//   <a
//     href="#sustainability"
//     onClick={() => handleLinkClick("sustainability")}
//     className={`${activeLink === "sustainability" ? "text-black" : "text-gray-500"
//       } hover:text-black transition-colors duration-300`}
//   >
//     Sustainability
//   </a>
// </li>
//
