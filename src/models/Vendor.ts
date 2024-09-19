import { Schema, models, model } from "mongoose";

export interface Vendor {
  _id: string;
  name: string;
  image: string;
}

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Vendor = models?.User || model("User", UserSchema);
