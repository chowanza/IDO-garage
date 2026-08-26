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
    service: "reparacion",
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
    // Simulate API Submission
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contacto" className="section">
      <div className="container">
        <div className={styles.contactGrid}>
          {/* Info Side */}
          <div className={styles.infoColumn}>
            <span className="section-badge">Contacto</span>
            <h2 className={styles.infoTitle}>Agenda tu Visita Técnica Gratis</h2>
            <p className={styles.infoDesc}>
              ¿Tienes una emergencia o deseas cambiar tu portón? Nuestro equipo técnico está listo para asistirte.
              Comunícate por teléfono para atención inmediata 24/7 o completa el formulario.
            </p>

            <div className={styles.contactDetails}>
              <a href="tel:+18005550199" className={styles.detailCard}>
                <div className={styles.detailIcon}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className={styles.detailLabel}>Línea Directa 24/7</h4>
                  <p className={styles.detailVal}>+1 (800) 555-0199</p>
                </div>
              </a>

              <div className={styles.detailCard}>
                <div className={styles.detailIcon}>
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className={styles.detailLabel}>Horario de Atención</h4>
                  <p className={styles.detailVal}>Lunes a Domingo — Todo el día</p>
                </div>
              </div>

              <div className={styles.detailCard}>
                <div className={styles.detailIcon}>
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className={styles.detailLabel}>Cobertura Total</h4>
                  <p className={styles.detailVal}>Servicio residencial y comercial a domicilio</p>
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
                <h3 className={styles.successTitle}>¡Solicitud Recibida!</h3>
                <p className={styles.successDesc}>
                  Nos pondremos en contacto contigo en los próximos 15 minutos para confirmar la fecha y hora de tu inspección gratuita.
                </p>
                <button 
                  className="btn btn-secondary" 
                  onClick={() => setSubmitted(false)}
                  style={{ marginTop: "1rem" }}
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Nombre Completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Ej. Juan Pérez"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Número de Teléfono</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="Ej. +1 555-1234"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Correo Electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="correo@ejemplo.com"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formRow}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="service">Servicio Requerido</label>
                    <select
                      id="service"
                      name="service"
                      className="form-control"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="reparacion">Reparación de Resortes/Cables</option>
                      <option value="instalacion">Instalación de Portón Nuevo</option>
                      <option value="motor">Cambio/Reparación de Motor</option>
                      <option value="mantenimiento">Mantenimiento Preventivo</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="date">Fecha Preferida</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      className="form-control"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Detalles del problema / Notas</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Describe brevemente lo que ocurre con tu portón (ej. resorte roto, no abre con el control, motor ruidoso...)"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Agendar Inspección Gratis
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
