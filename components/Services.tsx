import React from "react";
import { Wrench, Shield, Gear, Clock } from "./Icons";
import styles from "./Services.module.css";

const SERVICES_DATA = [
  {
    icon: <Wrench size={32} />,
    title: "Reparación de Resortes y Cables",
    description: "Reemplazo inmediato de resortes de torsión rotos, cables dañados, poleas y rodillos desgastados para garantizar un funcionamiento seguro.",
    highlight: "Resortes de alta duración"
  },
  {
    icon: <Shield size={32} />,
    title: "Instalación de Portones Modernos",
    description: "Amplia gama de diseños premium en acero, aluminio, madera y vidrio esmerilado. Sistemas automatizados con control inteligente.",
    highlight: "Modelos insulados térmicos"
  },
  {
    icon: <Gear size={32} />,
    title: "Motores y Motores Inteligentes",
    description: "Instalación y reparación de motores de cadena y correa silenciosos. Integración con Wi-Fi, apps móviles y cámaras integradas.",
    highlight: "Motores LiftMaster / Chamberlain"
  },
  {
    icon: <Clock size={32} />,
    title: "Mantenimiento Preventivo",
    description: "Calibración, lubricación profunda, balanceo de portones y pruebas de seguridad de sensores para prolongar la vida útil del sistema.",
    highlight: "Recomendado anual"
  }
];

export default function Services() {
  return (
    <section id="servicios" className="section">
      <div className="glow-bg"></div>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Lo Que Hacemos</span>
          <h2 className="section-title">Servicios Especializados en Portones</h2>
          <p className="section-desc">
            Brindamos soluciones integrales de alta ingeniería para portones de cochera residenciales y comerciales.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {SERVICES_DATA.map((service, index) => (
            <div key={index} className="glass-card">
              <div className={styles.serviceIconContainer}>
                {service.icon}
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <div className={styles.serviceBadge}>
                {service.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
