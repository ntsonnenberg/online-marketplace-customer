"use client";

import React, { createContext, useEffect, useState } from "react";
import { Product } from "@/models/Product";

interface CartContext {
  cart?: Product[];
  addProduct?: (product: Product) => void;
  removeProduct?: (product: Product) => void;
  clearCart?: () => void;
}

export const CartContext = createContext<CartContext>({});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cart, setCart] = useState<Product[]>(
    ls?.getItem("cart") ? JSON.parse(ls.getItem("cart") as string) : []
  );

  useEffect(() => {
    ls?.setItem("cart", JSON.stringify(cart));
  }, [cart, ls]);

  useEffect(() => {
    if (ls && ls.getItem("cart")) {
      setCart(JSON.parse(ls.getItem("cart") as string));
    }
  }, [ls]);

  const addProduct = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeProduct = (product: Product) => {
    setCart((prev) => {
      const index = prev.indexOf(product);
      if (index !== -1) {
        return prev.filter((_, i) => i !== index);
      }
      return prev;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
