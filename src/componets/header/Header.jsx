"use client";
import React, { useState } from "react";
import classes from "./Header.module.css";
import Link from "next/link";
export default function Header() {

  const [mobileNavActive, setMobileNavActive] = useState(false);
  return (
    <div className={classes.header}>
      <div className={classes.wrapper}>
        <Link className={classes.logo} href={"/"}>
          E-commerce
        </Link>
        <nav className={`${classes.nav} ${mobileNavActive? classes.activate : classes.disactivate}`}>
          <Link className={classes.link} href={"/"}>
            Home
          </Link>
          <Link className={classes.link} href={"/product"}>
            All Product
          </Link>
          <Link className={classes.link} href={"/categories"}>
            Categories
          </Link>
          <Link className={classes.link} href={"/account"}>
            Acount
          </Link>
          <Link className={classes.link} href={"/cart"}>
            Cart (0)
          </Link>
        </nav>
        <div className={classes.navBtn} onClick={() => setMobileNavActive((prev) => !prev)}>
          {/* <BarsIcon /> */}
          icon
        </div>
      </div>
    </div>
  );
}
