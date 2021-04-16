import { Menu, Typography, Layout, Drawer, Button } from "antd";

import { GetStaticProps } from "next";
import styles from "./Navbar.module.css";
import { Fragment, useState } from "react";
import NavbarMenu from "./NavbarMenu";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

const Navbar = () => {
  const breakPoints = useBreakpoint();
  const [visible, setVisible] = useState<boolean>(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Fragment>
      {!breakPoints.md && (
        <Drawer
          title="Basic Drawer"
          placement="left"
          closable={false}
          onClose={onClose}
          visible={visible}
          bodyStyle={{ padding: 0, backgroundColor: "#001529" }}
          headerStyle={{ backgroundColor: "#001529" }}
          drawerStyle={{ backgroundColor: "#001529" }}
          className={styles.Drawer}
        >
          {/* <Typography.Title className={styles.appLogo}>
            AppLogo
          </Typography.Title> */}

          {/* <Typography.Title className={styles.appLogo}>
            AppLogo
          </Typography.Title> */}
          <NavbarMenu device="mob-tablet" />
        </Drawer>
      )}
      <Layout.Header>
        {breakPoints.md ? (
          <nav className={styles.navbarContainer}>
            <div className={styles.logoContainer}>
              <img height="40px" width="100px" src="images/NearArkText.png" />
            </div>
            <NavbarMenu device="desktop" />
          </nav>
        ) : (
          <Button type="primary" className={styles.burger} onClick={showDrawer}>
            <div className={styles.dash}></div>
            <div className={styles.dash}></div>
            <div className={styles.dash}></div>
          </Button>
        )}
      </Layout.Header>
    </Fragment>
  );
};

export default Navbar;
