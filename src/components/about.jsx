import React, { Component } from "react";
import "../style/about.css";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="about">
        <div className="about-pic">
          <p>hello</p>
        </div>
        <div className="about-content">
            <p className="about-slogan">Don’t squeeze in a sedan when you could relax in a van.</p>
            <p className="about-text">
            Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)
            <br /><br />Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
            </p>
            <div className="about-adv">
                <p className="about-adv-text">Your destination is waiting.<br/> Your van is ready.</p>
                <button className="about-adv-btn">
                    Explore our vans
                </button>
            </div>
        </div>
      </div>
    );
  }
}

export default About;
