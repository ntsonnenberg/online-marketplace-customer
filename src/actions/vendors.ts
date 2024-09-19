"use server";

import { queryVendors } from "@/lib/vendors";

export const getVendors = async () => {
  try {
    const vendors = await queryVendors({});

    return vendors;
  } catch (error) {
    console.error(error);

    return null;
  }
};
