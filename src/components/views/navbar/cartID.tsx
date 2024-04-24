import { cookies } from "next/headers";
import React from "react";
import Navbar from "./index";
import { getCart } from "@/lib/shopify";
// import RightSideIcons from "./RightSideIcons";

const CartID = async () => {
  const cartId = cookies().get("cartId")?.value;
  let cart;
  if (cartId) {
    cart = await getCart(cartId);
  }

  return <Navbar quantity={cart?.totalQuantity} />;
};

{
  /* <RightSideIcons quantity={cart?.totalQuantity} />; */
}
export default CartID;
