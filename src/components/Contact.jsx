import React from "react";

export default function Contact(props) {
  return (
    <div>
      <div> email : {props.data.email}</div>
      <div> Git : {props.data.github}</div>
    </div>
  );
}
