import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";
import Search from "../Search/Search";
import Button from "../Button/Button";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <a href="/">
        <Logo />
      </a>
      <Search placeholder="Search a album of your choice"/>
      <Button feedback="Give Feedback"/>
    </nav>
  );
}

export default NavBar;
