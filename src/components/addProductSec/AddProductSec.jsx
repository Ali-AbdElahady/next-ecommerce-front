"use client"
import React, { useContext } from "react";
import { CartContext } from "@/services/cartContextProvider";
import PrimaryBtn from "@/components/primaryBtn/PrimaryBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
function AddProductSec({id}) {
  const { addProduct } = useContext(CartContext);

  return (
    <div>
      <PrimaryBtn onClick={() => addProduct(id)}>
        <FontAwesomeIcon icon={faCartShopping} /> Add to cart
      </PrimaryBtn>
    </div>
  );
}

export default AddProductSec;
