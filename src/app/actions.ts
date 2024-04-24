'use server'

import {
  addToCart,
  createCart,
  getCart,
  removeFromCart,
  updateCart,
} from '@/lib/shopify'
import { Cart } from '@/lib/shopify/types'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

export const addItem = async (
  variantId: string | undefined,
  quantity: number
): Promise<String | undefined | Cart> => {
  let cartId = cookies().get('cartId')?.value
  let cart

  if (cartId) {
    cart = await getCart(cartId)
  }

  if (!cartId || !cart) {
    cart = await createCart()
    cartId = cart.id
    cookies().set('cartId', cartId)
  }

  if (!variantId) {
    return 'Missing product variant ID'
  }

  try {
    const res = await addToCart(cartId, [
      { merchandiseId: variantId, quantity: quantity },
    ])
    console.log('RESponse Server Action', res)
    revalidatePath('/cart')
    return res
  } catch (e) {
    return 'Error adding item to cart'
  }
}
// export const addItem = async (
//   variantId: string | undefined,
//   quantity: number,
// ): Promise<String | Cart> => {
//   let cartId = cookies().get("cartId")?.value;
//   let cart;

//   if (cartId) {
//     cart = await getCart(cartId);
//   }

//   if (!cartId || !cart) {
//     cart = await createCart();
//     cartId = cart.id;
//     cookies().set("cartId", cartId);
//   }

//   if (!variantId) {
//     return "Missing product variant ID";
//   }

//   try {
//     const cart = await addToCart(cartId, [
//       { merchandiseId: variantId, quantity: quantity },
//     ]);
//     return cart;
//   } catch (e) {
//     return "Error adding item to cart";
//   }
// };

export const removeItem = async (
  lineId: string
): Promise<String | undefined | Cart> => {
  const cartId = cookies().get('cartId')?.value

  if (!cartId) {
    return 'Missing cart ID'
  }
  try {
    const res = await removeFromCart(cartId, [lineId])
    revalidatePath('/cart')
    return res
  } catch (e) {
    return 'Error removing item from cart'
  }
}

export const updateItemQuantity = async ({
  lineId,
  variantId,
  quantity,
}: {
  lineId: string
  variantId: string
  quantity: number
}): Promise<String | undefined | Cart> => {
  const cartId = cookies().get('cartId')?.value

  if (!cartId) {
    return 'Missing cart ID'
  }
  try {
    const res = await updateCart(cartId, [
      {
        id: lineId,
        merchandiseId: variantId,
        quantity,
      },
    ])
    return res
  } catch (e) {
    return 'Error updating item quantity'
  }
}

export async function getCheckoutData() {
  const cartId = cookies().get('cartId')?.value
  if (!cartId) {
    return 'No items in the cart'
  }
  try {
    const cart = await getCart(cartId)
    return cart
  } catch (e) {
    return 'Error while getting cart data'
  }
}

export async function increaseItemQuantityBy1({
  quantity,
  lineId,
  variantId,
}: {
  quantity: number
  lineId: string
  variantId: string
}): Promise<String | undefined | Cart> {
  const res = await updateItemQuantity({
    lineId,
    variantId,
    quantity: quantity + 1,
  })
  if (typeof res === 'string') return res
  revalidatePath('/cart')
  return res
}

export async function decreaseItemQuantityBy1({
  quantity,
  lineId,
  variantId,
}: {
  quantity: number
  lineId: string
  variantId: string
}): Promise<String | undefined | Cart> {
  const res = await updateItemQuantity({
    lineId,
    variantId,
    quantity: quantity - 1,
  })
  if (typeof res === 'string') return res

  revalidatePath('/cart')
  return res
}
