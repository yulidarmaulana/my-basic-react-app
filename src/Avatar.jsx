import reactLogo from "./assets/react.svg";
import "./App.css";
import { getImageUrl, Card } from "./utils";

// Passing Props to a Component

function Avatar({ person, size }) {
  return (
    <div className="app">
      <img className="avatar" src="https://i.imgur.com/1bX5QH6.jpg" alt="Lin Lanying" width={100} height={100} />;
    </div>
  )
  
}

export default Avatar;
