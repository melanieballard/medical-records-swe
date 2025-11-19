import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import SearchPatient from "./SearchPatient";

export default function ViewPatientFiles() {
  const [doctorId, setDoctorId] = useState(null); // set via auth
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  // Get current doctor ID
  useEffect(() => {
    if (auth.currentUser) {
      setDoctorId(auth.currentUser.uid);
    }
  }, []);

  // Fetch files for selected patient
  useEffect(() => {
    const fetchFiles = async () => {
      if (!selectedPatient) return;

      try {
        const filesRef = collection(db, `Patients/${selectedPatient.id}/files`);
        const snapshot = await getDocs(filesRef);

        const fetchedFiles = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFiles(fetchedFiles);
        setSelectedFile(null); // reset selected file
      } catch (error) {
        console.error("Error fetching files:", error);
        alert("Failed to fetch files.");
      }
    };

    fetchFiles();
  }, [selectedPatient]);

  return (
    <div>
      {/* Patient Search */}
      <SearchPatient doctorId={doctorId} onSelectPatient={setSelectedPatient} />

      {/* Files Dropdown */}
      {files.length > 0 && (
        <form style={{ width: "100%", maxWidth: 600, marginTop: "1rem" }}>
          <label>Select File:</label>
          <select
            onChange={(e) =>
              setSelectedFile(files.find((f) => f.id === e.target.value))
            }
            defaultValue=""
          >
            <option value="">-- Choose File --</option>
            {files.map((f) => (
              <option key={f.id} value={f.id}>
                {f.name} — Uploaded:{" "}
                {f.uploadedAt?.toDate
                  ? f.uploadedAt.toDate().toLocaleString()
                  : "N/A"}
              </option>
            ))}
          </select>
        </form>
      )}

      {/* Render selected file */}
      {selectedFile && (
        <div style={{ marginTop: "1rem", width: "100%" }}>
          {selectedFile.name.endsWith(".pdf") ? (
            <iframe
              src={selectedFile.url}
              width="100%"
              height="600px"
              title={selectedFile.name}
              style={{ border: "none", borderRadius: "6px" }}
            />
          ) : (
            <img
              src={selectedFile.url}
              alt={selectedFile.name}
              style={{
                width: "100%",
                maxHeight: "600px",
                objectFit: "contain",
                borderRadius: "6px",
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}