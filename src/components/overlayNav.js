import React from "react";
import { Link } from "gatsby";
import {
  overlayNav,
  menuButton,
  overlayMain,
  menuButtonContainer,
  overlayLink,
} from "./overlayNav.module.css";

const OverlayNav = ({ closeOverlayNav }) => {
  return (
    <main className={overlayMain}>
      <div className={menuButtonContainer}>
        <button
          title="Menu"
          aria-label="Close Menu"
          className={menuButton}
          onClick={closeOverlayNav}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="white"
            viewBox="0 0 24 24"
            className="css-ipc245"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </button>
      </div>
      <nav className={overlayNav}>
        <ul>
          <li>
            <Link className={overlayLink} to="/" onClick={closeOverlayNav}>
              home
            </Link>
          </li>
          <li>
            <Link className={overlayLink} to="/about" onClick={closeOverlayNav}>
              about
            </Link>
          </li>
          <li>
            <Link className={overlayLink} to="/work" onClick={closeOverlayNav}>
              work (+ play)
            </Link>
          </li>
          <li>
            <Link
              className={overlayLink}
              to="/connect"
              onClick={closeOverlayNav}
            >
              connect
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default OverlayNav;
