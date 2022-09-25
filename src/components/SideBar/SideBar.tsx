import React from "react";
import { sidebarLinks } from "./data";
import "./styles.css";

const SideBar: React.FC = () => {
  const displaySideBarLinks = () => {
    return sidebarLinks.map((item, idx) => {
      return (
        <div key={idx} className={`sidebar-item ${idx === 4 && "active-item"}`}>
          <img src={item.icon} alt={item.label} />
          <p>{item.label}</p>
        </div>
      );
    });
  };
  return (
    <div className="side-bar">
      <div className="logo">
        <img
          src={require("../../assets/logo/fitted-logo.png")}
          alt="fitted logo"
        />
      </div>
      <div>
        <div className="side-bar-summary">
          <div className="profile-initials-section">
            <div className="profile-initials">SO</div>
            <div className="edit">
              <img src={require("../../assets/icons/pencil.png")} alt="" />
            </div>
          </div>
          <div className="side-bar-summary-content">
            <p className="name">Sikiru Agbaje</p>
            <div className="link">
              <p>www.tailors.fitted.ng/sikiru</p>
              <img
                src={require("../../assets/icons/link.png")}
                alt="link icon"
              />
            </div>
            <p className="sub-text">
              Get measurements from any customer via this link
            </p>
            <div className="vetted-dropdown">
              <p>Non - Vetted Tailor</p>
              <img
                src={require("../../assets/icons/arrow-down.png")}
                alt="arrow down"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="side-bar-links">{displaySideBarLinks()}</div>
    </div>
  );
};

export default SideBar;
