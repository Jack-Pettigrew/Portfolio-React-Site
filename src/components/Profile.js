import "./Profile.css";
import image from "../logo.webp"

export default function Profile() {
  return (
    <div className="profile">
      <div className="info">
        <img src={image} alt="Profile Picture" />
        <h2>Jack Pettigrew</h2>
      </div>
      <div className="subtitle">
        <h3>Gamer.</h3>
        <h3>Game Developer.</h3>
        <h3>Nerd.</h3>
      </div>
    </div>
  );
}
