import React from "react";
import styles from "./Header.module.scss";

const Header = () => (
  <div className={styles.container}>
    <div className={styles.left}>
      data
      <span>{"⚡︎"}</span>
      spark
    </div>
  </div>
);

export default Header;
