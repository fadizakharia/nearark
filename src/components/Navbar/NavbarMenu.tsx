import React, { Fragment } from "react";
import styles from "./NavbarMenu.module.css";
import { Menu, Typography, Layout, Drawer, Button } from "antd";
interface menuProps {
  device: "mob-tablet" | "desktop";
}
const NavbarMenu = (props: menuProps) => {
  return (
    <nav
      className={
        props.device === "mob-tablet"
          ? styles.mobileMenuContainer
          : styles.desktopMenuContainer
      }
    >
      <Menu
        mode={props.device === "mob-tablet" ? "vertical-left" : "horizontal"}
        theme="dark"
        className={
          props.device === "mob-tablet"
            ? styles.leftMobileMenu
            : styles.leftMenuContainer
        }
      >
        <Menu.Item className={props.device === "mob-tablet" && styles.menuItem}>
          Home
        </Menu.Item>
        <Menu.Item className={props.device === "mob-tablet" && styles.menuItem}>
          About
        </Menu.Item>
        <Menu.Item className={props.device === "mob-tablet" && styles.menuItem}>
          Support
        </Menu.Item>
      </Menu>
      {props.device === "mob-tablet" && <Menu.Divider />}
      {props.device === "desktop" && <div className={styles.grow}></div>}
      <div
        className={
          props.device === "desktop" ? styles.desktopAuth : styles.mobileAuth
        }
      >
        <Button
          className={
            props.device === "desktop" ? styles.btnDesktop : styles.btnMobile
          }
        >
          SIGNUP
        </Button>
        <Button
          className={
            props.device === "desktop" ? styles.btnDesktop : styles.btnMobile
          }
          type="primary"
        >
          LOGIN
        </Button>
      </div>
    </nav>
  );
};

export default NavbarMenu;
