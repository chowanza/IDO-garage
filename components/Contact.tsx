"use client";

import React, { useState } from "react";
import { Phone, Clock, Shield, Check } from "./Icons";
import styles from "./Contact.module.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "repair",
    date: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className={styles.contactGrid}>
          {/* Info Side */}
          <div className={styles.infoColumn}>
            <span className="section-badge">Booking Inquiry</span>
            <h2 className={styles.infoTitle}>Schedule a Certified Technician Today</h2>
            <p className={styles.infoDesc}>
              Do you have a broken spring, cable off track, or require a new motor install? 
              Get direct 24/7 service by calling our hotline or filling out our quick dispatch calendar below.
            </p>

            <div className={styles.contactDetails}>
              <a href="tel:+17738392852" className={styles.detailCard}>
                <div className={styles.detailIcon}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className={styles.detailLabel}>Direct Hotline (24/7 Dispatch)</h4>
                  <p className={styles.detailVal}>(773) 839-2852</p>
                </div>
              </a>

              <div className={styles.detailCard}>
                <div className={styles.detailIcon}>
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className={styles.detailLabel}>Availability</h4>
                  <p className={styles.detailVal}>Monday - Sunday, 24 Hours Open</p>
                </div>
              </div>

              <div className={styles.detailCard}>
                <div className={styles.detailIcon}>
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className={styles.detailLabel}>Licensed Area</h4>
                  <p className={styles.detailVal}>All Chicagoland Cities & Suburbs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="glass-card">
            {submitted ? (
              <div className={styles.successState}>
                <div className={styles.successIcon}>
                  <Check size={36} />
                </div>
                <h3 className={styles.successTitle}>Request Sent!</h3>
                <p className={styles.successDesc}>
                  Our Chicago dispatcher will call you in less than 15 minutes to confirm your technician\'s arrival window.
                </p>
                <button 
                  className="btn btn-secondary" 
                  onClick={() => setSubmitted(false)}
                  style={{ marginTop: "1rem" }}
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contactName">Your Name</label>
                    <input
                      type="text"
                      id="contactName"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contactPhone">Phone Number</label>
                    <input
                      type="tel"
                      id="contactPhone"
                      name="phone"
                      required
                      placeholder="e.g. (773) 839-2852"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contactEmail">Email Address</label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formRow}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contactService">Required Service</label>
                    <select
                      id="contactService"
                      name="service"
                      className="form-control"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="repair">Broken Spring / Cable Repair</option>
                      <option value="install">New Garage Door Install</option>
                      <option value="motor">Opener / Motor Troubleshooting</option>
                      <option value="tuneup">Safety Check & Tune-up</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contactDate">Preferred Date</label>
                    <input
                      type="date"
                      id="contactDate"
                      name="date"
                      required
                      className="form-control"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contactMessage">Details (e.g. Door brand, symptoms)</label>
                  <textarea
                    id="contactMessage"
                    name="message"
                    rows={4}
                    placeholder="e.g. My garage door spring snapped this morning, door won't lift. Need morning appointment if possible."
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Schedule Free On-Site Quote
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
