
import ProductsGrid from '@/components/productsGrid/ProductsGrid'
import React from 'react'

import { Product } from "@/modules/Product";
import { mongooseConnect } from "@/lib/mongoose";

async function getAllProduct() {
  await mongooseConnect();
  const allProducts = await Product.find({}, null, {
    sort: { _id: -1 },
  });
  return Response.json(allProducts);
}

 async function Products() {
  const res = await getAllProduct();
  const data = await res.json();
  return (
    <div className='d-flex flex-column align-items-center mt-3'>
    <h1>All Products</h1>
      <ProductsGrid newProducts={data} />
    </div>
  );
}

export default Products