import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Snowfall from "react-snowfall";
import Confetti from "react-confetti-boom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Snowfall
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
      }}
    />
    <App />
  </StrictMode>
);
