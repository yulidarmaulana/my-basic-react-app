import reactLogo from "./assets/react.svg";
import "./App.css";

function Gallery() {
  const person = {
    name: "Gregorio Y. Zara",
    theme: {
        backgoundColor: 'blue',
        color:'white',

    }
  };

  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const desc = "Gregorio Y. Zara";

  return (
    <div className="App">
      <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />
      <h3 className="read-the-docs">Amazing Scientists</h3>

      {/* <img className="avatar" src={avatar} alt={desc} /> */}
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img className="avatar" src={avatar} alt={desc} />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    </div>
  );
}

export default Gallery;
