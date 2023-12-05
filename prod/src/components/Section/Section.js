import * as React from "react";
import SectionData from "./SectionData";
import "./SectionStyles.css";
import Divider from "../Divider/Divider";

const Section = () => {
  return (
    <div className="container">
      <div className="section">
        <div className="intro-section ">
          <h1>Ready to make your travel fantasy a reality?</h1>
          <p className="intro-text">
            Step into the gateway of travel inspiration and expert guidance -
            delighted to have you here! If you're envisioning your next
            adventure or seeking seamless travel planning, you've arrived at the
            right place.
          </p>
          <p className="intro-text">
            Whether you're packing your bags for a thrilling adventure or
            dreaming of a tranquil retreat, Travel RH is here to transform your
            travel aspirations into remarkable experiences. Even if you're
            merely browsing for now, consider this your space to wander and
            gather ideas for when your wanderlust sparks your next journey.
          </p>
          <p className="intro-text">
            At Travel RH, I specialize in curating exclusive, tailor-made travel
            experiences. Whether it's designing intricate multi-destination
            journeys or orchestrating luxurious getaways, I handle every detail,
            allowing you to reclaim your time while leveraging my global network
            to elevate your travel experience beyond expectations.
          </p>
          <p className="intro-text">
            <b><em>
              Explore, dream, and when the time is right, let's embark on
              creating your ideal voyage together.
              </em>
            </b>
          </p>
        </div>

        <Divider />

        <div className="padding-div"></div>

        <SectionData
          className="first-desc"
          heading="Tailored services, unlimited possibilities"
          text="From once in a lifetime adventures to quick getaways and everything in between - consider it booked"
          img1="https://images.unsplash.com/photo-1569530593440-e48dc137f7d0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          btn="Services"
          url="/services"
        />

        <SectionData
          className="first-desc-reverse"
          heading="From hidden gems to iconic landmarks, let’s explore them all"
          text="Bustling metros or tropical havens - our knowledge goes around the globe"
          img1="https://images.unsplash.com/photo-1528114039593-4366cc08227d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          btn="Destinations"
          url="/destinations"
        />

        <SectionData
          className="first-desc"
          heading="VIP perks, personalized for you"
          text="From globally acclaimed luxury labels to independently owned boutiques – all included, no extra cost"
          img1="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          btn="About"
          url="/about"
        />
      </div>
    </div>
  );
};

export default Section;
