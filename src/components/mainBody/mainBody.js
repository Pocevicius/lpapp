import React from "react";
import styles from "./mainBody.module.css";
import Article from "../article/article";

export const mainBody = ({ todayDate, articleTitle, articles }) => {
  return (
    <div className={styles.mainBody}>
      <div className={styles.title}>{articleTitle}</div>
      <div className={styles.articlesWrapper}>
        {articles.map((article) => {
          return <Article article={article} />;
        })}
      </div>
    </div>
  );
};

export default mainBody;
