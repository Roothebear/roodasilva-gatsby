import React, { useState, Fragment } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import SideNavigation from "./side-navigation";

import {
  logoImg,
  mainHeader,
  mainHeaderContainer,
  iconButton,
  popUpOverlay,
  sideNavigationHeader
} from "./layout.module.css";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const openNav = () => {
    return setNavOpen(true);
  };

  const closeNav = () => {
    return setNavOpen(false);
  };

  const Popup = ({ navOpen }) => {
    return navOpen ? (
      <div className={popUpOverlay} onClick={closeNav}>
        <button
          title="Menu"
          aria-label="Close Menu"
          className={iconButton}
          onClick={closeNav}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentcolor"
            viewBox="0 0 24 24"
            className="css-ipc245"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </button>
      </div>
    ) : null;
  };

  return (
    <Fragment>
      <SideNavigation navOpen={navOpen} />
      <Popup navOpen={navOpen} />
      <header className={mainHeader}>
        <div className={mainHeaderContainer}>
        <div className={sideNavigationHeader}>
          <Link to="/">
            <StaticImage
              className={logoImg}
              alt="Website logo - stylised signature of Roo da Silva"
              src="../images/signature-heavy-weight-800px.png"
            />
          </Link>
        </div>
          {!navOpen ? <button
            title="Menu"
            aria-label="Open Menu"
            className={iconButton}
            onClick={openNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentcolor"
              viewBox="0 0 24 24"
              className="css-ipc245"
            >
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>
          </button> : <></>}
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
