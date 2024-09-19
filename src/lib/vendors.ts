import { Vendor } from "@/models/Vendor";
import { mongooseConnect } from "./mongoose";

const serializeVendor = (vendor: Vendor): Vendor => ({
  _id: vendor._id.toString(),
  name: vendor.name,
  image: vendor.image,
});

interface QueryOptions {
  name?: string;
}

export const queryVendors = async (query: QueryOptions) => {
  try {
    await mongooseConnect();

    if (Object.keys(query).length) {
      const vendors = await Vendor.find(query).select("_id name image");
      if (!vendors.length) {
        throw new Error(`Vendors with query ${Object.keys(query)} not found.`);
      }
      const serializedVendors = vendors.map((vendor) =>
        serializeVendor(vendor)
      );
      return serializedVendors;
    }

    const vendors: Vendor[] = await Vendor.find({}).select("_id name image");
    if (!vendors.length) {
      throw new Error("Vendors not found.");
    }

    const serializedVendors = vendors.map((vendor) => serializeVendor(vendor));
    return serializedVendors;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getVendorById = async (id: string) => {
  try {
    await mongooseConnect();
    const vendor: Vendor | null = await Vendor.findById(id);
    if (!vendor) {
      throw new Error(`Vendor with id ${id} not found.`);
    }

    const serializedVendor = serializeVendor(vendor);

    return serializedVendor;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
