import * as React from "react";
import { cardList } from "./cardDeck.module.css";
import Card from "./card";

const CardDeck = ({ data }) => {
  const cardData = data.allMdx.nodes.filter(
    (node) =>
      (node.frontmatter.variant === "projects") |
      (node.frontmatter.variant === "articles")
  );

  return (
    <ul className={cardList}>
      {cardData.map((node) => (
        <Card
          key={node.id}
          title={node.frontmatter.title}
          type={node.frontmatter.type}
          tags={node.frontmatter.tags}
          header_img_url={node.frontmatter.header_img_url}
          date={node.frontmatter.date}
          link={`/work/${node.frontmatter.name}`}
          body={node.body}
          hero_image_alt={node.frontmatter.hero_image_alt}
          hero_image_credit_link={node.frontmatter.hero_image_credit_link}
          hero_image_credit_text={node.frontmatter.hero_image_credit_text}
          hero_image={node.frontmatter.hero_image}
        />
      ))}
    </ul>
  );
};

export default CardDeck;
