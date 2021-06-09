import Link from "next/link";
// import styles from "@components/blog-layout/layout.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@components/blog-categorytabs/categorytabs";
import styles from "@components/blog-posts/posts.module.css";
import Navbar from "@components/blog-navbar/navbar";

export default function PostList({ posts }) {
  if (posts === "undefined") return null;

  return (
    <div>
      {!posts && <div>No posts!</div>}
      <ul>
        {posts &&
          posts.map((post) => {
            return (
              <div className={"card mt-5 border-0 m-0 p-0"}>
                <a className={styles.a + " ml-4 mt-3"}>
                  #{post?.frontmatter?.id}
                </a>
                <div className={"card-body"}>
                  <h2 className={"card-title"} key={post.slug}>
                    <Link href={{ pathname: `/post/${post.slug}` }}>
                      <a className={styles.a}>{post?.frontmatter?.title}</a>
                    </Link>
                  </h2>
                  <p className="text">{post?.frontmatter?.description}</p>
                  <p>{post.author}</p>
                  <Link href={{ pathname: `/post/${post.slug}` }}>
                    <button className={styles.btn + " btn"}>
                      Read More &rarr;
                    </button>
                  </Link>
                </div>
                <div className={styles.footer + " card-footer border-0"}>
                  Posted by
                  <a href="#" className={styles.a}>
                    {" "}
                    Ezcaza.com{" "}
                  </a>
                  {`on `} {post.frontmatter.date}
                </div>
                <div>
                  <hr className={styles.hr}></hr>
                </div>
              </div>
            );
          })}
      </ul>
    </div>
  );
}
