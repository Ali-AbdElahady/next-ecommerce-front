"use client";
import React, { useState } from "react";
import classes from "./Header.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  return (
    <div className={classes.header}>
      <div className={classes.wrapper}>
        <Link className={classes.logo} href={"/"}>
          E-commerce
        </Link>
        <nav
          className={`${classes.nav} ${
            mobileNavActive ? classes.activate : classes.disactivate
          }`}
        >
          <Link className={classes.link} href={"/"}>
            Home
          </Link>
          <Link className={classes.link} href={"/products"}>
            All Product
          </Link>
          <Link className={classes.link} href={"/categories"}>
            Categories
          </Link>
          <Link className={classes.link} href={"/account"}>
            Acount
          </Link>
          <div className={classes.cartIcon}>
            <Link className={classes.link} href={"/cart"}>
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
            <div className={classes.badge}>0</div>
          </div>
        </nav>
        <div
          className={classes.navBtn}
          onClick={() => setMobileNavActive((prev) => !prev)}
        >
          {/* <BarsIcon /> */}
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </div>
  );
}
