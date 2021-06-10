import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Real Estate Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.title}>
        <h1>Welcome to The Real Estate Blog!</h1>
        <p>Builted by Rochelle Frazier</p>
      </div>
      <div className={styles.blogpage}>
          <p>/blog to redirect to blog page.</p>
      </div>
    </div>
  );
}
