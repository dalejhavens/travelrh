import * as React from "react";
import "./PartnersStyles.css";
import PartnersData from "./PartnersData";

function Partners() {
  return (
    <div className="partners">
      <h1>Preferred Partners</h1>
      <p>
        Meet just a handful of our esteemed affiliates, ensuring you’re always
        treated like a VIP - expect special treatment and exclusive upgrades!
      </p>
      <div className="partnercard">
        <PartnersData
          image="https://seeklogo.com/images/V/virtuoso-travel-logo-9BB37B3FB3-seeklogo.com.png"
          heading="Virtuoso"
        />
        <PartnersData
          image="https://1000logos.net/wp-content/uploads/2020/10/Four-Seasons-Logo.png"
          heading="Four Seasons"
        />
        <PartnersData
          image="https://1000logos.net/wp-content/uploads/2020/03/Emirates-Logo.png"
          heading="Emirates Airlines"
        />
      </div>
    </div>
  );
}

export default Partners;
