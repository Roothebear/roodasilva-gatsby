import React, { Fragment } from "react";
import { graphql } from "gatsby";
import ArticleTemplate from "../../templates/articleTemplate";
import ProjectTemplate from "../../templates/projectTemplate";

const MdxPage = ({
  data,
  data: {
    mdx: {
      frontmatter: { variant },
    },
  },
  children,
}) => {
  const templates = {
    articles: <ArticleTemplate data={data} children={children} />,
    projects: <ProjectTemplate data={data} children={children} />,
  };

  return <Fragment>{templates[variant] ? templates[variant] : null}</Fragment>;
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
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
      body
    }
  }
`;

export default MdxPage;
