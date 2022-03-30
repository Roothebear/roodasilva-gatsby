import * as React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import ListContainer from "../components/listContainer";
import Footer from "../components/footer";

import { bannerSection } from "../components/layout.module.css";

const IndexPage = ({ data }) => {
  console.log("data: ", data);

  return (
    <Layout pageTitle={"home"}>
      <StaticImage
        className={bannerSection}
        alt="Website logo - stylised signature of Roo da Silva"
        src="../images/reindeer.jpg"
      />
      <section>
        <h1>Welcome!</h1>
        <p>
          Thank you for dropping by! I am a freelance full stack developer and
          love working alongside others to bring ideas to life with a range of
          front and back end technologies. This site documents my work,
          interests and continuing learning in this and related areas.
        </p>
        <Footer />
      </section>
      <section>
        <h2>Recent projects</h2>
        <ListContainer data={data} filterParam={"portfolio"} />
      </section>
      <section>
        <h2>Recent articles</h2>
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

export default IndexPage;
