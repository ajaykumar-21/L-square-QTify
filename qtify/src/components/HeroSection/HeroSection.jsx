import React from "react";
import styles from "./HeroSection.module.css";
import HeroImage from "../../assests/vibratingheadphone.png";

function HeroSection() {
  return (
    <div className={styles.Hero}>
      <div className={styles.HeroTitle}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <img className={styles.HeroImage} src={HeroImage} alt="headphone" />
    </div>
  );
}

export default HeroSection;
