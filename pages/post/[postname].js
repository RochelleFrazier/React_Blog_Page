import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import getSlugs from "@utils/getSlugs";
import React from "react";
import CategoryTabs from "@components/blog-categorytabs/categorytabs";
import Navbar from "@components/blog-navbar/navbar";
import Layout from "@components/blog-layout/layout";
import Footer from "@components/blog-footer/footer";

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
  if (!frontmatter) return <></>;

  return (
    <>
      <Navbar />

      <CategoryTabs />
      <div className="background">
        <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
          <br></br>
          <div className={"content"}>
            <div className="back">
              {" "}
              <Link href="/blog">
                <a>
                  <i class="fa fa-long-arrow-left" aria-hidden="true"></i> Go
                  Back to Blog Page
                </a>
              </Link>
            </div>
            <article>
              <h1>{frontmatter.title}</h1>

              <div>
                <ReactMarkdown children={markdownBody}>
                  {markdownBody}
                </ReactMarkdown>
              </div>
            </article>
          </div>
        </Layout>
        <br></br>
        <div className={"container text-center"}>
          <div className={"row"}>
            <div className={"col-lg-2"}></div>
            <div className={"col-lg-8"}>
              <h3>Meet the Author</h3>
              <div className={"card shadow-lg rounded-lg"}>
                <img
                  className={"headshot"}
                  src="/logoori_30.png"
                  alt="Author Image"
                />
                <h4>Rochelle Frazier</h4>
                <p className={"title"}>Junior Web Developer</p>
                <p>Harrisburg Area Community College</p>
              </div>
            </div>
            <div className={"col-lg-2"}></div>
          </div>
        </div>
        <div></div>
        <Footer />
      </div>

      <style jsx>{`
        article {
        }
        h1 {
          font-weight: bold;
          text-align: center;
          margin-bottom: 50px;
          margin-top: 50px;
          border: solid #9e81aa 2px;
          padding: 50px 50px 50px 50px;
          color: #6e6e6e;
        }
        h3 {
          font-size: 2rem;
        }
        h4 {
          float: left;
        }
        a {
          color: #9e81aa;
        }

        // .background {
        //   background-color: #f8f8ff;
        //   background-repeat: no-repeat;
        //   background-attachment: fixed;
        //   background-position: center;
        //   background-size: cover;
        //   width: 100%;
        // }
        .headshot {
          float: left;
          background-color: rgb(158, 129, 170);
          height: 5vh;
        }
        .back {
          margin-top: 25px;
          width: 100%;
          max-width: 1200px;
          color: #00a395;
          font-family: "raleway", san-serif;
          text-align: center;
        }
        .back a:hover {
          border-top: 1px solid rgb(158, 129, 170);
          border-bottom: 1px solid rgb(158, 129, 170);
          padding-top: 10px;
          padding-bottom: 10px;
        }
        .back a:link {
          text-decoration: none;
        }
        .content {
          background-color: #fff;
          padding: 5px 30px 30px 30px;
          opacity: 0.9;
          margin: auto;
          float: left;
        }
      `}</style>
    </>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params;

  const content = await import(`../../posts/${postname}.md`);
  const config = await import(`../../siteconfig.json`);
  const data = matter(content.default);

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    return getSlugs(context);
  })(require.context("../../posts", true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/post/${slug}`);

  return {
    paths, // An array of path names, and any params
    fallback: false, // so that 404s properly appear if something's not matching
  };
}
