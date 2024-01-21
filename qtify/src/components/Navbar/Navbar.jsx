import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <a href="/">
        <Logo />
      </a>
    </nav>
  );
}

export default NavBar;
