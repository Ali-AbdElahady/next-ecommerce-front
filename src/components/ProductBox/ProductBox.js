"use client"
import React, { useContext } from "react";
import classes from "./ProductBox.module.css";
import PrimaryBtn from "../primaryBtn/PrimaryBtn";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { CartContext } from "@/services/cartContextProvider";
function ProductBox({ product }) {
  const {addItem}=useContext(CartContext)
  const url = '/products/'+product._id;
  const handleClick =()=>{
    addItem(product._id)
  }
  
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
          <PrimaryBtn onClick={handleClick} btnClasses={classes.cartBtn}><FontAwesomeIcon icon={faCartShopping} /></PrimaryBtn>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
