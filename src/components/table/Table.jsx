import React from "react";
import styles from './Table.module.css'
function Table({ children, classes }) {
  return <table className={`${styles.Table} ${classes}`}>{children}</table>;
}

export default Table;
