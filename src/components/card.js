import { Link } from "gatsby";
import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  cardBox,
  cardContainer,
  cardImg,
  cardInfo,
  cardTitle,
} from "./card.module.css";
import TagList from "./tagList";

const Card = ({
  title,
  date,
  link,
  type,
  hero_image_alt,
  hero_image,
  tags,
}) => {
  const image = getImage(hero_image);

  return (
    <article className={cardBox}>
      <Link to={link}>
        <GatsbyImage className={cardImg} image={image} alt={hero_image_alt} />
      </Link>
      <div className={cardContainer}>
        <Link to={link}>
          <h3 className={cardTitle}>{title}</h3>
          <small className={cardInfo}>
            {date} | {type}
          </small>
        </Link>
        <TagList tags={tags} />
      </div>
    </article>
  );
};

export default Card;
