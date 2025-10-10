import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Database from "./components/Database";

export default function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4 space-x-4">
          <Link to="/">Home</Link>
          <Link to="/data">Database</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<Database />} />
        </Routes>
      </div>
    </Router>
  );
}
