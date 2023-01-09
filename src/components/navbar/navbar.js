import React from "react";
import styles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>LOGO</div>
      <ul className={styles.menuList}>
        <li>about</li>
        <li>portfolio</li>
        <li>contacts</li>
      </ul>
    </header>
  );
};

export default Navbar;
