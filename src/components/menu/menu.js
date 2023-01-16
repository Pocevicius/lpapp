import React from "react";
import styles from "./menu.module.css";
import Link from "../link/link";
export const Menu = () => {
  return (
    <ul className={styles.menuList}>
      <Link path="about" text="About" />
      <Link path="company" text="Company" />
      <Link path="portfolio" text="Portfolio" />
      <Link path="sayHello " text="Say hello" />
    </ul>
  );
};

export default Menu;
