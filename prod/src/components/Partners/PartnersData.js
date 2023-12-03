import * as React from "react";
import "./PartnersStyles.css";

function PartnersData(props) {
  return (
    <div className="p-card">
      <div className="p-image">
        <img src={props.image} alt="partner-image" />
      </div>
    </div>
  );
}

export default PartnersData;
