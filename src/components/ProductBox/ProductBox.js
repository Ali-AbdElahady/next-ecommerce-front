import React from "react";
import classes from "./ProductBox.module.css";
import PrimaryBtn from "../primaryBtn/PrimaryBtn";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  {faCartShopping} from "@fortawesome/free-solid-svg-icons"
function ProductBox({ product }) {
  console.log( product.images );
  const url = '/product/'+product._id;
  console.log(url);
  return (
    <div className={classes.ProductWrapper}>
      <Link className={classes.WhiteBox} href={url}>
        <div>
          <img src={product.images?.[0].url} alt="" />
        </div>
      </Link>
      <div className={classes.ProductInfoBox}>
        <div className={classes.Title}>{product.title}</div>
        <div className={classes.PriceRow}>
          <div className={classes.Price}>$ {product.price}</div>
          <PrimaryBtn><FontAwesomeIcon icon={faCartShopping} /></PrimaryBtn>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
