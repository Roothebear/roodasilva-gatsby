import React from "react";
import { Link } from "gatsby";
import {
  mainHeader,
  websiteHeader,
  menuButton,
  headerContainer,
  hline,
  hlineContainer
} from "./header.module.css";

const Header = ({ openOverlayNav }) => {
  return (
    <header className={mainHeader}>
      <div className={headerContainer}>
        <Link to="/">
          <h1 id={websiteHeader}>roo da silva</h1>
        </Link>
        <button
          title="Menu"
          aria-label="Open Menu"
          className={menuButton}
          onClick={openOverlayNav}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            fill="#408a99"
            viewBox="0 0 24 24"
            className="css-ipc245"
          >
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        </button>
      </div>
      <div className={hlineContainer}>
        <div className={hline}></div>
      </div>
    </header>
  );
};

export default Header;
