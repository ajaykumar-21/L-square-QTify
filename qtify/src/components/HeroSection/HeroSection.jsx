import React from "react";
import styles from "./HeroSection.module.css";
import { ReactComponent as VibratingHeadphone } from "../../assests/vibrating-headphone.svg";
function HeroSection() {
  return (
    <div className={styles.HeroContainer}>
      <div className={styles.HeroText}>
        <div>100 Thousand Songs, ad-free</div>
        <div>Over thousands podcast episodes</div>
      </div>
      <VibratingHeadphone />
    </div>
  );
}

export default HeroSection;
