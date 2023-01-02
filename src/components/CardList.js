import React from "react";

export default function CategoryList(props) {
  return (
    <div className="category-list">
      <h1 className="title">Check out my projects!</h1>
      <div className="list">{props.children}</div>
    </div>
  );
}
