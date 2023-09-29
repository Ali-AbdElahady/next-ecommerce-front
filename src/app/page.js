import Image from "next/image";
import styles from "./page.module.css";
import Featured from "@/components/featured/Featured";

import { Product } from "@/modules/Product";
import { mongooseConnect } from "@/lib/mongoose";
import NewProducts from "@/components/newProducts/NewProducts";

async function getFeaturedProduct() {
  const featuredProductId = "64f3c570c243becefbc7f77c";
  await mongooseConnect();
  const product = await Product.findById(featuredProductId);
  const newProducts = await Product.find({},null, {sort:{'_id': -1},limit:8})
  return {product, newProducts};
}

export default async function Home() {
  const {product,newProducts} = await getFeaturedProduct();
  return (
    <>
      <Featured product={product}></Featured>
      <NewProducts products={newProducts}></NewProducts>
    </>
  );
}
