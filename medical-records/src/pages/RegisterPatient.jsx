import React from "react";
import RegistrationForm from "../components/RegistrationForm";
import Layout from "../components/Layout";


export default function RegisterPatient() {
  return (
    <Layout>
      <h1>Register New Patient</h1>
      <RegistrationForm />
    </Layout>
  );
}