"use client"
import React , {useState} from "react";
import styles from "./ProductImages.module.css";

function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0].url);
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.BigImageWrapper}>
        <img className={styles.BigImage} src={activeImage} />
      </div>
      <div className={styles.ImageButtons}>
        {images?.map((img) => {
          return (
            <div
              key={img.id}
              className={styles.ImageButton}
              onClick={() => setActiveImage(img.url)}
            >
              <img className={styles.Image} src={img.url} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductImages;
