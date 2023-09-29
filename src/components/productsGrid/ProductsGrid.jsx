import React from "react";
import classes from "./ProductsGrid.module.css";
import ProductBox from "../ProductBox/ProductBox";

function ProductsGrid({ newProducts }) {
  return (
    <div className={classes.ProductsGrid}>
      {newProducts?.length > 0 &&
        newProducts.map((product) => (
          <ProductBox key={product._id} product={product} />
        ))}
    </div>
  );
}

export default ProductsGrid;
