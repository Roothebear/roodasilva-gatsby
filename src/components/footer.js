import React from "react";
import { mainFooter } from "./footer.module.css";
import { hlineContainer, hline, footerInfo } from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={mainFooter}>
      <div className={hlineContainer}>
        <div className={hline}></div>
      </div>
      <small className={footerInfo}>
        {" "}
        &#169; 2021 Roo da Silva | Built from scratch with Gatsby.
      </small>
    </footer>
  );
};

export default Footer;
