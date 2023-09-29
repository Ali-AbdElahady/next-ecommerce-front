import classes from "./Featured.module.css";
import PrimaryBtn from "../primaryBtn/PrimaryBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import PrimaryLink from "../primaryBtn/PrimaryLink";

function Featured({product}) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.textField}>
        <h1 className={classes.title}>{product.title}</h1>
        <p className={classes.description}>
          {product.description}
        </p>
        <div className={classes.btns}>
          <PrimaryLink href={'/products/'+product._id}>Read more</PrimaryLink>
          <PrimaryBtn>
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="ms-2">Add to cart</span>
          </PrimaryBtn>
        </div>
      </div>
      <div className={classes.imgField}>
        <img
          src="https://dawid-next-ecommerce.s3.amazonaws.com/1679151719649.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Featured;
