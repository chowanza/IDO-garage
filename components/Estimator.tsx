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
      basePrice = 120; // Repair base price
      multiplier = size === "single" ? 1.0 : 1.3;
      materialCost = 0; // Repair usually doesn't select new materials
      
      // Opener repair or replacement cost
      if (motor === "belt") motorCost = 320;
      if (motor === "smart") motorCost = 500;
    } else {
      basePrice = 750; // New installation base price
      multiplier = size === "single" ? 1.0 : 1.6;
      
      if (material === "steel") materialCost = 0;
      if (material === "insulated") materialCost = 300;
      if (material === "wood") materialCost = 700;
      if (material === "glass") materialCost = 1100;

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
    <section id="cotizador" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Cotización Instantánea</span>
          <h2 className="section-title">Calcula el Costo de tu Portón</h2>
          <p className="section-desc">
            Usa nuestro estimador inteligente interactivo para obtener un rango aproximado de precios en segundos.
          </p>
        </div>

        <div className={styles.estimatorGrid}>
          {/* Options side */}
          <div className="glass-card">
            {/* Step 1: Service */}
            <div className={styles.stepSection}>
              <h3 className={styles.stepTitle}>1. Tipo de Servicio</h3>
              <div className={styles.radioGroup}>
                <button
                  type="button"
                  className={`${styles.selectButton} ${service === "repair" ? styles.active : ""}`}
                  onClick={() => handleServiceChange("repair")}
                >
                  Reparación / Mantenimiento
                </button>
                <button
                  type="button"
                  className={`${styles.selectButton} ${service === "install" ? styles.active : ""}`}
                  onClick={() => handleServiceChange("install")}
                >
                  Instalación de Portón Nuevo
                </button>
              </div>
            </div>

            {/* Step 2: Size */}
            <div className={styles.stepSection}>
              <h3 className={styles.stepTitle}>2. Tamaño del Garaje</h3>
              <div className={styles.radioGroup}>
                <button
                  type="button"
                  className={`${styles.selectButton} ${size === "single" ? styles.active : ""}`}
                  onClick={() => setSize("single")}
                >
                  Sencillo (1 Auto / Ancho regular)
                </button>
                <button
                  type="button"
                  className={`${styles.selectButton} ${size === "double" ? styles.active : ""}`}
                  onClick={() => setSize("double")}
                >
                  Doble (2 Autos / Ancho amplio)
                </button>
              </div>
            </div>

            {/* Step 3: Material (only for installation) */}
            {service === "install" && (
              <div className={styles.stepSection}>
                <h3 className={styles.stepTitle}>3. Material y Estilo del Portón</h3>
                <div className={styles.materialsGrid}>
                  {[
                    { id: "steel", name: "Acero Clásico", desc: "Duradero y económico" },
                    { id: "insulated", name: "Acero Insulado", desc: "Aislamiento térmico premium" },
                    { id: "wood", name: "Madera Rústica", desc: "Elegancia natural y calidez" },
                    { id: "glass", name: "Vidrio & Aluminio", desc: "Estilo moderno de lujo" },
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
                {service === "install" ? "4. Sistema de Apertura (Motor)" : "3. ¿Requiere motor nuevo?"}
              </h3>
              <div className={styles.materialsGrid}>
                {[
                  { id: "none", name: "Mantener Actual / Ninguno", desc: "Sin costo adicional" },
                  { id: "belt", name: "Motor de Correa Premium", desc: "Ultrasilencioso con control" },
                  { id: "smart", name: "Motor Inteligente Smart", desc: "Conexión Wi-Fi, App y Cámara" },
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
                Presupuesto Estimado
              </div>

              <div className={styles.priceContainer}>
                <span className={styles.currency}>USD</span>
                <span className={styles.priceVal}>
                  ${estimateRange.min} - ${estimateRange.max}
                </span>
              </div>

              <p className={styles.priceDesc}>
                *Este es un rango estimado aproximado. El precio final se determinará tras una inspección técnica presencial.
              </p>

              <div className={styles.breakdownList}>
                <div className={styles.breakdownItem}>
                  <span>Servicio:</span>
                  <span className={styles.breakdownVal}>
                    {service === "repair" ? "Reparación/Ajuste" : "Instalación Nueva"}
                  </span>
                </div>
                <div className={styles.breakdownItem}>
                  <span>Tamaño:</span>
                  <span className={styles.breakdownVal}>
                    {size === "single" ? "Sencillo (1 Auto)" : "Doble (2 Autos)"}
                  </span>
                </div>
                {service === "install" && (
                  <div className={styles.breakdownItem}>
                    <span>Material:</span>
                    <span className={styles.breakdownVal}>
                      {material === "steel" && "Acero Clásico"}
                      {material === "insulated" && "Acero Insulado"}
                      {material === "wood" && "Madera"}
                      {material === "glass" && "Vidrio y Aluminio"}
                    </span>
                  </div>
                )}
                <div className={styles.breakdownItem}>
                  <span>Motor:</span>
                  <span className={styles.breakdownVal}>
                    {motor === "none" && "Sin motor nuevo"}
                    {motor === "belt" && "Silencioso de Correa"}
                    {motor === "smart" && "Smart Wi-Fi (+Cámara)"}
                  </span>
                </div>
              </div>

              <div className={styles.noticeAlert}>
                <AlertCircle size={20} />
                <span>¡Inspección y presupuesto escrito 100% Gratis en tu domicilio!</span>
              </div>

              <a href="#contacto" className="btn btn-primary" style={{ width: "100%", marginTop: "1.5rem" }}>
                Reservar Inspección Gratis
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
