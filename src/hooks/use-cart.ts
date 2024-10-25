"use client";

import { useContext } from "react";
import { CartContext } from "@/context/cart";

export function useCart() {
  const { cart, addProduct, removeProduct, clearCart } =
    useContext(CartContext);

  if (!cart || !addProduct || !removeProduct || !clearCart) {
    throw new Error("useCart mustb e used within CartContextProvider");
  }

  return { cart, addProduct, removeProduct, clearCart };
}
