import React from "react";
import styles from "./navbar.module.css";
import Logo from "../atoms/logo/logo";
import Menu from "../menu/menu";

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Menu />
    </header>
  );
};

export default Navbar;
