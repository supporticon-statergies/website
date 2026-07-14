import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root")!;
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <App />);
} else {
  createRoot(rootElement).render(<App />);
}

// Register Service Worker in production to cache static assets
if ("serviceWorker" in navigator && import.meta.env.PROD) {
  window.addEventListener("load", () => {
    const swUrl = `${import.meta.env.BASE_URL}sw.js`;
    navigator.serviceWorker
      .register(swUrl)
      .then((reg) => {
        console.log("ServiceWorker registered successfully with scope:", reg.scope);
      })
      .catch((err) => {
        console.warn("ServiceWorker registration failed:", err);
      });
  });
}
