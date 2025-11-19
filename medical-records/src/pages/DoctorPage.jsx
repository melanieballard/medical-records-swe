// src/pages/DoctorPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function DoctorPage() {
  return (
    <Layout>
      {/* Header */}
      <header style={{ marginBottom: "2rem" }}>
        <h1>Doctor Dashboard</h1>
      </header>

      {/* Cards Container */}
      <div className="card-container">
        {/* Card 1 - Register Patient */}
        <Link to="/register-patient" className="card">
          <h2>Register Patient</h2>
          <p>Add new patients to the system.</p>
        </Link>

        {/* Card 2 - Upload Document */}
        <Link to="/upload" className="card">
          <h2>Upload Documents</h2>
          <p>Attach medical files to a patient’s record.</p>
        </Link>

        {/* Card 3 - View Files */}
        <Link to="/view-files" className="card">
          <h2>View Patient Files</h2>
          <p>Search patients and view uploaded records.</p>
        </Link>

        {/* Card 4 - Register Doctor */}
        <Link to="/register-doctor" className="card">
          <h2>Register Doctor</h2>
          <p>Create credentials for new doctors.</p>
        </Link>
      </div>
    </Layout>
  );
}
