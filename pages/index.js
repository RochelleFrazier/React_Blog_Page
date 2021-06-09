import Head from "next/head";
import styles from "../styles/blog.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ezcaza University</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Welcome to EZCAZA University!</h1>
      </div>
    </div>
  );
}
