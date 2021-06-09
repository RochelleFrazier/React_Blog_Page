// import Head from "next/head";
import styles from "../blog-categorytabs/categorytabs.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@components/blog-posts/posts";

const CategoryTabs = () => {
  return (
    <>
      <nav
        className={
          styles.nav + " navbar navbar-expand-sm navbar-light bg-light "
        }
      >
        <button
          class="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <i class="fa fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className={styles.center + " navbar-nav"}>
            <li className={"nav-item px-3"}>
              <a className={"nav-link "} href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li className={"nav-item px-3"}>
              <a className={"nav-link "} href="#">
                Design
              </a>
            </li>
            <li className={"nav-item px-3"}>
              <a className={"nav-link "} href="#">
                Real Estate
              </a>
            </li>
            <li className={"nav-item px-3"}>
              <a className={"nav-link "} href="#">
                Home Improvement
              </a>
            </li>
            <li className={"nav-item px-3"}>
              <a className={"nav-link"} href="#">
                Tips & Advice
              </a>
            </li>
          </ul>
          <form className={"form-inline ml-auto"}>
            <input
              className={"form-control mr-sm-2"}
              type="search"
              placeholder="Search"
              aria-label="Search"
              id="input"
            />
            <button
              className={"btn btn-outline-primary my-2 my-sm-0"}
              type="submit"
            >
              <i className={"fa fa-search"} aria-hidden="true"></i>
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default CategoryTabs;
