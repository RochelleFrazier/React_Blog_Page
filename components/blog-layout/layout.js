import Head from "next/head";

export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;800;900&display=swap");
        html,
        body {
          margin: 0;
          padding: 0;
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
          color: #000;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: bold;
        }
        h1 {
          text-align: center;
          margin-bottom: 50px;
          margin-top: 50px;
          border: solid #9e81aa 2px;
          padding: 50px 50px 50px 50px;
          color: #6e6e6e;
        }
        a {
          color: #9e81aa;
        }
        .content {
          // padding: 2rem 20px;
          // flex: 1;
          // display: flex;
          // flex-direction: column;
          // justify-content: center;
          // align-items: center;
        }
      `}</style>
      <section>
        <div className={"container-fluid"}>
          <div className={"row"}>
            <div className={"col-md-7 m-0 p-0"}>{children}</div>
            {/* <div className={"col-md-1"}></div> */}
            <div className={"col-md-1"}></div>
            <div className={"col-md-3 mt-4 pt-2"}>
              <div class="card my-4">
                <h5 class="card-header">CATEGORIES</h5>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-6">
                      <ul class="list-unstyled mb-0">
                        <li>
                          <a href="#!">Design</a>
                        </li>
                        <li>
                          <a href="#!">
                            <br></br>
                          </a>
                        </li>
                        <li>
                          <a href="#!">Real Estate</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-6">
                      <ul class="list-unstyled mb-0">
                        <li>
                          <a href="#!">Tips & Advice</a>
                        </li>
                        <li>
                          <a href="#!">
                            <br></br>
                          </a>
                        </li>
                        <li>
                          <a href="#!">Home Improvement</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <br></br>
              <div class="card ">
                <h5 class="card-header">RESOURCES</h5>
                <div class="card-body"></div>
              </div>
            </div>
            <div className={"col-md-1"}></div>
          </div>
        </div>
      </section>
    </>
  );
}
