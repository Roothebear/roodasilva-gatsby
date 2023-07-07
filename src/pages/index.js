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
          Thank you for dropping by! I have over 10 years of experience in CEO, 
          Founder, Chair, and Trustee roles giving strategic direction 
          and leadership to community focused
          organisations and initiatives. Between 2017 and 2022 I led the
          growth of a local disability-focused charity into a national
          youth-led movmement for disability inclusion. In 2020 I built, developed, and led award-winning cross-sector infrastructure in response to the coronavirus pandemic.
        </p>
        <p>
        My current working life is roughly divided into two parts. My work with communities and non-profit organisations continues, and I offer a wide range of consulting, advisory, and mentoring services. These include being able to apply a broad technical skillset in coding and test-driven-development, covering full stack web-development, data engineering, cloud engineering, and machine learning. I can offer expert project leadership, management, and technical direction in across areas. I love working alongside others to bring
          ideas to life with a range of front and back end technologies.
        </p>
        <p>
        I am also spending an increasing amount of time pursuing  mygoals in the creative arts, including producing a collection of illustrated stories and work on a number of photography projects. 
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
