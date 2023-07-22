import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  socialMediaContainer,
  socialIcon,
} from "../components/socialsBar.module.css";

const SocialsBar = () => {
  return (
    <div className={socialMediaContainer} role="region">
        <a
          className="plainLink"
          href="https://www.linkedin.com/in/roodasilva/"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            className={socialIcon}
            id="linkedInIcon"
            src="../images/icons/LI-In-Bug.png"
            alt="linked-in-icon"
          />
        </a>
        <a
          className="plainLink"
          href="https://github.com/Roothebear"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            className={socialIcon}
            id="gitHubIcon"
            src="../images/icons/GitHub-Mark-120px-plus.png"
            alt="github-icon"
          />
        </a>
        {/* <a className="plainLink" href="https://github.com/Roothebear" target="_blank" rel="noreferrer">
          <StaticImage
            className={socialIcon}
            id="twitterIcon"
            src="../images/Twitter social icons - circle - blue.png"
            alt="twitter-icon"
          />
        </a> */}
    </div>
  );
};

export default SocialsBar;
