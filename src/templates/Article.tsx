import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "../components/Seo";

const Article = ({
  data: {
    mdx: {
      frontmatter: { embeddedImagesRemote, embeddedImagesLocal, title },
      body,
    },
  },
}) => {
  return (
    <Layout>
			<SEO title={title} />
      <article>
        <MDXRenderer
          localImages={embeddedImagesLocal}
          remoteImages={embeddedImagesRemote}
        >
          {body}
        </MDXRenderer>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query ArticlesQuery($id: String) {
    mdx: mdx(id: { eq: $id }) {
      id
      body
      fields {
        slug
      }
      frontmatter {
        title
        date
        tags
        embeddedImagesRemote {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality:100)
          }
        }
        embeddedImagesLocal {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;

export default Article;
