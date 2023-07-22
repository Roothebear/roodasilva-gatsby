import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import TagList from "../components/tagList";
import Layout from "../components/layout";
import { bannerImage } from "../components/bannerImage.module.css";

const ProjectTemplate = ({
  data,
  data: {
    mdx: {
      frontmatter: { title, tags, name },
    },
  },
  children,
}) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle={name}>
      <GatsbyImage
        className={bannerImage}
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      <section>
        <h1>{title}</h1>
        {children}
        <TagList tags={tags} />
        <br></br>
        <Link to="/work">Back to work</Link>
      </section>
    </Layout>
  );
};

export default ProjectTemplate;
