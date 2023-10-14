"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./cart.module.css";
import { CartContext } from "@/services/cartContextProvider";
import Table from "@/components/table/Table";
import PrimaryBtn from "@/components/primaryBtn/PrimaryBtn";
import Input from "@/components/input/Input";
import axios from "axios";
import Image from "next/image";
import { headers } from "../../../next.config";

function Cart() {
  const { cartItems, addItem, deleteItem, clearCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [country, setCountry] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (cartItems.length > 0) {
      axios.post("/api/cart", { ids: cartItems }).then((response) => {
        setProducts(response.data);
        console.log(response.data);
      });
    }
  }, [cartItems]);

  function lessOfThisProduct(id) {
    deleteItem(id);
  }

  function moreOfThisProduct(id) {
    addItem(id);
  }

  async function goToPayment() {
    console.log(products);
    const response = await axios.post("/api/checkout", {
      name,
      email,
      city,
      postalCode,
      streetAddress,
      country,
      products: cartItems.join(","),
    }).then(res => console.log(res.data))
    // if (response.data.url) {
    //   window.location = response.data.url;
    // }
  }
 
  let total = 0;
  for (const productId of cartItems) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }

  return (
    <div className={styles.ColumnsWrapper}>
      <div className={styles.Box}>
        <h2>Cart</h2>
        {/* {!cartItems?.length && <div>Your cart is empty</div>} */}
        {products?.length == 0 && (
          <Table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td className={styles.ProductInfoCell}>
                    <div className={style.ProductImageBox}>
                      <Image src={product.images[0].url} alt="" />
                    </div>
                    {product.title}
                  </td>
                  <td>
                    <PrimaryBtn onClick={() => lessOfThisProduct(product._id)}>
                      -
                    </PrimaryBtn>
                    <span className={styles.QuantityLabel}>
                      {cartItems.filter((id) => id === product._id).length}
                    </span>
                    <PrimaryBtn onClick={() => moreOfThisProduct(product._id)}>
                      +
                    </PrimaryBtn>
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td>${total}</td>
              </tr>
            </tbody>
          </Table>
        )}
        {products?.length > 0 && (
          <Table>
            <thead>
              <tr className={styles.bold}>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td className={styles.ProductInfoCell}>
                    <div className={styles.ProductImageBox}>
                      <img src={product.images[0].url} alt={""} />
                    </div>
                    {product.title}
                  </td>
                  <td>
                    <PrimaryBtn
                      btnClasses={styles.increment}
                      onClick={() => lessOfThisProduct(product._id)}
                    >
                      -
                    </PrimaryBtn>
                    <span className={styles.QuantityLabel}>
                      {cartItems.filter((id) => id === product._id).length}
                    </span>
                    <PrimaryBtn
                      btnClasses={styles.increment}
                      onClick={() => moreOfThisProduct(product._id)}
                    >
                      +
                    </PrimaryBtn>
                  </td>
                  <td className={styles.bold}>
                    $
                    {cartItems.filter((id) => id === product._id).length *
                      product.price}
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td className={styles.bold}>${total}</td>
              </tr>
            </tbody>
          </Table>
        )}
      </div>
      {
        <div className={styles.Box}>
          <h2 className={styles.orderInformation}>Order information</h2>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            name="name"
            onChange={(ev) => setName(ev.target.value)}
          />
          <Input
            type="text"
            placeholder="Email"
            value={email}
            name="email"
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <div className={styles.CityHolder}>
            <Input
              type="text"
              placeholder="City"
              value={city}
              name="city"
              onChange={(ev) => setCity(ev.target.value)}
            />
            <Input
              type="text"
              placeholder="Postal Code"
              value={postalCode}
              name="postalCode"
              onChange={(ev) => setPostalCode(ev.target.value)}
            />
          </div>
          <Input
            type="text"
            placeholder="Street Address"
            value={streetAddress}
            name="streetAddress"
            onChange={(ev) => setStreetAddress(ev.target.value)}
          />
          <Input
            type="text"
            placeholder="Country"
            value={country}
            name="country"
            onChange={(ev) => setCountry(ev.target.value)}
          />
          <input type="hidden" name="products" value={cartItems.join(",")} />
          <PrimaryBtn btnClasses={styles.orderBtn} onClick={goToPayment}>
            Continue to payment
          </PrimaryBtn>
        </div>
      }
    </div>
  );
}

export default Cart;
