import * as React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import ContactImg from "../assets/ContactImg.jpg";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/Contact/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        heading="Contact"
        text="Let me build your plan to success"
        btnText="Book Now"
        url="/"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
