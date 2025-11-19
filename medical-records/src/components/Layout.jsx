import React from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {

  return (
    <div className="layout">
      <Sidebar />
      <div className="content-card">
        {children}
      </div>
    </div>
  );
}
