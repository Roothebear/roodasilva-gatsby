import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import {
  navLinks,
  navLinkItem,
  navLinkText,
  logoImg,
  mainHeaderNav,
  sideNavigationContainer,
  sideNavigationContainerOpen,
  sideNavigationHeader,
} from "./layout.module.css";

const SideNavigation = ({ navOpen }) => {
  console.log("navOpen: ", navOpen);
  return navOpen ? (
    <div className={sideNavigationContainerOpen}>
      <div className={sideNavigationHeader}>
        <Link to="/">
          <StaticImage
            className={logoImg}
            alt="Website logo - stylised signature of Roo da Silva"
            src="../images/signature-heavy-weight-800px.png"
          />
        </Link>
      </div>
      <nav className={mainHeaderNav}>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              about
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/portfolio" className={navLinkText}>
              portfolio
            </Link>
          </li>
          <li>
            <Link to="/articles" className={navLinkText}>
              articles
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  ) : (
    <div className={sideNavigationContainer}>
      <div className={sideNavigationHeader}>
        <Link to="/">
          <StaticImage
            className={logoImg}
            alt="Website logo - stylised signature of Roo da Silva"
            src="../images/signature-heavy-weight-800px.png"
          />
        </Link>
      </div>
      <nav className={mainHeaderNav}>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              about
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/portfolio" className={navLinkText}>
              portfolio
            </Link>
          </li>
          <li>
            <Link to="/articles" className={navLinkText}>
              articles
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNavigation;
