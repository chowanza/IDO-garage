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
          <span className={styles.logoIcon}>⚡</span>
          <span className={styles.logoText}>ProGlide</span>
          <span className={styles.logoSub}>Doors</span>
        </a>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          <a href="#servicios" className={styles.navLink}>Servicios</a>
          <a href="#cotizador" className={styles.navLink}>Cotizador</a>
          <a href="#contacto" className={styles.navLink}>Contacto</a>
          <a href="tel:+18005550199" className="btn btn-primary">
            <Phone size={18} />
            Llamar Ahora
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={styles.menuButton} 
          onClick={toggleMenu}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <Close size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`${styles.mobileNav} ${isOpen ? styles.mobileNavOpen : ""}`}>
        <a href="#servicios" className={styles.mobileNavLink} onClick={toggleMenu}>Servicios</a>
        <a href="#cotizador" className={styles.mobileNavLink} onClick={toggleMenu}>Cotizador</a>
        <a href="#contacto" className={styles.mobileNavLink} onClick={toggleMenu}>Contacto</a>
        <a href="tel:+18005550199" className={`btn btn-primary ${styles.mobileNavBtn}`} onClick={toggleMenu}>
          <Phone size={18} />
          Llamar Ahora
        </a>
      </div>
    </header>
  );
}
