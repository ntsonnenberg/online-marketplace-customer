"use client";

import React, { createContext, useEffect, useState } from "react";
import { Product } from "@/models/Product";

type Cart = {
  products: Product[];
};

interface CartContext {
  cart?: Cart;
  addProduct?: (product: Product) => void;
  removeProduct?: (product: Product) => void;
  clearCart?: () => void;
}

const useCartState = () => useState<Cart>({ products: [] });

// export const CartContext = createContext<ReturnType<
//   typeof useCartState
// > | null>(null);

export const CartContext = createContext<CartContext>({});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useCartState();

  const ls = typeof window !== "undefined" ? window.localStorage : null;

  useEffect(() => {
    if (cart.products?.length > 0) {
      ls?.setItem("cart", JSON.stringify(cart.products));
    } else {
      ls?.setItem("cart", "");
    }
  }, [cart.products, ls]);

  useEffect(() => {
    if (ls && ls.getItem("cart")) {
      setCart({ products: JSON.parse(ls.getItem("cart") as string) });
    }
  }, [ls]);

  const addProduct = (product: Product) => {
    setCart((prev) => ({ ...prev, products: [...prev.products, product] }));
  };

  const removeProduct = (product: Product) => {
    setCart((prev) => {
      const index = prev.products.indexOf(product);
      if (index !== -1) {
        return {
          ...prev,
          products: prev.products.filter((value, i) => i !== index),
        };
      }
      return prev;
    });
  };

  const clearCart = () => {
    setCart({ products: [] });
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
