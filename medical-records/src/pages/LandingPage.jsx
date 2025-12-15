import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-shell">
      <header className="landing-nav">
        <div className="landing-nav-left">
          <span className="landing-logo">MedMMO</span>
        </div>

        <nav className="landing-nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contacts</a>
        </nav>

        <Link to="/login">
          <button className="landing-login-btn">Login</button>
        </Link>
      </header>

      <main className="landing-main">
        <div className="landing-text">
          <h1>
            <span className="landing-line1">Find a</span>
            <span className="landing-line2">DOCTOR</span>
          </h1>

          <p className="landing-subtitle">
            Your secure portal to manage medical records and connect with professionals.
          </p>

          <Link to="/FindDoctor">
            <button className="btn-primary landing-cta">Get Started</button>
          </Link>
        </div>

        <div className="landing-image">
          <img src="Med_LandingPage.jpg" alt="Doctor" />
        </div>
      </main>

      {/* TRUST STRIP */}
      <div className="landing-trust">
        <span>Secure Records</span>
        <span>Verified Providers</span>
        <span>Fast Scheduling</span>
        <span>Modern UI</span>
      </div>

      {/* ABOUT */}
      <section id="about" className="landing-section">
        <div className="landing-section-card">
          <h2 className="landing-section-title">About MedMMO</h2>
          <p className="landing-section-subtitle">
            MedMMO is a modern portal designed to connect patients with trusted healthcare professionals
            while helping clinics manage information efficiently. Our goal is to make care feel simple,
            organized, and secure.
          </p>

          <div className="landing-grid">
            <div className="landing-tile">
              <h3>Patient-first</h3>
              <p>Find doctors, request appointments, and view your records from one place.</p>
            </div>
            <div className="landing-tile">
              <h3>Clinic-friendly</h3>
              <p>Streamlined workflows that keep documents accessible and easy to manage.</p>
            </div>
            <div className="landing-tile">
              <h3>Built for trust</h3>
              <p>A calm, professional UI that feels safe and easy to navigate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="landing-section landing-section-alt">
        <div className="landing-section-card">
          <h2 className="landing-section-title">Services</h2>
          <p className="landing-section-subtitle">
            Explore common care options and connect with providers based on your needs.
          </p>

          <div className="landing-grid">
            <div className="landing-tile">
              <h3>Primary Care</h3>
              <p>Routine checkups, wellness plans, prevention, and ongoing care.</p>
            </div>
            <div className="landing-tile">
              <h3>Specialist Care</h3>
              <p>Dermatology, cardiology, orthopedics, endocrinology, and more.</p>
            </div>
            <div className="landing-tile">
              <h3>Telehealth Visits</h3>
              <p>Remote consultations for follow-ups, questions, and quick assessments.</p>
            </div>
            <div className="landing-tile">
              <h3>Lab Results</h3>
              <p>Organized access to test history, summaries, and key documents.</p>
            </div>
            <div className="landing-tile">
              <h3>Appointment Requests</h3>
              <p>Request visits and manage scheduling with minimal friction.</p>
            </div>
            <div className="landing-tile">
              <h3>Care Coordination</h3>
              <p>Better communication between patient and provider for continuity of care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="landing-section">
        <div className="landing-section-card">
          <h2 className="landing-section-title center-title">Hear what our clients have to say</h2>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-quote">
                “Best platform. Fast, clean, and honestly stress-free.”
              </p>
              <div className="testimonial-footer">
                <div className="testimonial-avatar">TS</div>
                <div>
                  <div className="testimonial-name">Taylor S.</div>
                  <div className="testimonial-role">Artist</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-quote">
                “I dedicate my next game to MedMMO. Locked in.”
              </p>
              <div className="testimonial-footer">
                <div className="testimonial-avatar">LJ</div>
                <div>
                  <div className="testimonial-name">LeBron J.</div>
                  <div className="testimonial-role">Athlete</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-quote">
                “Super smooth experience. I’d recommend it to anyone.”
              </p>
              <div className="testimonial-footer">
                <div className="testimonial-avatar">AR</div>
                <div>
                  <div className="testimonial-name">Ariana R.</div>
                  <div className="testimonial-role">Performer</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-quote">
                “Clean UI, easy to navigate, and everything is in one place.”
              </p>
              <div className="testimonial-footer">
                <div className="testimonial-avatar">MS</div>
                <div>
                  <div className="testimonial-name">Morgan S.</div>
                  <div className="testimonial-role">Client</div>
                </div>
              </div>
            </div>
          </div>

          <p className="testimonial-note">
            *Demonstration purposes.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="landing-section landing-section-alt">
        <div className="landing-section-card">
          <h2 className="landing-section-title">Contact</h2>
          <p className="landing-section-subtitle">
            Questions? We’re here to help. Reach out through any of the channels below.
          </p>

          <div className="landing-contact">
            <div className="landing-contact-row">
              <span className="landing-contact-label">Email</span>
              <span>support@medmmo.example</span>
            </div>
            <div className="landing-contact-row">
              <span className="landing-contact-label">Phone</span>
              <span>(212) 555-0198</span>
            </div>
            <div className="landing-contact-row">
              <span className="landing-contact-label">Fax</span>
              <span>(212) 555-0142</span>
            </div>
            <div className="landing-contact-row">
              <span className="landing-contact-label">Address</span>
              <span>123 Wellness Ave, New York, NY 10001</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <p>© {new Date().getFullYear()} MedMMO — All rights reserved.</p>
      </footer>
    </div>
  );
}
