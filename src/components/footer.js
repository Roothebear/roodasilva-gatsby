import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { icon } from "./footer.module.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="iconContainer">
        <a className="plainLink" href="https://github.com/Roothebear">
          <StaticImage
            className={icon}
            id="gitHubIcon"
            src="../images/GitHub-Mark-120px-plus.png"
            alt="github-icon"
          />
        </a>
        <a className="plainLink" href="https://www.linkedin.com/in/roodasilva/">
          <StaticImage
            className={icon}
            id="linkedInIcon"
            src="../images/LI-In-Bug.png"
            alt="linked-in-icon"
          />
        </a>
        <a className="plainLink" href="https://github.com/Roothebear">
          <StaticImage
            className={icon}
            id="twitterIcon"
            src="../images/Twitter social icons - circle - blue.png"
            alt="twitter-icon"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
