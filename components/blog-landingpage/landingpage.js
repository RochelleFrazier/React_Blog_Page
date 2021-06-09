// import Head from "next/head";
import styles from "../blog-landingpage/landingpage.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const LandingPage = () => {
  return (
    <section className={styles.landingimage}>
      <div className={styles.landingtext}>
        {/* <h1 className={styles.slogan}>
          The Real Estate Blog
        </h1> */}
        {/* <h1 className={styles.slogan2}>Blog</h1> */}
      </div>
    </section>
  );
};

export default LandingPage;
