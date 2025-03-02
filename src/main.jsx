import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client' in React 18
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // Use createRoot

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
