import React from "react";
import { Phone, Clock } from "./Icons";
import styles from "./RecentJobs.module.css";

const GALLERY_DATA = [
  {
    image: "/van-night-job.png",
    title: "Late Night Spring Replacement",
    location: "Evanston, IL",
    description: "Technician dispatched at 11:15 PM for a snapped torsion spring. Arrived in 30 minutes, replaced springs, and balanced the door.",
    tag: "Emergency Dispatch"
  },
  {
    image: "/van-side.png",
    title: "Double Insulated Steel Install",
    location: "Naperville, IL",
    description: "Full supply and installation of custom residential garage doors with a smart LiftMaster belt-drive opener system.",
    tag: "New Installation"
  },
  {
    image: "/van-back.png",
    title: "Off-Track Cable Reset",
    location: "Chicago, IL (Lincoln Park)",
    description: "Door was stuck crooked with snapped cable rollers. Realigned the track, replaced cables, and performed safety tests.",
    tag: "Same-Day Repair"
  }
];

export default function RecentJobs() {
  return (
    <section id="gallery" className={`${styles.recentJobsSection} section`}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Local Proof</span>
          <h2 className="section-title">Recent Jobs in Chicagoland</h2>
          <p className="section-desc">
            See photos of our actual service vans and certified technicians on-site helping residential and commercial clients.
          </p>
        </div>

        <div className={styles.galleryGrid}>
          {GALLERY_DATA.map((job, index) => (
            <div key={index} className={`${styles.galleryCard} glass-card`}>
              <div className={styles.imageContainer}>
                <img 
                  src={job.image} 
                  alt={job.title} 
                  className={styles.jobImage}
                  loading="lazy" 
                />
                <span className={styles.imageTag}>{job.tag}</span>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardGeo}>
                  <span className={styles.geoPin}>📍</span> {job.location}
                </div>
                <h3 className={styles.cardTitle}>{job.title}</h3>
                <p className={styles.cardText}>{job.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery CTA */}
        <div className={styles.galleryCta}>
          <div className={styles.ctaBox}>
            <div className={styles.ctaInfo}>
              <h3 className={styles.ctaTitle}>Experience Same-Day Dispatch in Chicago</h3>
              <p className={styles.ctaDesc}>Get professional overhead door repair from local technicians today.</p>
            </div>
            <a href="tel:+17738392852" className="btn btn-primary">
              <Phone size={18} />
              Call (773) 839-2852
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
