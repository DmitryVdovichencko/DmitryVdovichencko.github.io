import * as React from "react";
import { PageProps, graphql, Link } from "gatsby";
import Layout from "../components/layout/";
import { AiOutlineCalendar } from "react-icons/ai";
import { ArticleList } from "../types/Articles";
import Tag from "../components/ui/Tag";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
const isTitleCyrillic = (title) => /[aА-яЯ]/gm.test(title);

interface BlogProps extends PageProps {
  data: ArticleList;
}

const BlogPage = (props: BlogProps): React.ReactElement => {
  const { data } = props;
  return (
    <Layout>
      <p>
        Welcome to articles section. In English and in Russian Languge as
        well.✨
      </p>
      <p>Now go read something great. 🚀</p>
      {data.allMdx.edges.map(({ node }, index) => (
        <Link key={node.fields.slug} to={node.fields.slug}>
          <div className="shadow flex my-4">
            <div className="flex-none w-48 relative">
              <GatsbyImage
                alt={node.frontmatter.title}
                className="absolute inset-0 w-full h-full object-cover mt-0"
                image={getImage(node.frontmatter.cover)}
              />
            </div>
            <div className="flex-auto p-6">
              <h4 className="flex-auto text-xl font-semibold">{`${node.frontmatter.title}`}</h4>
              <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
                <AiOutlineCalendar size="18px" />
                <span className="ml-1 text-sm -mb-0.5">
                  {isTitleCyrillic(node.frontmatter.title)
                    ? node.frontmatter.dateRu
                    : node.frontmatter.dateEn}
                </span>
              </div>
              <div className="flex items-baseline mt-4 mb-6">
                {node.frontmatter.tags.map((tag) => (
                  <Tag title={tag} />
                ))}
              </div>
              <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
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
