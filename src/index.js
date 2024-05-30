import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserProvider } from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* Här använder vi GoogleAuthProvider enligt dokumentationen för att starta scriptet */}
    <GoogleOAuthProvider clientId="1000537826432-9ahkoed6goh37p7m7nfccv755q7b8396.apps.googleusercontent.com">
      {/* Här använder man Context istället för Redux för att wrappa hela App i en Context */}
      <UserProvider>
        <Router>
          <App />
        </Router>
      </UserProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
