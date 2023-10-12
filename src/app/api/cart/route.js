import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/modules/Product";
import { Types } from "mongoose";

export async function POST(req, res) {
  await mongooseConnect();
  const body = await req.json();
  console.log(body);
  // new ObjectId(id)
  const ids = body.ids.map((id) => new Types.ObjectId(id));
  const product = await Product.find({ _id: { $in: ids } });
  console.log(product);
  return Response.json(product);
}
