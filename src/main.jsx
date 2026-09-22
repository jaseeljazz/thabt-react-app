import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Stop the browser from restoring your old scroll position on refresh
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);