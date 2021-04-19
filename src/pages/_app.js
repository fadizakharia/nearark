import React from "react";
import App from "next/app";
import Navbar from "../components/Navbar/Navbar";
import "../theme/antd.less";
import "../theme/fonts.less";
import Layout from "antd/lib/layout/layout";

import Footer from "../components/Footer/Footer";
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Layout>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Layout>
      </React.Fragment>
    );
  }
}

export default MyApp;
