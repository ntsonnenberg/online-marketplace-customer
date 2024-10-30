"use server";

import { Category } from "@/models/Category";
import { getCategoryById } from "@/lib/category";

export const getCategory = async (id: string): Promise<Category | null> => {
  try {
    const category = await getCategoryById(id);

    return category;
  } catch (error) {
    console.error(error);

    return null;
  }
};
