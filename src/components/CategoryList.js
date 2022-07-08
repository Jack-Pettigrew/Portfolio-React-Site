import React from "react";

// styles
import "./CategoryList.css";

export default function CategoryList(props) {
  return (
    <div className="category-list">
      <h1 className="title">Check out more!</h1>
      <div className="list">{props.children}</div>
    </div>
  );
}
