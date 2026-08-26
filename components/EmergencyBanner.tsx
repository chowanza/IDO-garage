import React from "react";
import { Phone, Clock } from "./Icons";
import styles from "./EmergencyBanner.module.css";

export default function EmergencyBanner() {
  return (
    <section className={styles.banner}>
      <div className="container">
        <div className={styles.bannerGrid}>
          {/* Badge & Info */}
          <div className={styles.infoCol}>
            <div className={styles.badge}>
              <span className={styles.pulseDot}></span>
              Live Dispatch Active
            </div>
            <h2 className={styles.headline}>
              Emergency Garage Door Repair?
            </h2>
            <p className={styles.subheadline}>
              We are on standby across Chicagoland. Average on-site response time is under 45 minutes! 
              Get your doors opening safely right now.
            </p>
          </div>

          {/* Call CTA block */}
          <div className={styles.ctaCol}>
            <div className={styles.ctaWrapper}>
              <div className={styles.dispatchTime}>
                <Clock size={16} />
                <span>Est. Arrival: <strong>30 - 45 mins</strong></span>
              </div>
              <a href="tel:+17738392852" className={styles.callButton}>
                <Phone size={24} />
                <div className={styles.buttonText}>
                  <span className={styles.callNowLabel}>Call Dispatch Office</span>
                  <span className={styles.phoneNum}>(773) 839-2852</span>
                </div>
              </a>
              <p className={styles.freeInspection}>
                ✓ $0 Free On-Site Inspection & Written Quote Included
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
