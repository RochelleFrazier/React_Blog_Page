import PostList from "@components/blog-posts/posts";
import getPosts from "@utils/getPosts";
import Landingpage from "@components/blog-landingpage/landingpage";
import CategoryTabs from "@components/blog-categorytabs/categorytabs";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@components/blog-navbar/navbar";
import Layout from "@components/blog-layout/layout";
import Footer from "@components/blog-footer/footer";

const Index = ({ posts, title, description, ...props }) => {
  return (
    <>
      <Navbar />
      <CategoryTabs />
      <Landingpage />
      <Layout pageTitle={title} description={description}>
        <main>
          <PostList posts={posts} />
        </main>
      </Layout>
      <Footer />
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  const posts = ((context) => {
    return getPosts(context);
  })(require.context("posts", true, /\.md$/));

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
