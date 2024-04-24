// import Cart from "@/components/views/shoppingCart/cart";
import Link from 'next/link'
import { getCart } from '@/lib/shopify'
import { cookies } from 'next/headers'
import CheckoutButton from '@/components/views/shoppingCart/cart/CheckoutButton'
import CartProductCard from '../../components/views/shoppingCart/cart/CartProductCard'

async function CheckoutPage() {
  const cartId = cookies().get('cartId')?.value
  let cart

  if (cartId) {
    cart = await getCart(cartId)
  }
  // const totalPrice = 331.13;
  // const flashSalePercent = 5;
  // const discountedPrice = (totalPrice / 100) * 100 - flashSalePercent;
  // const flashSalePrice = totalPrice - discountedPrice;

  // const res = await getCheckoutData();
  // if (!res) throw new Error("Error while fethcing cart data");
  // if (typeof res === "string") throw new Error(res);
  // console.dir(res, { depth: 4 });

  return (
    <div className='flex justify-center'>
      {/*<Cart cartItems={productItems} flashSalePercent={5} />*/}
      <div className='w-5/6 lg:w-2/3 my-24 md:my-32'>
        <h2 className='text-center text-gray-700 text-2xl pb-12'>
          Shopping Cart
        </h2>

        {/* Display this when cart is empty */}
        {!cart || cart.lines.length === 0 ? (
          <div className='flex flex-col gap-y-3 items-center text-gray-700'>
            <p className='text-xl'>Your cart is currently empty</p>
            <Link href={'/search'}>
              <p className='text-[#E57373] border-b border-[#E57373] w-fit'>
                Continue Shopping
              </p>
            </Link>
          </div>
        ) : (
          // Display this when cart is not empty
          <>
            <CartProductCard data={cart} />
            <div className='border-b border-gray-700 mt-10 mb-5'>
              <p className='text-center text-xs pb-3'>
                {
                  // NOTE: don't understand how updating here helps. So commenting it for the moment.
                  // <Link href={"/cart"}>UPDATE CART</Link>{" "}
                  // <span className="px-2">|</span>{" "}
                  // {" "}
                }
                <Link href={'/search'}>CONTINUE SHOPPING</Link>
              </p>
            </div>
            {
              // TODO: Need to figure out how to add sale stuff on shopify, maybe use metafields/metaobjects.
              // <div className="flex gap-x-10 justify-end pb-5">
              //   <p>FLASH SALE {flashSalePercent}% OFF</p>
              //   <p>-${flashSalePrice.toFixed(2)}</p>
              // </div>
            }
            <div className='flex gap-x-10 justify-end pb-5 border-b border-gray-700'>
              <p>SUBTOTAL</p>
              <p>${cart.cost.totalAmount.amount}</p>
            </div>
            <div className='flex flex-col items-center py-2'>
              {/*NOTE: Need confirmation whether we want to implement notes feature, if yes, how do post it to shopify */}
              <p className='text-xs py-2'>ADD A NOTE TO YOUR ORDER</p>
              <textarea
                name=''
                id=''
                cols={40}
                rows={6}
                className='border border-gray-500 mx-10 md:mx-0'
              ></textarea>
              <p className='text-sm py-5'>
                Tax included and shipping calculated at checkout
              </p>
              <CheckoutButton checkoutURL={cart.checkoutUrl} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default CheckoutPage
