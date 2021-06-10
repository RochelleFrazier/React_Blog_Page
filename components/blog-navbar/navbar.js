import styles from "@components/blog-navbar/navbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav
      className={
        styles.navbar +
        " navbar fixed-top navbar-expand-sm navbar-light bg-light border-bottom"
      }
    >
      <a className={"navbar-brand"} href="#">
        {/* <img className={styles.img} src="#" alt="Real Estate logo" /> */}
        <a className={styles.logoname + " ml-1 mb-1"}>The Real Estate Blog</a>
      </a>

      <ul className={"navbar-nav ml-auto"}>
        <li className={styles.link + " nav-item"}>
          <a className={"nav-link"} href="#">
            Visit TheRealEstate.com <span class="sr-only">(current)</span>
            <i class="fa fa-arrow-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
