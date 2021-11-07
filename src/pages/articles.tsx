import * as React from "react";
import { PageProps, graphql, Link } from "gatsby";
import Layout from "../components/layout/";
import { AiOutlineCalendar } from "react-icons/ai";
import { ArticleList } from "../types/Articles";
import Tag from "../components/ui/Tag";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import PostDate from "../components/ui/PostDate";
const isTitleCyrillic = (title) => /[aА-яЯ]/gm.test(title);

interface BlogProps extends PageProps {
  data: ArticleList;
}

const BlogPage = (props: BlogProps): React.ReactElement => {
  const { data } = props;
  return (
    <Layout>
      {data.allMdx.edges.map(({ node }, index) => (
        <Link key={`${node.fields.slug}_${index}`} to={node.fields.slug}>
          <div className="flex shadow-lg  md:flex-row flex-col my-4 rounded-lg transition duration-500 ease-in-out hover:shadow-xl">
            <div className="flex-none h-48 md:w-48 md:h-auto relative">
              <GatsbyImage
                alt={node.frontmatter.title}
                className="absolute rounded-t-lg md:rounded-t-none md:rounded-l-lg inset-0 w-full h-full object-cover mt-0 m-none"
                image={getImage(node.frontmatter.cover)}
              />
            </div>
            <div className="flex-auto p-6">
              <h4 className="flex-auto text-xl font-semibold">{`${node.frontmatter.title}`}</h4>
              <PostDate
                date={
                  isTitleCyrillic(node.frontmatter.title)
                    ? node.frontmatter.dateRu
                    : node.frontmatter.dateEn
                }
              />
              <div className="flex flex-row flex-wrap items-baseline mt-4 mb-6">
                {node.frontmatter.tags.map((tag) => (
                  <div key={tag}>
                    <Tag title={tag} />
                  </div>
                ))}
              </div>
              <div className="w-full flex-none text-sm text-gray-500 mt-2">
                {node.excerpt}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </Layout>
  );
};

export default BlogPage;
export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            cover {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, sizes: "300px")
              }
            }
            dateRu: date(formatString: "DD MMMM, YYYY", locale: "ru")
            dateEn: date(formatString: "DD MMMM, YYYY", locale: "en")
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
