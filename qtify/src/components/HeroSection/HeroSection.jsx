import React from "react";
import styles from "./HeroSection.module.css";
import { ReactComponent as VibratingHeadphone } from "../../assests/vibrating-headphone.svg";
function HeroSection() {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <VibratingHeadphone />
      </div>
    </div>
  );
}

export default HeroSection;
