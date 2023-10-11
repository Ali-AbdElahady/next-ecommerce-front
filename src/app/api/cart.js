import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/modules/Product";

export default async function handle(req, res) {
  console.log("object");
  await mongooseConnect();
  const ids = req.body.ids;
  res.json(await Product.find({ _id: ids }));
}
