import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import { bannerImg, bannerSection } from "../components/layout.module.css";
import SocialBar from "../components/socialBar";

const ConnectPage = ({ data }) => {
  console.log("data: ", data);

  return (
    <Layout pageTitle={"connect"}>
      <section className={bannerSection}>
        <StaticImage
          className={bannerImg}
          alt="Website logo - stylised signature of Roo da Silva"
          src="../images/mountain-lake.jpeg"
        />
      </section>
      <section>
        <h1>Get in touch, I'd love to hear from you!</h1>
        {/* <p>
          Teach me something, ask a question, suggest working together, or
          anything else that comes to mind! I’ll do my best to get back to you
          asap.
        </p> */}
        <a href="mailto: hello@roodasilva.com">hello@roodasilva.com</a>
        <br></br>
        <SocialBar />
      </section>
    </Layout>
  );
};

export default ConnectPage;
