import React from "react";
import styles from "./article.module.css";

const article = ({ article }) => {
  console.log(article);

  return (
    <header className={styles.main}>
      <img className={styles.image} alt="girl-img" src={article.imageSrc} />
      <h1 className={styles.title}>{article.title}</h1>
    </header>
  );
};

export default article;
