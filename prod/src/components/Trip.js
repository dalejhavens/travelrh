import * as React from "react";
import "./TripStyles.css";
import TripData from "./TripData";

function Trip() {
  return (
    <div className="trip">
      <h1>Memorable Trips</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Elementum facilisis
        leo vel fringilla est ullamcorper eget nulla. Est ullamcorper eget nulla
        facilisi.
      </p>
      <div className="tripcard">
        <TripData
          image="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          heading="Switzerland"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Est ullamcorper eget nulla facilisi."
        />
        <TripData
          image="https://images.unsplash.com/photo-1490077476659-095159692ab5?q=80&w=851&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          heading="Thailand"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Est ullamcorper eget nulla facilisi."
        />
        <TripData
          image="https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          heading="Greece"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Est ullamcorper eget nulla facilisi."
        />
      </div>
    </div>
  );
}

export default Trip;
