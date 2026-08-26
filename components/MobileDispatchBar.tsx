"use client";

import React from "react";
import { Phone, Sparkles } from "./Icons";
import styles from "./MobileDispatchBar.module.css";

export default function MobileDispatchBar() {
  return (
    <div className={styles.bar}>
      {/* Call Dispatch Button */}
      <a href="tel:+17738392852" className={`${styles.btn} ${styles.btnPrimary}`}>
        <Phone size={18} />
        <span>Call Dispatch</span>
      </a>

      {/* Book Online Button */}
      <a href="#contact" className={`${styles.btn} ${styles.btnSecondary}`}>
        <Sparkles size={18} />
        <span>Book Online</span>
      </a>
    </div>
  );
}
