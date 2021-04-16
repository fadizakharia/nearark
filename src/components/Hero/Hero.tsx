import { Layout } from "antd";
import React from "react";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <Layout.Content>
      <div className={styles.heroContainer}></div>
    </Layout.Content>
  );
};

export default Hero;
