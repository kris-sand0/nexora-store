import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const rootElement = document.getElementById("root");

// Verificação defensiva de montagem no DOM
if (!rootElement) {
  throw new Error("Elemento raiz '#root' não foi encontrado no documento HTML.");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
