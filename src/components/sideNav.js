import React from "react";
import { Link } from "gatsby";
import { sideNav, sideNavList, sideNavLink } from "./sideNav.module.css";

const SideNav = () => {
  return (
    <nav className={sideNav}>
      <ul className={sideNavList}>
        <li>
          <Link to="/" className={sideNavLink}>
            home
          </Link>
        </li>
        <li>
          <Link to="/about" className={sideNavLink}>
            about
          </Link>
        </li>
        <li>
          <Link to="/work" className={sideNavLink}>
            work (+ play)
          </Link>
        </li>
        <li>
          <Link to="/connect" className={sideNavLink}>
            connect
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
