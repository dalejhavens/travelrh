import * as React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1587573088697-b4fa10460683?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        heading="Service"
        text="Curated journey with all details accounted for."
        btnText="Book Now"
        url="/"
        btnClass="show"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
