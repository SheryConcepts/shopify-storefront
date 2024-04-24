'use client'
import { decreaseItemQuantityBy1 } from '@/app/actions'
import { Cart } from '@/lib/shopify/types'
import { useCartStore } from '@/store/useCart'
import { useTransition } from 'react'
import { AiOutlineMinus, AiOutlineLoading } from 'react-icons/ai'

export default function DecreaseButton({
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

  function handleDecrease() {
    console.log('decrease button clicked')
    startTransition(async () => {
      const res = await decreaseItemQuantityBy1({
        variantId,
        lineId,
        quantity,
      })
      if (typeof res === 'string') console.error(res)
      console.log('Decrement Res', res)
      let totalquantity = res as Cart
      updateQuantity(totalquantity?.totalQuantity)
    })
  }
  {
    return (
      <AiOutlineMinus
        onClick={handleDecrease}
        className={`cursor-pointer min-w-fit mx-2 ${
          pending ? 'opacity-40' : null
        }`}
      />
    )
  }
}
