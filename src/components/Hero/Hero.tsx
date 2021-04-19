import { Button, Layout, Typography } from "antd";
import React from "react";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <header className={styles.heroContainer}>
      <div className={styles.heroContentWrapper}>
        <Typography.Title className={styles.heroTitle}>
          NearArk
        </Typography.Title>
        <Typography.Paragraph className={styles.heroDescription}>
          A social network designed specifically for mmorpg gamers with a focus
          on anonymity
        </Typography.Paragraph>
        <Button className={styles.btnCTA} type="primary">
          JOIN US
        </Button>
      </div>
    </header>
  );
};

export default Hero;
