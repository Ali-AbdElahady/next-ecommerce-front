import mongoose, { Schema, model, models } from "mongoose";
const ProductSchema = new Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  category: { type: mongoose.Types.ObjectId || any, ref: "Category" },
  price: { type: Number, required: true },
  images: { type: [{ name: String, url: String }] },
  properties: { type: Object },
});

export const Product = models?.Product || model('Product',ProductSchema)