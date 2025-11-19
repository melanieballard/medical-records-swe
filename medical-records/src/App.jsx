
// src/App.jsx
// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import PatientPage from "./pages/PatientPage";
import DoctorPage from "./pages/DoctorPage";
import RegisterDoctor from "./pages/RegisterDoctor";
import UploadPage from "./pages/UploadPage";
import ViewFilesPage from "./pages/ViewFilesPage";
import RegisterPatient from "./pages/RegisterPatient";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/patient" element={<PatientPage />} />
      <Route path="/doctor" element={<DoctorPage />} />
      <Route path="/register-patient" element={<RegisterPatient />} />
      <Route path="/register-doctor" element={<RegisterDoctor />} />
      <Route path="/upload" element={<UploadPage />} />
      <Route path="/view-files" element={<ViewFilesPage />} />
    </Routes>
  );
}

export default App;

