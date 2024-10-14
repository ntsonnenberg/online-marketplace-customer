"use server";

import { getVendorById, queryVendors } from "@/lib/vendors";

export const getVendors = async () => {
  try {
    const vendors = await queryVendors({});

    return vendors;
  } catch (error) {
    console.error(error);

    return null;
  }
};

export const getVendor = async (id: string) => {
  try {
    const vendor = await getVendorById(id);

    return vendor;
  } catch (error) {
    console.error(error);

    return null;
  }
};
