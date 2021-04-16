import { Typography, Layout } from "antd";
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <Layout.Footer className={styles.footerWrapper}>
      {/* <div className={styles.quickLinksContainer}></div>
      <div className={styles.quickLinksContainer}></div>
      <div className={styles.quickLinksContainer}></div> */}
      <Typography.Text type="secondary" className={styles.footerText}>
        NearArk &#169; 2021 all rights reserved.
      </Typography.Text>
    </Layout.Footer>
  );
};

export default Footer;
