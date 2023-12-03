import * as React from "react";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Section from "../components/Section/Section";
import Trip from "../components/Trip/Trip";
import Partners from "../components/Partners/Partners";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        heading="Discover your Haven"
        text="Luxury destinations for the discerning traveler."
        btnText="Book Now"
        url="/"
        btnClass="show"
      />
      <Section />
      <Trip />
      <Partners />
      <Footer />
    </>
  );
}

export default Home;
