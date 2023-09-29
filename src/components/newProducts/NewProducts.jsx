import React from "react";
import classes from "./NewProducts.module.css";
import ProductsGrid from "../productsGrid/ProductsGrid";
function NewProducts({ products }) {
  return (
    <div className={`d-flex justify-content-center flex-column ${classes.newProductWrapper}`}>
      <h2 className={classes.title}>New Arrivals</h2>
      <ProductsGrid newProducts={products}></ProductsGrid>
    </div>
  );
}

export default NewProducts;
