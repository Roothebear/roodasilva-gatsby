import * as React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { bannerImage } from "../components/bannerImage.module.css";
import CardDeck from "../components/cardDeck";

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle={"home"}>
      <StaticImage
        className={bannerImage}
        alt="Website logo - stylised signature of Roo da Silva"
        src="../images/roo-portrait-colour.jpg"
      />
      <section>
        <h1>Welcome to my newly launched personal website.</h1>
        <p>
          Creating and maintaining an online collection of articles,
          projects, and other resources has been a goal for a number of years. Of course, more pressing
          matters tend to come to the fore! Now, in the summer of 2024, perhaps I'll finally get there...!
        </p>
        <p>
          I look forward to gradually updating 'work (+ play)' in due course.
          Otherwise, for a potted history of my background in community focused
          work and more recently the arts, please do read more{" "}.
          <Link to="/about">here</Link>.
        </p>
      </section>
      <section>
        <h2>Recent</h2>
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

export default IndexPage;

export const Head = () => <title>Home</title>;
