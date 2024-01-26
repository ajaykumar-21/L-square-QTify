import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import { useOutletContext } from "react-router-dom";
import Section from "../../components/Section/Section";
import styles from "./HomePage.module.css";

function HomePage() {
  const { data } = useOutletContext();
  const { topAlbums, newAlbums, songs } = data;

  return (
    <>
      <HeroSection />
      <div className={styles.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Album" data={newAlbums} type="album" />
      </div>
    </>
  );
}

export default HomePage;
