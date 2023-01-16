import React from "react";
import styles from "./title.module.css";

const title = ({ articleTitle }) => {
  return <div className={styles.title}>{articleTitle}</div>;
};

export default title;
