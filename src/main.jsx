// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import Navbar from "./components/Navbar.jsx";
// import Home from "./pages/home.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <div className="container mx-auto px-4">
//       <Navbar />
//       <Home />
//     </div>
//   </StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
