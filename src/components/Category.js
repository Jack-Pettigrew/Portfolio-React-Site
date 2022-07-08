// styles
import "./Category.css";

export default function Category({ catgoryName }) {
  return (
      <div className="category">
          <h3>All Things</h3>
          <h1>{catgoryName}</h1>
          <img src={"/actionshot.jpg"} alt="" />
        </div>
  )
}
