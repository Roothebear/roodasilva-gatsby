import React from "react";
import { Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import { tagList, tag, strong } from "./templates.module.css";
import Layout from "../components/layout";

const ProjectTemplate = ({
  data: {
    mdx: {
      frontmatter: { title, tags },
      body,
    },
  },
}) => {
  return (
    <Layout pageTitle={"portfolio"}>
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
      <Link to="/portfolio" ><p>Back to portfolio</p></Link>
      </section>
    </Layout>
  );
};

export default ProjectTemplate;
