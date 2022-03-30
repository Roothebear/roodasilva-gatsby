import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Footer from "./footer";
import Header from "./header";

import {
  appContainer
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `);

  return (
    <div className={appContainer}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <Header />
      <main>
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
