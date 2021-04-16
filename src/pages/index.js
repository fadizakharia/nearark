import Head from "next/head";
import styles from "../styles/Home.md.css";
import { Button } from "antd";
import { Content } from "antd/lib/layout/layout";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Content>
        <main className={styles.main}>
          <Button>Click me!</Button>
        </main>
      </Content>

      <footer className={styles.footer}></footer>
    </div>
  );
}
