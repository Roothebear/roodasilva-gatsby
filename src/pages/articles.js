import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ListContainer from "../components/listContainer";

const ArticlesPage = ({ data }) => {
  return (
    <Layout pageTitle={"articles"}>
      <section>
        <h2>Articles</h2>
        <ListContainer data={data} filterParam={"articles"} />
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "D MMMM YYYY")
          title
          variant
          type
          hero_image_alt
          hero_image_credit_text
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          tags
        }
        id
        slug
      }
    }
  }
`;

export default ArticlesPage;
