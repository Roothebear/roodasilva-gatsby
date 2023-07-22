import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import TagList from "../components/tagList";
import Layout from "../components/layout";
import { bannerImage } from "../components/bannerImage.module.css";

const ArticleTemplate = ({
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
        <TagList tags={tags} />
        <br></br>
        {children}
        <Link to="/work">
          Back to work
        </Link>
      </section>
    </Layout>
  );
};

export default ArticleTemplate;
