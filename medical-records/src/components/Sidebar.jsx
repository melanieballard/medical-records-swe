import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className={`sidebar ${open ? "open" : ""}`}>
      {/* Toggle button */}
      <button
        className="toggle-btn"
        onClick={() => setOpen(!open)}
      >
        {open ? "◀" : "▶"}
      </button>

      {/* Navigation links (only visible when expanded) */}
      <Link
        to="/doctor"
        className={location.pathname === "/doctor" ? "active" : ""}
      >
        Home
      </Link>

      <Link
        to="/register-patient"
        className={location.pathname === "/register-patient" ? "active" : ""}
      >
        Register Patient
      </Link>

      <Link
        to="/upload"
        className={location.pathname === "/upload" ? "active" : ""}
      >
        Upload Document
      </Link>

      <Link
        to="/view-files"
        className={location.pathname === "/view-files" ? "active" : ""}
      >
        View Files
      </Link>

      <Link
        to="/register-doctor"
        className={location.pathname === "/register-doctor" ? "active" : ""}
      >
        Register Doctor
      </Link>
    </div>
  );
}
