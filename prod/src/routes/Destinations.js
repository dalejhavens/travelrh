import * as React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import WorldMap from "../components/WorldMap/WorldMap";

function Destinations() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        heading="Destinations"
        text="The World Awaits"
        btnText="Book Now"
        url="/"
        btnClass="hide"
      />
      <WorldMap />
      <Footer />
    </>
  );
}

export default Destinations;
