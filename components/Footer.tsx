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
            <span className={styles.logoIcon}>🆘</span>
            <span className={styles.logoText}>SOS</span>
            <span className={styles.logoSub}>Garage Group</span>
          </a>
          <p className={styles.description}>
            Residential and commercial garage door services, spring repair, and opener installation. Serving Chicago and suburbs 24/7.
          </p>
          <p className={styles.address}>
            📍 6200 N Francisco Ave, Chicago, IL 60659
          </p>
        </div>

        {/* Links Column */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Quick Links</h3>
          <ul className={styles.linksList}>
            <li><a href="#services" className={styles.link}>Our Services</a></li>
            <li><a href="#estimator" className={styles.link}>Price Estimator</a></li>
            <li><a href="#contact" className={styles.link}>Book a Technician</a></li>
          </ul>
        </div>

        {/* Schedule Column */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Service Hours</h3>
          <ul className={styles.scheduleList}>
            <li>
              <span>Emergency Services:</span>
              <span className={styles.highlight}>Open 24 Hours / 7 Days</span>
            </li>
            <li>
              <span>Installations & Quotes:</span>
              <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
            </li>
            <li>
              <span>Administrative Support:</span>
              <span>Mon - Fri: 9:00 AM - 5:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomContainer}`}>
          <p className={styles.copyright}>
            © {currentYear} SOS Garage Door Group. All rights reserved. Licensed, Bonded & Insured in Illinois.
          </p>
          <div className={styles.legal}>
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <span>•</span>
            <a href="#" className={styles.legalLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
