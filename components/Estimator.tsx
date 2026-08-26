"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Check, AlertCircle } from "./Icons";
import styles from "./Estimator.module.css";

export default function Estimator() {
  const [service, setService] = useState<"repair" | "install">("repair");
  const [size, setSize] = useState<"single" | "double">("single");
  const [material, setMaterial] = useState<string>("steel");
  const [motor, setMotor] = useState<string>("none");
  const [estimateRange, setEstimateRange] = useState({ min: 0, max: 0 });

  useEffect(() => {
    let basePrice = 0;
    let multiplier = 1.0;
    let materialCost = 0;
    let motorCost = 0;

    if (service === "repair") {
      basePrice = 120; // Repair base price (diagnostics + labor starting point)
      multiplier = size === "single" ? 1.0 : 1.3;
      materialCost = 0; // Repair usually doesn't select new door materials
      
      // Opener repair or replacement cost
      if (motor === "belt") motorCost = 320;
      if (motor === "smart") motorCost = 500;
    } else {
      basePrice = 750; // New installation base price
      multiplier = size === "single" ? 1.0 : 1.6;
      
      if (material === "steel") materialCost = 0;
      if (material === "insulated") materialCost = 350;
      if (material === "wood") materialCost = 800;
      if (material === "glass") materialCost = 1200;

      if (motor === "belt") motorCost = 380;
      if (motor === "smart") motorCost = 580;
    }

    const totalBase = (basePrice * multiplier) + materialCost + motorCost;
    
    // Create a realistic range +/- 15%
    const min = Math.round(totalBase * 0.9);
    const max = Math.round(totalBase * 1.15);

    setEstimateRange({ min, max });
  }, [service, size, material, motor]);

  // Adjust material selection when service changes
  const handleServiceChange = (val: "repair" | "install") => {
    setService(val);
    if (val === "repair") {
      setMaterial("none");
    } else if (material === "none") {
      setMaterial("steel");
    }
  };

  return (
    <section id="estimator" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Instant Quote</span>
          <h2 className="section-title">Estimate Your Project Cost</h2>
          <p className="section-desc">
            Use our interactive estimator tool to calculate a budget range for your garage door services in real-time.
          </p>
        </div>

        <div className={styles.estimatorGrid}>
          {/* Options side */}
          <div className="glass-card">
            {/* Step 1: Service */}
            <div className={styles.stepSection}>
              <h3 className={styles.stepTitle}>1. Select Service Type</h3>
              <div className={styles.radioGroup}>
                <button
                  type="button"
                  className={`${styles.selectButton} ${service === "repair" ? styles.active : ""}`}
                  onClick={() => handleServiceChange("repair")}
                >
                  Repair / Spring / Cable Fix
                </button>
                <button
                  type="button"
                  className={`${styles.selectButton} ${service === "install" ? styles.active : ""}`}
                  onClick={() => handleServiceChange("install")}
                >
                  New Garage Door Install
                </button>
              </div>
            </div>

            {/* Step 2: Size */}
            <div className={styles.stepSection}>
              <h3 className={styles.stepTitle}>2. Choose Garage Size</h3>
              <div className={styles.radioGroup}>
                <button
                  type="button"
                  className={`${styles.selectButton} ${size === "single" ? styles.active : ""}`}
                  onClick={() => setSize("single")}
                >
                  Single Door (1 Car / 8-9ft wide)
                </button>
                <button
                  type="button"
                  className={`${styles.selectButton} ${size === "double" ? styles.active : ""}`}
                  onClick={() => setSize("double")}
                >
                  Double Door (2 Cars / 16ft wide)
                </button>
              </div>
            </div>

            {/* Step 3: Material (only for installation) */}
            {service === "install" && (
              <div className={styles.stepSection}>
                <h3 className={styles.stepTitle}>3. Select Door Material & Style</h3>
                <div className={styles.materialsGrid}>
                  {[
                    { id: "steel", name: "Standard Steel Panel", desc: "Durable, cost-effective classic" },
                    { id: "insulated", name: "Insulated Sandwich Steel", desc: "Energy efficient, high durability" },
                    { id: "wood", name: "Custom Carriage Wood", desc: "Rustic elegance & warmth" },
                    { id: "glass", name: "Modern Glass & Aluminum", desc: "Full view luxury contemporary look" },
                  ].map((mat) => (
                    <button
                      key={mat.id}
                      type="button"
                      className={`${styles.materialCard} ${material === mat.id ? styles.materialCardActive : ""}`}
                      onClick={() => setMaterial(mat.id)}
                    >
                      <div className={styles.materialCheck}>
                        {material === mat.id && <Check size={14} />}
                      </div>
                      <div className={styles.materialInfo}>
                        <span className={styles.matName}>{mat.name}</span>
                        <span className={styles.matDesc}>{mat.desc}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Opener/Motor */}
            <div className={styles.stepSection}>
              <h3 className={styles.stepTitle}>
                {service === "install" ? "4. Add Smart Opener (Optional)" : "3. Do you need a new opener?"}
              </h3>
              <div className={styles.materialsGrid}>
                {[
                  { id: "none", name: "Keep Current / None", desc: "Use existing manual or motor system" },
                  { id: "belt", name: "Quiet Belt-Drive Opener", desc: "Ultra-quiet operation with backup controls" },
                  { id: "smart", name: "Smart Wi-Fi Camera Opener", desc: "Integrates with smartphone app & live video feed" },
                ].map((mot) => (
                  <button
                    key={mot.id}
                    type="button"
                    className={`${styles.materialCard} ${motor === mot.id ? styles.materialCardActive : ""}`}
                    onClick={() => setMotor(mot.id)}
                  >
                    <div className={styles.materialCheck}>
                      {motor === mot.id && <Check size={14} />}
                    </div>
                    <div className={styles.materialInfo}>
                      <span className={styles.matName}>{mot.name}</span>
                      <span className={styles.matDesc}>{mot.desc}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Estimate Display Side */}
          <div className={styles.estimateSidebar}>
            <div className={`${styles.stickyCard} glass-card`}>
              <div className={styles.glowHeader}>
                <Sparkles size={20} className={styles.sparkleIcon} />
                Calculated Price Range
              </div>

              <div className={styles.priceContainer}>
                <span className={styles.currency}>USD</span>
                <span className={styles.priceVal}>
                  ${estimateRange.min} - ${estimateRange.max}
                </span>
              </div>

              <p className={styles.priceDesc}>
                *Estimated range including standard labor. Final price depends on dynamic on-site engineering and track conditions.
              </p>

              <div className={styles.breakdownList}>
                <div className={styles.breakdownItem}>
                  <span>Service:</span>
                  <span className={styles.breakdownVal}>
                    {service === "repair" ? "Repair / Balance" : "New Installation"}
                  </span>
                </div>
                <div className={styles.breakdownItem}>
                  <span>Door Size:</span>
                  <span className={styles.breakdownVal}>
                    {size === "single" ? "Single (1 Car)" : "Double (2 Cars)"}
                  </span>
                </div>
                {service === "install" && (
                  <div className={styles.breakdownItem}>
                    <span>Door Type:</span>
                    <span className={styles.breakdownVal}>
                      {material === "steel" && "Standard Steel"}
                      {material === "insulated" && "Insulated Steel"}
                      {material === "wood" && "Carriage Wood"}
                      {material === "glass" && "Glass & Aluminum"}
                    </span>
                  </div>
                )}
                <div className={styles.breakdownItem}>
                  <span>Opener:</span>
                  <span className={styles.breakdownVal}>
                    {motor === "none" && "None"}
                    {motor === "belt" && "Belt Drive"}
                    {motor === "smart" && "Smart Wi-Fi"}
                  </span>
                </div>
              </div>

              <div className={styles.noticeAlert}>
                <AlertCircle size={20} />
                <span>On-site safety inspection and itemized estimates are 100% Free!</span>
              </div>

              <a href="#contact" className="btn btn-primary" style={{ width: "100%", marginTop: "1.5rem" }}>
                Book Free On-Site Inspection
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
