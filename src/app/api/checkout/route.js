import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/modules/Order";
import { Product } from "@/modules/Product";


export async function POST(req, res) {
  console.log(
    "1111111111111111111111111111111111111111111111111111111111111111111"
  );
  if (req.method !== "POST") {
    res.json("Shoud be a POST request");
    return;
  }
  const body = await req.json();
  const { name, email, city, postalCode, streetAddress, country, products } =
    body;

  await mongooseConnect();
  console.log(products);
  const productsIds = products.split(",");
  const uniqueIds = [...new Set(productsIds)];
  //   const productsInfo =await Product.find({_id:uniqueIds})
  const productsInfos = await Product.find({ _id: { $in: uniqueIds } });

  let line_items = [];
  for (const productId of uniqueIds) {
    const productInfo = productsInfos.find(
      (p) => p._id.toString() === productId
    );
    const quantity = productsIds.filter((id) => id === productId)?.length || 0;
    if (quantity > 0 && productInfo) {
      line_items.push({
        quantity,
        price_data: {
          curruncy: "USD",
          product_data: { name: productInfo.title },
          unit_amount: quantity * productInfo.price,
        },
      });
    }
  }

  Order.create({
    line_items,
    name,
    email,
    city,
    postalCode,
    streetAddress,
    country,
    paid: false,
  });

  const result = Response.json(line_items);
  return result;
}
