import React from "react";

export default function TechnologyList(props) {
  return (
    <div className="technology-list-container">
      <div>
        {props.data.core.map((coreTechnology, index) => {
          const comma = index !== props.data.core.length - 1 ? "," : "";
          return (
            <span>
              {coreTechnology}
              {comma}
            </span>
          );
        })}
      </div>

      <div>
        {props.data.testing.map((testingTools, index) => {
          const comma = index !== props.data.core.length - 1 ? "," : "";
          return (
            <span>
              {testingTools}
              {comma}
            </span>
          );
        })}
      </div>
    </div>
  );
}
