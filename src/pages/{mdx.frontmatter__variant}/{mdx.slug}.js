import React, { Fragment } from "react";
import { graphql } from "gatsby";
import PostTemplate from "../../templates/post-template";
import ProjectTemplate from "../../templates/project-template";

const MdxPage = ({
  data,
  data: {
    mdx: {
      frontmatter: { type },
    },
  },
}) => {
  const templates = {
    article: <PostTemplate data={data} />,
    project: <ProjectTemplate data={data} />,
  };

  return <Fragment>{templates[type] ? templates[type] : null}</Fragment>;
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        type
        topic
        hero_image_alt
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        tags
      }
      body
    }
  }
`;

export default MdxPage;
