import * as React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import SocialBar from "../components/socialBar";

import { bannerSection } from "../components/layout.module.css";

const IndexPage = ({ data }) => {
  console.log("data: ", data);

  return (
    <Layout pageTitle={"home"}>
      <StaticImage
        className={bannerSection}
        alt="Website logo - stylised signature of Roo da Silva"
        src="../images/roo-portrait.jpg"
      />
      <section>
        <h1>Welcome!</h1>
        <p>
          Thank you for dropping by! I have 8+ years experience in CEO and
          Founder roles giving strategic direction and leadership to non-profit
          organisations and initiatives. Most recently I have supported the
          growth of a local inclusion-focused non-profit into a national
          organisation, and developed and led award-winning infrastructure during the
          pandemic.
        </p>
        <p>
          I am currently looking for new challenges and opportunities to apply
          my skills in different spheres. I offer expert project leadership and
          management alongside quickly expanding technical skills in full-stack
          test driven development. I love working alongside others to bring
          ideas to life with a range of front and back end technologies.
        </p>
        <SocialBar />
      </section>
      {/* <section>
        <h2>Recent projects</h2>
        <ListContainer data={data} filterParam={"portfolio"} />
      </section>
      <section>
        <h2>Recent articles</h2>
        <ListContainer data={data} filterParam={"articles"} />
      </section> */}
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
