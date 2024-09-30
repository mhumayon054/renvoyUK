import React, { useState } from "react";
import delieveryIcon from "../assets/images/delivery-icon.svg";
import dropdownIcon from "../assets/images/dropdown-icon.svg";

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="custom-dropdown">
      <div className="custom-dropdown-header" onClick={toggleDropdown}>
        <span className="custom-dropdown-icon">
          <img src={delieveryIcon} alt="icon" />
        </span>
        <span className="custom-dropdown-title">FS Truck LTD</span>
        <span className={`custom-dropdown-arrow ${isOpen ? "open" : ""}`}>
          <img src={dropdownIcon} alt="dropdown-icon" />
        </span>
      </div>

      {isOpen && (
        <div className="custom-dropdown-menu">
          <div className="custom-dropdown-option">Option 1</div>
          <div className="custom-dropdown-option">Option 2</div>
          <div className="custom-dropdown-option">Option 3</div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
