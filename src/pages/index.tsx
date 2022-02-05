import * as React from "react";
import { PageProps } from "gatsby";
import Layout from "../components/layout/";
import developer from "./assets/about/developer.svg";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main className="flex md:flex-row flex-col">
        <img width="150px" src={developer}></img>
        <article className="md:pl-6 pl-none">
          <h3> Hi, my name is Dmitry. I'm software engineer &#128400;</h3>
          <p>
            Here is my article translations to Russian, conspects, and posts
            about web development. This site has no ads, sponsors, affiliates,
            or social media.
          </p>
          <p>Feel free to get in touch about posts and translations.</p>
        </article>
      </main>
    </Layout>
  );
};

export default AboutPage;
