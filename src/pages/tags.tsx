import * as React from "react";
import { PageProps, graphql, Link } from "gatsby";
import _ from "lodash";
import Layout from "../components/layout/";

// const isTitleCyrillic = (title) => /[aА-яЯ]/gm.test(title);

// interface BlogProps extends PageProps {
//   data: ArticleList;
// }

const TagsPage = ({
  data: {
    allMdx: { group },
  },
}): React.ReactElement => {
  return (
    <Layout>
      {group.map((tag, i) => (
        <div key={i}>
          <Link
            to={`/tags/${_.kebabCase(tag.fieldValue)}`}
          >{` ${tag.fieldValue} (${tag.totalCount} posts)`}</Link>
        </div>
      ))}
    </Layout>
  );
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
