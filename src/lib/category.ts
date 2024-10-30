import { Category } from "@/models/Category";
import { mongooseConnect } from "./mongoose";

const serializeCategory = (category: Category): Category => ({
  ...category,
  _id: category._id.toString(),
  parent: category.parent
    ? {
        ...category.parent,
        _id: category.parent._id.toString(),
        properties: category?.parent?.properties
          ? category.parent.properties.map((prop) => ({
              ...prop,
              _id: prop._id.toString(),
            }))
          : null,
      }
    : null,
  properties: category.properties.map((prop) => ({
    ...prop,
    _id: prop._id.toString(),
  })),
});

export const getCategoryById = async (id: string) => {
  try {
    await mongooseConnect();
    const category: Category | null = await Category.findById(id)
      .select("-createdAt -updatedAt -__v")
      .populate({ path: "parent", select: "_id name properties" })
      .lean();

    if (!category) {
      throw new Error(`Category with id ${id} not found.`);
    }

    const serializedCategory = serializeCategory(category);

    return serializedCategory;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(error.message);
    }
    throw new Error(`Could not get category wiht id ${id}.`);
  }
};
