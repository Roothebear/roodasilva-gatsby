import React, { useState } from "react";
import Header from "./header";
import { pageContainer, layoutMain } from "./layout.module.css";
import "./layout.module.css";
import Footer from "./footer";
import OverlayNav from "./overlayNav";
import SideNav from "./sideNav";

const Layout = ({ pageTitle, children }) => {
  const [overlayNavOpen, setOverlayNavOpen] = useState(false);

  const openOverlayNav = () => {
    return setOverlayNavOpen(true);
  };

  const closeOverlayNav = () => {
    return setOverlayNavOpen(false);
  };

  return overlayNavOpen ? (
    <div className={pageContainer}>
      <OverlayNav closeOverlayNav={closeOverlayNav} />
    </div>
  ) : (
    <div className={pageContainer}>
      <title>{pageTitle}</title>
      <Header openOverlayNav={openOverlayNav} />
      <SideNav />
      <main className={layoutMain}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
