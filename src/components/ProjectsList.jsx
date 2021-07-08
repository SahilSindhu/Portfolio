import React from "react";

export default function ProjectsList(props) {
  return (
    <div>
        {props.data.map((project, index) => {
          return <div>{project.name}</div>;
        })}
    </div>
  );
}
