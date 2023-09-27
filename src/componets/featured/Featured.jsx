import classes from "./Featured.module.css";
import PrimaryBtn from "../primaryBtn/PrimaryBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Featured() {
  return (
    <div className={classes.wraper}>
      <div className={classes.textFild}>
        <h1 className={classes.title}>Pro anywhere</h1>
        <p className={classes.description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione,
          quia explicabo odit ducimus, minima dolores consequuntur magni
          perferendis esse veritatis natus. Temporibus repudiandae eius
          perspiciatis excepturi assumenda sunt quasi exercitationem.
        </p>
        <div className={classes.btns}>
          <PrimaryBtn>Read more</PrimaryBtn>
          <PrimaryBtn>
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="ms-2">Add to cart</span>
          </PrimaryBtn>
        </div>
      </div>
      <div className={classes.imgFild}>
        <img
          src="https://dawid-next-ecommerce.s3.amazonaws.com/1679151719649.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Featured;
