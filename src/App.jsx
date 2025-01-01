import { useState } from "react";
import Hackstreet from "./assets/Hackstreet.png";
import Confetti from "react-confetti-boom";
import "./App.css";

function App() {
  const [hoveredBox, setHoveredBox] = useState(null);
  const [boxPosition, setBoxPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  const handleMouseEnter = (boxIndex, event) => {
    const box = event.currentTarget.getBoundingClientRect();
    setBoxPosition({
      top: event.clientY,
      left: box.left,
      width: box.width,
      height: box.height,
    });
    setHoveredBox(boxIndex);
  };

  const handleMouseLeave = () => {
    setHoveredBox(null);
  };

  return (
    <div className="main">
      <div className="toppart"></div>
      <h1 className="events-heading">
        <center>EVENTS</center>
      </h1>

      <div className="content">
        <div className="mainbox">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="box"
                onMouseEnter={(e) => handleMouseEnter(index, e)}
                onMouseLeave={handleMouseLeave}
              >
                <img className="poster" src={Hackstreet} alt="hackstreetimg" />
                <h2>HACKSTREET 2.0</h2>
                <h3>4th Feb 2025</h3>
                <button>Register</button>
              </div>
            ))}
        </div>
      </div>

      <div className="bottompart"></div>

      {/* Confetti positioned around hovered box */}
      {hoveredBox !== null && (
        <Confetti
          mode="boom"
          particleCount={200}
          colors={[
            "#ff577f",
            "#ff884b",
            "#ffd384",
            "#fff9b0",
            "#022d55",
            "#223f65",
          ]}
          shapeSize={20}
          spreadDeg={60}
          style={{
            pointerEvents: "none",
          }}
          x={(boxPosition.left + boxPosition.width / 2) / window.innerWidth}
          y={boxPosition.top / window.innerHeight}
          launchSpeed={1.4}
        />
      )}
    </div>
  );
}

export default App;
