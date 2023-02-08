import reactLogo from "./assets/react.svg";
import "./App.css";

function Gallery() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const desc = "Gregorio Y. Zara";

  return (
    <div className="App">
      <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />
      <h3 className="read-the-docs">Amazing Scientists</h3>

      <img className="avatar" src={avatar} alt={desc} />
    </div>
  );
}

export default Gallery;
