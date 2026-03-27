"use client";

import RegistrationForm from "../components/RegistrationForm";
import "../styles/form.css";

export default function Page() {
  return (
    <main className="page">
      <section className="card">
        <h1>Assignment 6</h1>
        <p className="subtitle">Service Registration Form</p>
        <RegistrationForm />
      </section>
    </main>
  );
}