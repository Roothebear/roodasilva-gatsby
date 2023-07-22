import React from "react";
import { bannerImage } from "./bannerImage.module.css";
import { StaticImage } from "gatsby-plugin-image";

const BannerImage = () => {
  return <StaticImage className={bannerImage} />;
};

export default BannerImage;
