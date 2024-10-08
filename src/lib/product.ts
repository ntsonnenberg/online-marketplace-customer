import { Product } from "@/models/Product";
import { mongooseConnect } from "./mongoose";

export const serializeProduct = (product: Product): Product => ({
  ...product,
  _id: product._id.toString(),
  category: product?.category ? product.category.toString() : null,
  vendor: product.vendor.toString(),
});

export interface QueryOptions {
  title?: string;
  description?: string;
  price?: number;
  images?: string[];
  category?: string;
  properties?: {};
  vendor?: string;
}

export const queryProducts = async (query: QueryOptions) => {
  try {
    await mongooseConnect();
    if (Object.keys(query).length) {
      const products = await Product.find(query);
      if (!products.length) {
        throw new Error(`Products with query ${Object.keys(query)} not found.`);
      }

      return products;
    }

    const products = await Product.find({});
    // .populate("category");
    if (!products.length) {
      throw new Error("Products not found.");
    }

    return products;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getProductById = async (id: string) => {
  try {
    await mongooseConnect();
    const product: Product | null = await Product.findById(id)
      .select("-createdAt -updatedAt -__v")
      .lean();

    if (!product) {
      throw new Error(`Product with id ${id} not found.`);
    }

    const serializedProduct = serializeProduct(product);

    return serializedProduct;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(error.message);
    }
    throw new Error(`Could not get Product with id ${id}`);
  }
};
