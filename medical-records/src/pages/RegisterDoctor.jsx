import React from "react";
import DoctorSignup from "../components/DoctorSignup";
import Layout from "../components/Layout";

export default function RegisterDoctor() {
  return (
    <Layout>
      <h1>Register New Doctor</h1>
      <DoctorSignup />
    </Layout>
  );
}