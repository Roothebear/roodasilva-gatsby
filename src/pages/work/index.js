import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import CardDeck from "../../components/cardDeck";

const WorkPage = ({ data }) => {
  return (
    <Layout pageTitle={"work"}>
      <section>
        <h1>Work (+ play)</h1>
        <CardDeck data={data} />
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
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
          name
        }
        id
      }
    }
  }
`;

export default WorkPage;

export const Head = () => <title>Work</title>;
