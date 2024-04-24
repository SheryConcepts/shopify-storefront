'use client'

import { removeItem } from '@/app/actions'
import { Cart } from '@/lib/shopify/types'
import { useCartStore } from '@/store/useCart'
import { useTransition } from 'react'

export default function RemoveButton({ lineId }: { lineId: string }) {
  const [pending, startTransition] = useTransition()
  const { updateQuantity } = useCartStore()

  function handleRemove() {
    startTransition(async () => {
      const res = await removeItem(lineId)
      if (typeof res === 'string') console.error(res)
      let totalquantity = res as Cart
      updateQuantity(totalquantity.totalQuantity)
    })
  }
  return (
    <p
      onClick={handleRemove}
      className={`${
        pending && 'opacity-40'
      } text-xs mx-3 text-gray-400 pt-2 border-b border-gray-400 cursor-pointer`}
    >
      Remove
    </p>
  )
}
