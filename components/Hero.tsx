import React from "react";
import { Clock, Shield, Wrench } from "./Icons";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}></div>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <div className={styles.emergencyBadge}>
            <span className={styles.pulseDot}></span>
            Atención de Emergencia 24/7
          </div>
          <h1 className={styles.title}>
            Portones de Garaje de <span className={styles.highlight}>Alto Nivel</span>
          </h1>
          <p className={styles.subtitle}>
            Instalación, mantenimiento y reparación experta de puertas de garaje. 
            Garantizamos seguridad, tecnología y diseños modernos para tu hogar o negocio.
          </p>
          <div className={styles.ctaGroup}>
            <a href="#contacto" className="btn btn-primary">
              <Wrench size={18} />
              Solicitar Reparación
            </a>
            <a href="#cotizador" className="btn btn-secondary">
              Calcular Presupuesto
            </a>
          </div>

          <div className={styles.featuresList}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Clock size={20} />
              </div>
              <div>
                <h3 className={styles.featureTitle}>Llegada Rápida</h3>
                <p className={styles.featureDesc}>Servicio express en menos de 2 horas</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Shield size={20} />
              </div>
              <div>
                <h3 className={styles.featureTitle}>Garantía Certificada</h3>
                <p className={styles.featureDesc}>Respaldamos cada trabajo realizado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
