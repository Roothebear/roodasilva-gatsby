import * as React from "react";
import Layout from "../components/layout";
import SocialsBar from "../components/socialsBar";
import { StaticImage } from "gatsby-plugin-image";
import { bannerImage } from "../components/bannerImage.module.css";

const ConnectPage = () => {
  return (
    <Layout pageTitle={"connect"}>
      <StaticImage
        className={bannerImage}
        alt="Message bubble made out of green and yellow paper"
        src="../images/paper-message-bubble.jpg"
      />
      <section>
        <h2>General enquiries</h2>
        <p>
          The best way to get in touch with me regarding any general enquiries
          is via email at hello@roodasilva.com, and I will do my best to get
          back to you as soon as possible.
        </p>

        <br></br>
        <br></br>
        <h2>Schedule a meeting</h2>
        <p>
          If we have spoken about catching up via zoom, it is possible to
          schedule a 15 minute meeting with me via calendly{" "}
          <a
            href="https://calendly.com/roodasilva"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          . Please leave a brief note with any further details that might be
          helpful for us.
        </p>

        <br></br>
        <br></br>
        <h2>Connect on LinkedIn and GitHub</h2>
        <p>I am always happy to connect on LinkedIn and GitHub.</p>
        <SocialsBar />
      </section>
    </Layout>
  );
};

export default ConnectPage;

export const Head = () => <title>Connect</title>;
