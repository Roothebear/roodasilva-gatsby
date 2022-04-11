import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  socialMediaContainer,
  socialIcon,
} from "../components/layout.module.css";

const SocialBar = () => {
  return (
    <div className={socialMediaContainer} role="region">
      <div className="iconContainer">
        <a className="plainLink" href="https://www.linkedin.com/in/roodasilva/">
          <StaticImage
            className={socialIcon}
            id="linkedInIcon"
            src="../images/LI-In-Bug.png"
            alt="linked-in-icon"
          />
        </a>
        <a className="plainLink" href="https://github.com/Roothebear">
          <StaticImage
            className={socialIcon}
            id="gitHubIcon"
            src="../images/GitHub-Mark-120px-plus.png"
            alt="github-icon"
          />
        </a>
        {/* <a className="plainLink" href="https://github.com/Roothebear">
          <StaticImage
            className={socialIcon}
            id="twitterIcon"
            src="../images/Twitter social icons - circle - blue.png"
            alt="twitter-icon"
          />
        </a> */}
      </div>
    </div>
  );
};

export default SocialBar;
