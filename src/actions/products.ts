"use server";

import { QueryOptions, getProductById, queryProducts } from "@/lib/product";
import { Product } from "@/models/Product";

export const getProducts = async (query: QueryOptions): Promise<Product[]> => {
  try {
    const products = await queryProducts(query);

    return products;
  } catch (error) {
    console.error(error);

    return [];
  }
};

export const getProduct = async (id: string): Promise<Product | null> => {
  try {
    const product = await getProductById(id);

    return product;
  } catch (error) {
    console.error(error);

    return null;
  }
};
