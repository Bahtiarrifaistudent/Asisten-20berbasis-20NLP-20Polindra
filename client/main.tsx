import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";

// Ambil elemen root
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element (#root) tidak ditemukan");
}

// Render React App
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
