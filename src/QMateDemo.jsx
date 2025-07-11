import React from "react"; // <--- NECESSARIO
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Deal from "./pages/Deal";
import Code from "./pages/Code";
import Secret from "./pages/Secret";
import logo from "./assets/logo.png";

// 🎨 Colori di sfondo forniti da te
const bgColors = [
  //"#dbf112",  // brand-yellow
  "#B00076",  // brand-fucsia
  "#00CFFF",  // brand-azzurro
  "#A2FF00",  // brand-lime
  "#FF4ECB",  // brand-rosa
  "#0F0F0F",  // brand-dark
  "#FF700a"   // brand-orange
];


export default function QMateDemo() {

const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgColors.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (

    <div
      className="min-h-screen text-white flex flex-col items-center justify-center transition-colors duration-1000"
      style={{ backgroundColor: bgColors[bgIndex] }}
    >
      {/* LOGO */}
      <div className="text-center">
        <img
          src={logo}
          alt="QMate Logo"
          className="mx-auto"
        />
      </div>

    <Router>
      <Routes>
        <Route path="/deal/:step" element={<Deal />} />
        <Route path="/code/:step" element={<Code />} />
        <Route path="/secret/:step" element={<Secret />} />
      </Routes>
    </Router>
     </div>
  );
}