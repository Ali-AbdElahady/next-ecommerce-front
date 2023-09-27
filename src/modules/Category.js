const { Schema, models, model, default: mongoose } = require("mongoose");
const CategorySchema = new Schema(
  {
    name: { type: String, required: true },
    parent: { type: mongoose.Types.ObjectId, ref: "Category" },
    properties: [{ type: Object}]
  },
  { versionKey: false }
);

export const Category = models?.Category || model('Category', CategorySchema);
