import React from "react";
import styles from "./mainBody.module.css";
import Title from "../title/title";
import ArticleList from "../articleList/articleList";

const mainBody = ({ articleTitle, articles, setTitle }) => {
  return (
    <div onClick={() => setTitle("labas")} className={styles.mainBody}>
      <Title articleTitle={articleTitle} />
      <ArticleList articles={articles} />
    </div>
  );
};

export default mainBody;
