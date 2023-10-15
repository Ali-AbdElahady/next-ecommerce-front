import React from "react";
import styles from "./productDetails.module.css";
import ProductImages from "@/components/ProductImages/ProductImages";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/modules/Product";
import { Types } from "mongoose";

export async function GetProduct(id) {
  console.log(id);
  await mongooseConnect();
  const product = await Product.findById(id);
  return Response.json(product);
}

async function ProductDetails({ params }) {
  const id = params.id;
  console.log(id);
  const res = await GetProduct(id);
  const product = await res.json();
  return (
    <div>
      <div className={styles.ColWrapper}>
        <div className={styles.WhiteBox}>
          <ProductImages images={product.images} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
