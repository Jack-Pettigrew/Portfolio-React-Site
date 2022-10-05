// styles
import "./Category.css";

import { Link } from "react-router-dom";

export default function Category({ catgoryName, categoryUrl }) {
  return (
    <Link className="category" to={categoryUrl ? categoryUrl : "/"}>
      <div>
        <h3>All Things</h3>
        <h1>{catgoryName}</h1>
        <img src={"images/scifihallway.png"} alt="" />
      </div>
    </Link>
  );
}
