import React from "react";
import { Wrench, Shield, Gear, Clock, AlertCircle, Sparkles } from "./Icons";
import styles from "./Services.module.css";

const SERVICES_DATA = [
  {
    icon: <Wrench size={32} />,
    title: "Broken Spring Replacement",
    description: "High-cycle torsion and extension spring replacement. Correct sizing, tension calibration, and durable steel parts with optional lifetime warranties.",
    highlight: "Top service in Chicago"
  },
  {
    icon: <Gear size={32} />,
    title: "Opener Repair & Installation",
    description: "Repairing and installing belt and chain openers (LiftMaster, Chamberlain, Genie). Integration with Wi-Fi, mobile apps, and smart camera accessories.",
    highlight: "Smart systems authorized"
  },
  {
    icon: <Shield size={32} />,
    title: "New Garage Door Installation",
    description: "Upgrade your curb appeal with customized steel, aluminum glass, or real-wood insulated doors. Built to handle heavy Chicagoland winter weather.",
    highlight: "Clopay & Amarr partner"
  },
  {
    icon: <Clock size={32} />,
    title: "Garage Door Off-Track Repair",
    description: "If your door is crooked, stuck, or off its track, don't attempt to close it. Our fast dispatch team resets rollers, drums, and snaps safely.",
    highlight: "Same-day response"
  },
  {
    icon: <AlertCircle size={32} />,
    title: "Commercial Overhead Doors",
    description: "Full service for warehouse doors, dock levelers, fire doors, and commercial rolling steel shutters. Fast emergency repairs to minimize business downtime.",
    highlight: "Licensed & bonded"
  },
  {
    icon: <Sparkles size={32} />,
    title: "Preventive Tuning & Safety Inspections",
    description: "Visual inspection, sensor testing, hardware tightening, and deep lubrication of hinges and rollers. Avoid major emergency repairs before they happen.",
    highlight: "Recommend yearly"
  }
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="glow-bg"></div>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Service Catalog</span>
          <h2 className="section-title">Professional Overhead Door Solutions</h2>
          <p className="section-desc">
            We provide local certified technicians specializing in residential and commercial garage door repairs, automation, and replacements.
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

        {/* Dynamic CTA at the bottom of services */}
        <div className={styles.servicesFooterCta}>
          <p className={styles.ctaText}>Don't see your specific overhead door issue? We repair all brands, models, and custom setups.</p>
          <a href="tel:+17738392852" className="btn btn-emergency">
            <span>Call for Immediate Dispatch:</span>
            <strong>(773) 839-2852</strong>
          </a>
        </div>
      </div>
    </section>
  );
}
