import React, { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

export default function SearchPatient({ onSelectPatient, doctorId }) {
  const [lastName, setLastName] = useState("");
  const [patients, setPatients] = useState([]);

  const handleSearch = async () => {
    if (!lastName.trim()) return alert("Enter a last name.");
    if (!doctorId) return alert("You must be logged in as a doctor.");

    try {
      const patientsRef = collection(db, "Patients");
      const q = query(patientsRef, where("last_name", "==", lastName.trim()));
      const snapshot = await getDocs(q);

      const results = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      if (results.length === 0) {
        alert("No patients found with that last name.");
      }

      setPatients(results);
      onSelectPatient(null);
    } catch (error) {
      console.error("Error searching patients:", error);
      alert("Unable to search patients. Check your permissions.");
    }
  };

  return (
    <div>
      <form style={{ width: "100%", maxWidth: 600, marginTop: "1rem" }}
        onSubmit={(e) => {
          e.preventDefault(); // prevents page reload
          handleSearch();
        }}
      >
        <label htmlFor="lastName" className="block mb-1 font-medium">
          Search Patient by Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button
          type="submit"
          disabled={!doctorId}
        >
          Search
        </button>
      </form>

      {patients.length > 0 && (
        <form style={{ width: "100%", maxWidth: 600, marginTop: "1rem" }}>
          <label className="block mb-1 font-medium">Select Patient:</label>
          <select
            className="border p-1 rounded w-full"
            onChange={(e) =>
              onSelectPatient(patients.find((p) => p.id === e.target.value))
            }
            defaultValue=""
          >
            <option value="">-- Choose Patient --</option>
            {patients.map((p) => (
              <option key={p.id} value={p.id}>
                {p.first_name} {p.last_name} — DOB:{" "}
                {p.date_of_birth?.toDate
                  ? p.date_of_birth.toDate().toLocaleDateString()
                  : "N/A"}
              </option>
            ))}
          </select>
        </form>
      )}
    </div>
  );
}
