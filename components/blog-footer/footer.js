import styles from "../blog-footer/footer.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div>
      <section id="footer" className={styles.footer}>
        <div className={"container mb-5 mt-5"}>
          <div className={"row"}>
            <div className={"col-lg-4 pl-5 mt-5"}>
              <h5 className={styles.copyright + " text-uppercase"}>Buy/Sell</h5>
              <ul className={styles.links + " list-unstyled"}>
                <li>
                  <a href="#!">Search Homes</a>
                </li>
                <li>
                  <a href="#!">How to Sell?</a>
                </li>
                <li>
                  <a href="#!">How much is my home worth?</a>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}
            <div className={"col-lg-4 pl-5 mt-5"}>
              <h5 className={styles.copyright + " text-uppercase"}>Learn</h5>

              <ul className={styles.links + " list-unstyled"}>
                <li>
                  <a href="#!">Blog</a>
                </li>
                <li>
                  <a href="#!">Learn</a>
                </li>
                <li>
                  <a href="#!">Contact Us</a>
                </li>
                <li>
                  <a href="#!">News</a>
                </li>
                <li>
                  <a href="#!">Terms and Conditions</a>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}
            <div className={"col-lg-4 pl-5 mt-5"}>
              <h5 className={styles.copyright + " text-uppercase"}>
                Quick Links
              </h5>

              <ul className={styles.links + " list-unstyled"}>
                <li>
                  <a href="#!">Buy</a>
                </li>
                <li>
                  <a href="#!">Sell</a>
                </li>
                <li>
                  <a href="#!">Partner</a>
                </li>
                <li>
                  <a href="#!">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.copyright + " col-lg-12 text-center  "}>
        <h5> 2021 The Real Estate Blog by Rochelle Frazier | ALL RIGHTS RESERVED</h5>
      </div>
    </div>
  );
};

export default Footer;
