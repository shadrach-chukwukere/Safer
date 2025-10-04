import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/righteous";
import "@fontsource/inter";
import "./index.css";
import App from "./App.tsx";
import "react-loading-skeleton/dist/skeleton.css";
import ScrollToTop from "./components/ScrollToTop.tsx";
import { Toast } from "./components/Toast.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <Toast/>
    <ScrollToTop/>
      <App />
    </BrowserRouter>
  </StrictMode>
);
