"use client"
import React , {useState} from "react";
import styles from "./ProductImages.module.css";

function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0]);
  return (
    <>
      <div className={styles.BigImageWrapper}>
        <img className={styles.BigImage} src={activeImage} />
      </div>
      <div className={styles.ImageButtons}>
        {images?.map((img) => {
          return (
            <div
              key={img}
              className={styles.ImageButton}
              onClick={() => setActiveImage(img)}
            >
              <img className={styles.Image} src={img} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductImages;
