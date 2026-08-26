"use client";

import React, { useState } from "react";
import { Clock, Shield, Wrench, Sparkles, Check } from "./Icons";
import styles from "./Hero.module.css";

export default function Hero() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState("");
  const [zip, setZip] = useState("");
  const [contact, setContact] = useState({ name: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrev = () => setStep((prev) => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}></div>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroGrid}>
          {/* Left Column: Copy & Trust */}
          <div className={styles.heroContent}>
            <div className={styles.emergencyBadge}>
              <span className={styles.pulseDot}></span>
              Chicago & Suburbs 24/7 Dispatch
            </div>
            
            <h1 className={styles.title}>
              Fast Garage Door Repair in <span className={styles.highlight}>Chicago</span>
            </h1>
            
            <p className={styles.subtitle}>
              Same-day broken spring replacement, motor repairs, and off-track adjustments. 
              Licensed technician dispatched to your door in under 45 minutes!
            </p>

            <div className={styles.trustBadges}>
              <a 
                href="https://maps.app.goo.gl/mYnmHA8GqxmoZ4qUA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.trustItemLink}
              >
                <div className={styles.trustItem}>
                  <span className={styles.stars}>★★★★★</span>
                  <span className={styles.ratingVal}>4.9/5 Rating</span>
                  <span className={styles.reviewsCount}>(180+ Google Reviews)</span>
                </div>
              </a>
              <div className={styles.divider}></div>
              <div className={styles.trustTag}>✓ Licensed & Insured</div>
              <div className={styles.trustTag}>✓ No Hidden Fees</div>
            </div>

            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className={styles.featureTitle}>45-Min Arrival</h3>
                  <p className={styles.featureDesc}>Fastest emergency dispatch in Chicagoland</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <Shield size={20} />
                </div>
                <div>
                  <h3 className={styles.featureTitle}>Lifetime Warranty</h3>
                  <p className={styles.featureDesc}>On all commercial-grade spring replacements</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3-Step Lead Form */}
          <div className={styles.formContainer}>
            <div className={styles.glassForm}>
              <div className={styles.formRibbon}>Free Inspection</div>

              {submitted ? (
                <div className={styles.successState}>
                  <div className={styles.successCircle}>✓</div>
                  <h3 className={styles.successHeader}>Request Received!</h3>
                  <p className={styles.successText}>
                    Our Chicago dispatch office is processing your request. A technician will call you in under 15 minutes.
                  </p>
                  <a href="tel:+17738392852" className="btn btn-primary" style={{ marginTop: "1.5rem", width: "100%" }}>
                    Call Dispatch Now
                  </a>
                </div>
              ) : (
                <div>
                  <h3 className={styles.formTitle}>Rapid Dispatch Form</h3>
                  
                  {/* Progress Line */}
                  <div className={styles.progressBar}>
                    <div 
                      className={styles.progressFill}
                      style={{ width: `${(step / 3) * 100}%` }}
                    ></div>
                  </div>

                  <form onSubmit={handleSubmit}>
                    {/* Step 1: Select Issue */}
                    {step === 1 && (
                      <div className={styles.stepGroup}>
                        <label className={styles.stepLabel}>What problem are you experiencing?</label>
                        {[
                          "Broken Spring Replacement",
                          "Garage Door Off-Track / Stuck",
                          "Opener / Motor Won't Work",
                          "Snapped Cable / Bent Track"
                        ].map((option) => (
                          <button
                            key={option}
                            type="button"
                            className={`${styles.formRadioBtn} ${service === option ? styles.activeRadio : ""}`}
                            onClick={() => {
                              setService(option);
                              handleNext();
                            }}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Step 2: Zip Code */}
                    {step === 2 && (
                      <div className={styles.stepGroup}>
                        <label className={styles.stepLabel} htmlFor="heroZip">Enter your Chicagoland Zip Code</label>
                        <input
                          type="text"
                          id="heroZip"
                          pattern="[0-9]{5}"
                          maxLength={5}
                          required
                          placeholder="e.g. 60659"
                          className="form-control"
                          value={zip}
                          onChange={(e) => setZip(e.target.value.replace(/\D/g, ""))}
                        />
                        <p className={styles.formHint}>Servicing all zip codes in Chicago and suburbs</p>
                        <div className={styles.formNavButtons}>
                          <button type="button" className="btn btn-secondary" onClick={handlePrev}>
                            Back
                          </button>
                          <button 
                            type="button" 
                            disabled={zip.length < 5} 
                            className="btn btn-primary" 
                            onClick={handleNext}
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Contact details */}
                    {step === 3 && (
                      <div className={styles.stepGroup}>
                        <div className="form-group">
                          <label className="form-label" htmlFor="heroName">Your Name</label>
                          <input
                            type="text"
                            id="heroName"
                            required
                            placeholder="John"
                            className="form-control"
                            value={contact.name}
                            onChange={(e) => setContact({ ...contact, name: e.target.value })}
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label" htmlFor="heroPhone">Phone Number</label>
                          <input
                            type="tel"
                            id="heroPhone"
                            required
                            placeholder="(773) 839-2852"
                            className="form-control"
                            value={contact.phone}
                            onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                          />
                        </div>
                        <div className={styles.formNavButtons}>
                          <button type="button" className="btn btn-secondary" onClick={handlePrev}>
                            Back
                          </button>
                          <button type="submit" className="btn btn-primary">
                            Submit & Dispatch
                          </button>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
