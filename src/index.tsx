import React from "react";
import ReactDOM from "react-dom/client"; // Updated import for React 18

import App from "./App";

import "./index.scss"; // SCSS styles

// Create a root element for React 18
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
