import * as React from "react";
import { listContainer } from "./layout.module.css";
import Card from "./card";

const ListContainer = ({ data, filterParam }) => {
  const projectData = data.allMdx.nodes.filter(
    (node) => node.frontmatter.type === `${filterParam}`
  );

  return (
    <ul className={listContainer}>
      {projectData.map((node) => (
        <Card
          key={node.id}
          title={node.frontmatter.title}
          topic={node.frontmatter.topic}
          header_img_url={node.frontmatter.header_img_url}
          date={node.frontmatter.date}
          link={`/${filterParam}/${node.slug}`}
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

export default ListContainer;
