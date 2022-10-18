import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Onu from "./Pages/Onu";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from './Pages/Projects'

export default function App() {
  return (
    <Router>
      <nav class='navbar'>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to ='/'>
        </Link>
        <Link to="/Onu">
          <li>Onu</li>
        </Link>
        <Link to="/About">
          <li>About</li>
        </Link>
        <Link to="/Projects">
          <li>Projects</li>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Onu" element={<Onu />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}
