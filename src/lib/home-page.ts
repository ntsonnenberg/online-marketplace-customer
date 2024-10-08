import { HomePage } from "@/models/HomePage";
import { mongooseConnect } from "./mongoose";
import { serializeProduct } from "./product";

const serializeHomePage = (homePage: HomePage): HomePage => ({
  ...homePage,
  _id: homePage._id.toString(),
  vendor: homePage.vendor.toString(),
  featured: homePage.featured.map(serializeProduct),
});

export const getHomePageByVendor = async (vendorId: string) => {
  try {
    await mongooseConnect();
    const homePage: HomePage | null = await HomePage.findOne({
      vendor: vendorId,
    })
      .select("-createdAt -updatedAt -__v")
      .populate("featured")
      .lean();

    if (!homePage) {
      throw new Error(`Home Page for vendor with id ${vendorId} not found.`);
    }

    const serializedHomePage = serializeHomePage(homePage);

    return serializedHomePage;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(error.message);
    }

    throw new Error("Could not get home page by vendor.");
  }
};
