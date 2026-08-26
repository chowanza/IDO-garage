"use client";

import React, { useState } from "react";
import { Phone, Menu, Close } from "./Icons";
import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoIcon}>🆘</span>
          <span className={styles.logoText}>SOS</span>
          <span className={styles.logoSub}>Garage Group</span>
        </a>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          <a href="#services" className={styles.navLink}>Services</a>
          <a href="#estimator" className={styles.navLink}>Estimator</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
          <a href="tel:+17738392852" className="btn btn-primary">
            <Phone size={18} />
            (773) 839-2852
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={styles.menuButton} 
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <Close size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`${styles.mobileNav} ${isOpen ? styles.mobileNavOpen : ""}`}>
        <a href="#services" className={styles.mobileNavLink} onClick={toggleMenu}>Services</a>
        <a href="#estimator" className={styles.mobileNavLink} onClick={toggleMenu}>Estimator</a>
        <a href="#contact" className={styles.mobileNavLink} onClick={toggleMenu}>Contact</a>
        <a href="tel:+17738392852" className={`btn btn-primary ${styles.mobileNavBtn}`} onClick={toggleMenu}>
          <Phone size={18} />
          Call (773) 839-2852
        </a>
      </div>
    </header>
  );
}
