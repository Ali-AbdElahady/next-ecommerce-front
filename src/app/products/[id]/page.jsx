"use client";
import React from "react";
import styles from "./productDetails.module.css";
import ProductImages from "@/components/ProductImages/ProductImages";
import { mongooseConnect } from "@/lib/mongoose";
// import { Product } from "@/modules/Product";
import { useSearchParams } from "next/navigation";

export async function GetProduct() {
  const searchParams = useSearchParams();
  console.log(searchParams);
  const id = searchParams.get("id");
  console.log(id);
  // await mongooseConnect();
  // const product = await Product.findById(id);
  // return Response.json(product);
}

function ProductDetails() {
  const res = GetProduct();
  // console.log(res);
  return (
    <div>
      <div className={styles.ColWrapper}>
        <div className={styles.WhiteBox}>
          <ProductImages images={[]} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
