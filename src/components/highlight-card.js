import { Link } from "gatsby";
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { card, cardImg, buttonPrimary } from "./layout.module.css";


const HighlightCard = ({ title, body, date, link }) => {
  return (
    <article className={card}>
    <StaticImage
            className={cardImg}
            alt="Website logo - stylised signature of Roo da Silva"
            src="../images/mountain-lake.jpeg"
          />
      <h3>Highlight Card</h3>
      <p>Welcome!</p>
      <Link to="/">
        <button className={buttonPrimary}>more</button>
      </Link>
    </article>
  );
};

export default HighlightCard;

