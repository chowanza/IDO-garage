import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import EmergencyBanner from "@/components/EmergencyBanner";
import Estimator from "@/components/Estimator";
import RecentJobs from "@/components/RecentJobs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileDispatchBar from "@/components/MobileDispatchBar";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh", paddingBottom: "70px" }}>
        <Hero />
        <Services />
        <EmergencyBanner />
        <Estimator />
        <RecentJobs />
        <Contact />
      </main>
      <Footer />
      <MobileDispatchBar />
    </>
  );
}
