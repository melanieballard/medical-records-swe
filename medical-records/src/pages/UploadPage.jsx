import React from "react";
import UploadDocument from "../components/UploadDocument";
import Layout from "../components/Layout";


export default function UploadPage() {
  return (
    <Layout>
      <h1>Upload Patient Document</h1>
      <UploadDocument />
    </Layout>
  );
}