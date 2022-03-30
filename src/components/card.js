import { Link } from "gatsby";
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { card, cardImg, buttonPrimary, cardContainer } from "./layout.module.css";

const Card = ({ title, body, date, link }) => {
  return (
    <article className={card}>
      <StaticImage
        className={cardImg}
        alt="Website logo - stylised signature of Roo da Silva"
        src="../images/mountain-lake.jpeg"
      />
      <div className={cardContainer}>
        <h3>{title}</h3>
      </div>
      <div className={cardContainer}>
        <p>{body}</p>
        <p>{date}</p>
      </div>
      <div className={cardContainer}>
        <Link to={link}>
          <button className={buttonPrimary}>more</button>
        </Link>
      </div>
    </article>
  );
};

export default Card;
