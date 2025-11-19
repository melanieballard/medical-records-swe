import React from "react";
import ViewPatientFiles from "../components/ViewPatientFiles";
import Layout from "../components/Layout";

export default function ViewFilesPage() {
  return (
    <Layout>
      <h1>View Patient Files</h1>
      <ViewPatientFiles />
    </Layout>
  );
}