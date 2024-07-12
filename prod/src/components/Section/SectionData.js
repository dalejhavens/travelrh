import * as React from "react";
import "./SectionStyles.css";
import { Component } from "react";
import { Link } from "react-router-dom";

class SectionData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="desc-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
          <Link to={this.props.url}>
            <button className="button">{this.props.btn}</button>
          </Link>
        </div>
        <div className="image">
          <img alt="img" src={this.props.img1} />
        </div>
      </div>
    );
  }
}

export default SectionData;
