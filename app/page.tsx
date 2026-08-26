import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Estimator from "@/components/Estimator";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh" }}>
        <Hero />
        <Services />
        <Estimator />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
