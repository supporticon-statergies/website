import React from "react";
import "./Marquee.css";
import supporticonLogo from "../assets/supporticon_logo.png";
import freshworksLogo from "../assets/freshworks_logo.png";


const Marquee: React.FC = () => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        {/* First loop */}
        <div className="marquee-item">
          <img
            src={supporticonLogo}
            alt="SupportIcon Logo"
            className="marquee-icon"
          />
          <span className="marquee-text">
            We are now officially recognized as a <strong>Technology Partner</strong> of
            
          </span>
          <img
            src={freshworksLogo}
            alt="Freshworks Logo"
            className="marquee-icon"
          />
        </div>

        
      </div>
    </div>
  );
};

export default Marquee;
