import * as React from "react";
import { listContainer } from "./layout.module.css";
import Card from "./card";

const ListContainer = ({ data, filterParam }) => {
  const projectData = data.allMdx.nodes.filter(
    (node) => node.frontmatter.variant === `${filterParam}`
  );

  

  return (
    <ul className={listContainer}>
      {projectData.map((node) => (
        <Card
          key={node.id}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          link={`/${filterParam}/${node.slug}`}
        />
      ))}
    </ul>
  );
};

export default ListContainer;
