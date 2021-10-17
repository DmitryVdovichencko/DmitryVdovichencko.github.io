import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
const Article = ({ data }) => {
  const { post } = data;

  return (
    <Layout>
      <article>
        <MDXRenderer>{post.body}</MDXRenderer>
      </article>
    </Layout>
  );
};
export const query = graphql`
  query ($slug: String!) {
    post: mdx(fields: { slug: { eq: $slug } }) {
      body
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        tags
      }
    }
  }
`;
export default Article;
