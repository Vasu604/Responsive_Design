import React from "react";
import '../styles/Banner.css'


const Banner = () => {
  // const Car = require("../src/assets/img/Car.jpeg");
  // const CarIcon = require("../src/assets/img/Car-icon.jpeg");
  // const Tick = require("../src/assets/img/Tick.jpeg");
  // const Yo = require("../src/assets/img/Yo.jpeg");

  return (
    <div className="featured-car">
      <div className="featured-info">
        <div className="featured-header">
          <div className="featured-title">Featured this week
            <div className="featured-icon">
              {/* <img src={CarIcon} alt="YoTrader Icon" /> */}
              <img src="../src/assets/Car-icon.jpeg" alt="" />
            </div></div>
        </div>
        <div className="car-details-main">
          <h2 style={{ color: "#2B3674" }}>2019 - Benz A200 Hatchback</h2>
          <p style={{ color: "#2B3674" }}>32,546 Miles</p>
          <div className="divider"></div>
          <p className="time-remaining ">1 Day 5 Hours Remaining</p>
          <p className="date-time text">01/01/2023 16:30:05</p>
          <h3 style={{ color: "#2B3674" }}>£14,550 <span style={{ color: "#2B3674" }}>Buy it now</span></h3>
          <div className="trusted-seller ">
            <span className="check-icon"><img src="../src/assets/Yo.jpeg" alt="" /></span> YoTrader Trusted Seller
          </div>
          <div className="find-more">
            Find Out More <span className="arrow-icon"><img src="../src/assets/Tick.jpeg" alt="" /></span>
          </div>
        </div>
      </div>
      <div className="featured-image">
        {/* <img src={Car} alt="Benz A200 Hatchback" /> */}
        <img src="../src/assets/Car.jpeg" alt="" />
        <div className="time-banner">1 Day 5 Hours</div>
      </div>
    </div>
  );
};

export default Banner;
