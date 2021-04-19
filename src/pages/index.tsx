import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Button, Layout } from "antd";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";

export default function Home() {
  return (
    <div>
      <Head>
        <title>NEARARK</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Content
        style={{
          margin: 0,
          position: "relative",
        }}
      >
        <Hero />
        <Features />
        test
      </Layout.Content>
    </div>
  );
}
