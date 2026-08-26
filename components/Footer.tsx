import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        {/* Brand Column */}
        <div className={styles.column}>
          <a href="#" className={styles.logo}>
            <span className={styles.logoIcon}>⚡</span>
            <span className={styles.logoText}>ProGlide</span>
            <span className={styles.logoSub}>Doors</span>
          </a>
          <p className={styles.description}>
            Soluciones residenciales y comerciales de la más alta calidad para la automatización, seguridad y diseño de tus portones de cochera.
          </p>
        </div>

        {/* Links Column */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Secciones</h3>
          <ul className={styles.linksList}>
            <li><a href="#servicios" className={styles.link}>Nuestros Servicios</a></li>
            <li><a href="#cotizador" className={styles.link}>Cotizador de Portones</a></li>
            <li><a href="#contacto" className={styles.link}>Reserva de Cita</a></li>
          </ul>
        </div>

        {/* Schedule Column */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Horarios de Servicio</h3>
          <ul className={styles.scheduleList}>
            <li>
              <span>Reparaciones de Emergencia:</span>
              <span className={styles.highlight}>24 Horas / 7 Días</span>
            </li>
            <li>
              <span>Instalación & Cotizaciones:</span>
              <span>Lunes a Sábado: 8:00 AM - 6:00 PM</span>
            </li>
            <li>
              <span>Soporte Administrativo:</span>
              <span>Lunes a Viernes: 9:00 AM - 5:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomContainer}`}>
          <p className={styles.copyright}>
            © {currentYear} ProGlide Garage Doors. Todos los derechos reservados.
          </p>
          <div className={styles.legal}>
            <a href="#" className={styles.legalLink}>Política de Privacidad</a>
            <span>•</span>
            <a href="#" className={styles.legalLink}>Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
