import { createRoot } from "react-dom/client";
import ReactGA from "react-ga4";
import App from "./app/App.tsx";
import "./styles/index.css";

// Google Analytics Initialize
ReactGA.initialize("G-RWQV1ZL48N");

// First Page View
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
});

createRoot(document.getElementById("root")!).render(<App />);