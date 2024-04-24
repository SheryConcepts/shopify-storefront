'use client'
import { increaseItemQuantityBy1 } from '@/app/actions'
import { Cart } from '@/lib/shopify/types'
import { useCartStore } from '@/store/useCart'
import { useTransition } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

export default function IncreaseButton({
  lineId,
  variantId,
  quantity,
}: {
  quantity: number
  lineId: string
  variantId: string
}) {
  const [pending, startTransition] = useTransition()
  const { updateQuantity } = useCartStore()

  function handleIncrease() {
    startTransition(async () => {
      const res = await increaseItemQuantityBy1({
        variantId,
        lineId,
        quantity,
      })
      if (typeof res === 'string') console.error(res)
      let totalquantity = res as Cart
      updateQuantity(totalquantity.totalQuantity)
    })
  }
  {
    return (
      <button
        disabled={pending}
        onClick={handleIncrease}
        className={`cursor-pointer min-w-fit mx-2 ${
          pending ? 'opacity-40' : null
        }`}
      >
        <AiOutlinePlus />
      </button>
    )
  }
}
