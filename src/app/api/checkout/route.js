import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/modules/Order";
import { Product } from "@/modules/Product";
const stripe = require('stripe')(process.env.STRIPE_SK);


export async function POST(req, res) {
  if (req.method !== "POST") {
    res.json("Should be a POST request");
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
          currency: "USD",
          product_data: { name: productInfo.title },
          unit_amount: quantity * productInfo.price * 100,
        },
      });
    }
  }

  const orderDoc = await Order.create({
    line_items,
    name,
    email,
    city,
    postalCode,
    streetAddress,
    country,
    paid: false,
  });

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode:'payment',
    customer_email:email,
    success_url:process.env.SUCCESS_URL +"/cart?success=1",
    cancel_url:process.env.SUCCESS_URL +"/cart?canceled=1",
    metadata:{orderId:orderDoc._id.toString()}
  })

  const result = Response.json({url:session.url});
  return result;
}
