import React from "react";
import { Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { tagList, tag } from "./templates.module.css";
import Layout from "../components/layout";
import { bannerSection } from "../components/layout.module.css";

const PostTemplate = ({
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
    <Layout pageTitle={"articles"}>
        <GatsbyImage
          className={bannerSection}
          image={image}
          alt={data.mdx.frontmatter.hero_image_alt}
        />

      <section>
        <h1>{title}</h1>
        <ul className={tagList}>
          {tags
            ? tags.map((e, index) => {
                return (
                  <li className={tag} key={index}>
                    {e}
                  </li>
                );
              })
            : null}
        </ul>
        <MDXProvider>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      <Link to="/articles">
        Back to articles
      </Link>
      </section>
    </Layout>
  );
};

export default PostTemplate;
