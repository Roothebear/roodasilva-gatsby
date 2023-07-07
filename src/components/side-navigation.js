import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import {
  navLinks,
  navLinkItem,
  logoImg,
  mainHeaderNav,
  sideNavigationContainer,
  sideNavigationContainerOpen,
  sideNavigationHeader,
  sideBarLink
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
            <Link to="/" className={sideBarLink}>
              home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={sideBarLink}>
              about
            </Link>
          </li>
          {/* <li className={navLinkItem}>
            <Link to="/portfolio" className={sideBarLink}>
              portfolio
            </Link>
          </li>
          <li>
            <Link to="/articles" className={sideBarLink}>
              articles
            </Link>
          </li> */}
          <li>
            <Link to="/connect" className={sideBarLink}>
              connect
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
            <Link to="/" className={sideBarLink}>
              home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={sideBarLink}>
              about
            </Link>
          </li>
          {/* <li className={navLinkItem}>
            <Link to="/portfolio" className={sideBarLink}>
              portfolio
            </Link>
          </li>
          <li>
            <Link to="/articles" className={sideBarLink}>
              articles
            </Link>
          </li> */}
          <li>
            <Link to="/connect" className={sideBarLink}>
              connect
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNavigation;
