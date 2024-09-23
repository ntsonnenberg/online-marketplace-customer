"use server";

import { getHomePageByVendor } from "@/lib/home-page";

export const getHomePage = async (vendorId: string) => {
  try {
    const homePage = await getHomePageByVendor(vendorId);

    return homePage;
  } catch (error) {
    console.error(error);

    return null;
  }
};
