import { Link } from "gatsby";
import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  card,
  cardImg,
  buttonPrimary,
  cardContainer,
} from "./layout.module.css";

const Card = ({
  title,
  body,
  date,
  link,
  type,
  hero_image_alt,
  hero_image_credit_link,
  hero_image_credit_text,
  hero_image,
}) => {
  const image = getImage(hero_image);

  return (
    <Link to={link}>
      <article className={card}>
        <GatsbyImage className={cardImg} image={image} alt={hero_image_alt} />
        <div className={cardContainer}>
          <h3>{title}</h3>
          <p>{date}</p>
          <p>{type}</p>
          <button className={buttonPrimary}>more</button>
        </div>
      </article>
    </Link>
  );
};

export default Card;
