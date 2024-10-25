"use client";

import React, { createContext, useState } from "react";
import { Product } from "@/models/Product";

type Cart = {
  products: Product[];
};

const useCartState = () => useState<Cart>({ products: [] });

export const CartContext = createContext<ReturnType<
  typeof useCartState
> | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useCartState();

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
}
