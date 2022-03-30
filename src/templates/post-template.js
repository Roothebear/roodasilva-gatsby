import React from "react";
import { Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import { tagList, tag } from "./templates.module.css";
import Layout from "../components/layout";

const PostTemplate = ({
  data: {
    mdx: {
      frontmatter: { title, tags },
      body,
    },
  },
}) => {
  return (
    <Layout pageTitle={"articles"}>
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
      </section>
      <Link to="/articles">
        <p>Articles</p>
      </Link>
    </Layout>
  );
};

export default PostTemplate;
