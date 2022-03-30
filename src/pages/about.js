import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ListContainer from "../components/listContainer";
import HighlightCard from "../components/highlight-card";
import Footer from "../components/footer";

const AboutPage = ({ data }) => {
  console.log("data: ", data);

  return (
    <Layout pageTitle={"about"}>
      <section>
        <h1>Welcome!</h1>
        <p>
          Thank you for dropping by! I am a freelance full stack developer and
          love working alongside others to bring ideas to life with a range of
          front and back end technologies. This site documents my work,
          interests and continuing learning in this and related areas.
        </p>

        <p>
          My career to date has included Founder and CEO roles in the UK's
          non-profit sector alongside freelance consulting in areas related to
          my prior experience. I am most interested in how technology can
          benefit society and individuals. I hope you'll enjoy browsing the
          projects, sketches, and blog articles above.
        </p>
        <Footer />
      </section>
      <section>
        <HighlightCard />
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
          tags
        }
        id
        slug
      }
    }
  }
`;

export default AboutPage;
