import React from "react";
import { Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { tagList, tag } from "./templates.module.css";
import Layout from "../components/layout";
import { bannerSection } from "../components/layout.module.css";

const ProjectTemplate = ({
  data,
  data: {
    mdx: {
      frontmatter: { title, tags },
      body,
    },
  },
}) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle={"CHANGE"}>
        <GatsbyImage
          className={bannerSection}
          image={image}
          alt={data.mdx.frontmatter.hero_image_alt}
        />
      <section>
        <h1>{title}</h1>
        <MDXProvider>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
        <ul className={tagList}>
          {tags
            ? tags.map((e, index) => {
                return (
                  <li key={index} className={tag}>
                    {e}
                  </li>
                );
              })
            : null}
        </ul>
        <Link to="/portfolio">
          Back to portfolio
        </Link>
      </section>
    </Layout>
  );
};

export default ProjectTemplate;
