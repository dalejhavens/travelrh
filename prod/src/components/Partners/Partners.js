import * as React from "react";
import "./PartnersStyles.css";
import PartnersData from "./PartnersData";
import VirtuosoLogo from "../../assets/Virtuoso_logo.png";
import FourSeasonsLogo from "../../assets/FS-logo.png";
import RosewoodLogo from "../../assets/elite-logo.png";
import BelmondLogo from "../../assets/belmond-bellini-club.png";
import RelaisLogo from "../../assets/relais_b.png";
import HyattLogo from "../../assets/Hyatt-Prive-Logo.png";

function Partners() {
  return (
    <div className="partners">
      <h1>Preferred Partners</h1>
      <p>
        Meet just a handful of our esteemed affiliates, ensuring you’re always
        treated like a VIP - expect special treatment and exclusive upgrades!
      </p>
      <div className="row-one">
        <div className="partnercard">
          <PartnersData image={VirtuosoLogo} heading="Virtuoso" />
          <PartnersData image={FourSeasonsLogo} heading="Four Seasons" />
          <PartnersData image={RosewoodLogo} heading="Rosewood Elite" />
        </div>
      </div>
      <div className="row-two">
        <div className="partnercard">
          <PartnersData image={BelmondLogo} heading="Belmond Bellini" />
          <PartnersData image={RelaisLogo} heading="Relais & Chateaux" />
          <PartnersData image={HyattLogo} heading="Hyatt Prive" />
        </div>
      </div>
      <div className="partners-signoff">
        <p><em><b>Plus so many more</b></em></p>
      </div>
    </div>
  );
}

export default Partners;
