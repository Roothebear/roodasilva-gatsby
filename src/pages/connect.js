import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Footer from "../components/footer";
import { bannerImg, bannerSection } from "../components/layout.module.css";

const ConnectPage = ({ data }) => {
  console.log("data: ", data);

  return (
    <Layout pageTitle={"connect"}>
      <section className={bannerSection}>
        <StaticImage
          className={bannerImg}
          alt="Website logo - stylised signature of Roo da Silva"
          src="../images/cat-cone.jpeg"
        />
      </section>
      <section>
        <h1>Welcome!</h1>
        <p>
          Connect with me here:
        </p>

      </section>
      <Footer />
    </Layout>
  );
};

export default ConnectPage;
