"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";

type Props = {
  cartItems: {
    name: string;
    size: string;
    src: string;
    price: number;
    quantity: number;
  }[];
  flashSalePercent: number;
};

const Cart = ({ cartItems, flashSalePercent }: Props) => {
  const [items, setItems] = useState(cartItems);

  // decrement functionality code goes here
  function decrementQuantity(index: number) {
    const newItems = [...items];

    // Ensure the quantity does not go below 1
    if (newItems[index].quantity > 1) {
      newItems[index].quantity -= 1;
    }
    setItems(newItems);
  }

  // increment functionality code goes here
  function incrementQuantity(index: number) {
    const newItems = [...items];

    newItems[index].quantity += 1;

    setItems(newItems);
  }

  // remove item code
  function removeItem(index: number) {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }

  const [discount, setDiscount] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);

  useEffect(() => {
    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const disc = (flashSalePercent / 100) * total;
    const finalPrice = total - disc;

    setDiscount(disc);
    setDiscountedPrice(finalPrice);
  }, [items, flashSalePercent]);

  return (
    <div className="w-5/6 lg:w-2/3 my-24 md:my-32">
      <h2 className="text-center text-gray-700 text-2xl pb-12">
        Shopping Cart
      </h2>

      {/* Display this when cart is empty */}
      {items.length === 0 ? (
        <div className="flex flex-col gap-y-3 items-center text-gray-700">
          <p className="text-xl">Your cart is currently empty</p>
          <Link href={"/products"}>
            <p className="text-[#E57373] border-b border-[#E57373] w-fit">
              Continue Shopping
            </p>
          </Link>
        </div>
      ) : (
        // Display this when cart is not empty
        <>
          {/* for screens smaller than medium */}
          <div className="flex md:hidden flex-col gap-y-6">
            {items.map((prod, i) => {
              return (
                <div className="flex flex-col" key={i}>
                  <div className="flex items-start">
                    <Image
                      src={prod.src}
                      alt="prod img"
                      width={70}
                      height={70}
                    />
                    <div className="space-y-1 pl-5">
                      <p className="text-gray-700">{prod.name}</p>
                      <p className="text-gray-500">{prod.size}</p>
                      <p className="text-gray-500">${prod.price}</p>
                      <div className="flex items-center pt-2">
                        <button className="w-fit cursor-auto px-5 py-3 flex md:justify-between items-center gap-x-6 border border-gray-400 text-gray-700 rounded-md">
                          <AiOutlineMinus
                            className="cursor-pointer min-w-fit mx-2 text-gray-900"
                            onClick={() => decrementQuantity(i)}
                          />
                          <p>{prod.quantity}</p>
                          <AiOutlinePlus
                            className="cursor-pointer min-w-fit mx-2 text-gray-900"
                            onClick={() => incrementQuantity(i)}
                          />
                        </button>
                        <p
                          onClick={() => removeItem(i)}
                          className="text-xs mx-3 text-gray-400 pt-2 border-b border-gray-400 cursor-pointer"
                        >
                          Remove
                        </p>
                      </div>
                      <p className="pt-2 text-lg">
                        ${(prod.price * prod.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* for medium or larger screens */}
          <div className="hidden md:flex flex-col gap-y-6">
            <div className="flex border-b-2">
              <div className="w-[50%] text-left">
                <p>Product</p>
              </div>
              <div className="w-[15%] text-center">
                <p>Price</p>
              </div>
              <div className="w-[20%] text-center">
                <p>Quantity</p>
              </div>
              <div className="w-[15%] text-right">
                <p>Total</p>
              </div>
            </div>
            {items.map((prod, i) => {
              return (
                <div className="flex items-start" key={i}>
                  <div className="w-[50%] text-left flex items-start">
                    <Image
                      src={prod.src}
                      alt="prod img"
                      width={70}
                      height={70}
                    />
                    <div className="space-y-1 pl-5">
                      <p className="text-gray-700">{prod.name}</p>
                      <p className="text-gray-500">{prod.size}</p>
                    </div>
                  </div>
                  <div className="w-[15%] text-center">
                    <p>${prod.price}</p>
                  </div>
                  <div className="w-[20%] flex flex-col items-center">
                    <button className="w-fit cursor-auto px-5 py-3 flex md:justify-between items-center gap-x-6 border border-gray-400 text-gray-700 rounded-md">
                      <AiOutlineMinus
                        className="cursor-pointer min-w-fit mx-2"
                        onClick={() => decrementQuantity(i)}
                      />
                      <p>{prod.quantity}</p>
                      <AiOutlinePlus
                        className="cursor-pointer min-w-fit mx-2"
                        onClick={() => incrementQuantity(i)}
                      />
                    </button>
                    <p
                      onClick={() => removeItem(i)}
                      className="text-xs text-gray-400 pt-2 border-b border-gray-400 cursor-pointer"
                    >
                      Remove
                    </p>
                  </div>
                  <div className="w-[15%] text-right">
                    <p>${(prod.price * prod.quantity).toFixed(2)}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="border-b border-gray-700 mt-10 mb-5">
            <p className="text-center text-xs pb-3">
              <Link href={"/cart"}>UPDATE CART</Link>{" "}
              <span className="px-2">|</span>{" "}
              <Link href={"/products"}>CONTINUE SHOPPING</Link>
            </p>
          </div>
          <div className="flex gap-x-10 justify-end pb-5">
            <p>FLASH SALE {flashSalePercent}% OFF</p>
            <p>-${discount.toFixed(2)}</p>
          </div>
          <div className="flex gap-x-10 justify-end pb-5 border-b border-gray-700">
            <p>SUBTOTAL</p>
            <p>${discountedPrice.toFixed(2)}</p>
          </div>
          <div className="flex flex-col items-center py-2">
            <p className="text-xs py-2">ADD A NOTE TO YOUR ORDER</p>
            <textarea
              name=""
              id=""
              cols={40}
              rows={6}
              className="border border-gray-500 mx-10 md:mx-0"
            ></textarea>
            <p className="text-sm py-5">
              Tax included and shipping calculated at checkout
            </p>
            <button className="w-fit text-sm px-5 py-4 border border-black bg-black text-white rounded-md hover:bg-white hover:text-gray-700">
              CHECK OUT
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
