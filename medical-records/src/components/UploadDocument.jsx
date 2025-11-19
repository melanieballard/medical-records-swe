import React, { useState, useEffect, useRef } from "react"; // <-- import useRef
import { auth, db, storage } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import SearchPatient from "./SearchPatient";

export default function UploadDocument() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [doctorId, setDoctorId] = useState(null);

  const fileInputRef = useRef(null); // <-- define the ref

  useEffect(() => {
    if (auth.currentUser) {
      setDoctorId(auth.currentUser.uid);
    }
  }, []);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first.");
    if (!selectedPatient) return alert("Please select a patient first.");
    if (!doctorId) return alert("You must be logged in as a doctor.");

    const patientId = selectedPatient.id;
    const filePath = `patients/${patientId}/${file.name}`;
    const storageRef = ref(storage, filePath);
    const uploadTask = uploadBytesResumable(storageRef, file);

    setUploading(true);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const pct = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(Math.round(pct));
      },
      (error) => {
        console.error("Upload error:", error);
        alert("Upload failed.");
        setUploading(false);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          await addDoc(collection(db, `Patients/${patientId}/files`), {
            name: file.name,
            url: downloadURL,
            uploadedBy: doctorId,
            uploadedAt: serverTimestamp(),
          });

          alert("Upload complete!");
          setFile(null);
          setProgress(0);
        } catch (error) {
          console.error("Error saving file metadata:", error);
          alert("Failed to save file information.");
        } finally {
          setUploading(false);
        }
      }
    );
  };

  return (
    <div>
      <SearchPatient doctorId={doctorId} onSelectPatient={setSelectedPatient} />

      <div style={{ marginTop: "1rem", width: "100%" }}>
        <form
          style={{ width: "100%", maxWidth: 600 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <label>Select File:</label>

          <input
            type="file"
            accept="image/*,.pdf"
            onChange={handleFileChange}
            ref={fileInputRef} // <-- attach ref
            style={{ display: "none" }}
          />

          <button
            type="button"
            onClick={() => fileInputRef.current && fileInputRef.current.click()}
            className="form-button"
            style={{ marginTop: "0.5rem" }}
            disabled={!doctorId || !selectedPatient}
          >
            {file ? `Selected: ${file.name}` : "Choose File"}
          </button>

          {uploading && <p style={{ marginTop: "0.5rem" }}>Progress: {progress}%</p>}

          <button
            type="button"
            onClick={handleUpload}
            disabled={uploading || !doctorId || !selectedPatient || !file}
            className="form-button"
            style={{ marginTop: "0.5rem" }}
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </form>
      </div>
    </div>
  );
}
