"use client";
import React, { useState, useEffect } from "react";
import { pcCase } from "../../lib/placeholder_data"; // Importing the data from placeholder_data.js
import "./case.css";

const CaseSidebar = ({ onFilterChange, onCaseSelect}) => {
  const [price, setPrice] = useState(20000);
  const [manufacturer, setManufacturer] = useState({
    all: true,
    Corsair: false,
    NZXT: false,
  });
  const [type, setType] = useState({
    all: true,
    "ATX Mid Tower": false,
    "ATX Full Tower": false,
  });
  const [color, setColor] = useState({
    all: true,
    Black: false,
    Grey: false,
  })
  const [power_supply, setPowerSupply] = useState({
    all: true,
    None: false,
    "1000 W": false,
  });
  const [side_panel, setSidePanel] = useState({
    all: true,
    "Tinted Tempered Glass": false,
    "Tempered Glass": false,
    None: false,
  });
  const [power_supply_shroud, setPowerSupplyShroud] = useState({
    all: true,
    true: false,
    no: false,
  });

  // Split front_panel_usb types from data
  const allUSBTypes = Array.from(
    new Set(
      placeholderData
        .flatMap((item) => item.front_panel_usb.split(", ").map((type) => type.trim()))
    )
  );
  const [front_panel_usb, setFrontPanelUSB] = useState(
    allUSBTypes.reduce(
      (acc, usbType) => ({
        ...acc,
        [usbType]: false,
      }),
      { all: true }
    )
  );
  const [motherboard_form_factor, setMotherBoard] = useState({
    all: true,
    ATX: false,
    EATX: false,
    "Micro ATX": false,
    "Mini ITX": false,
  });
  const [volume, setVolume] = useState(80000);

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPrice(newPrice);
    onFilterChange({ price: newPrice });
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    onFilterChange({ volume: newVolume });
  };

  // Handle Manufacturer Filter
  const handleManufacturerChange = (key) => {
    const updatedManufacturer = { ...manufacturer };
  
    if (key === "all") {
      updatedManufacturer.all = true;
      updatedManufacturer.Corsair = false;
      updatedManufacturer.NZXT = false;
    } else {
      updatedManufacturer[key] = !updatedManufacturer[key];
      updatedManufacturer.all = !updatedManufacturer.Corsair && !updatedManufacturer.NZXT;
    }
  
    setManufacturer(updatedManufacturer);
  
    const selectedManufacturers = Object.keys(updatedManufacturer)
      .filter((key) => updatedManufacturer[key] && key !== "all")
      .map((key) => key);

    onFilterChange({ manufacturer: selectedManufacturers });
  };

  // Handle Type Filter
  const handleTypeChange = (key) => {
    const updatedType = { ...type };
  
    if (key === "all") {
      updatedType.all = true;
      updatedType["ATX Mid Tower"] = false;
      updatedType["ATX Full Tower"] = false;
    } else {
      updatedType[key] = !updatedType[key];
      updatedType.all = !updatedType["ATX Mid Tower"] && !updatedType["ATX Full Tower"];
    }
  
    setType(updatedType);
  
    const selectedTypes = Object.keys(updatedType)
      .filter((key) => updatedType[key] && key !== "all")
      .map((key) => key);
  
    onFilterChange({ type: selectedTypes });
  };

  // Handle Color Filter
  const handleColorChange = (key) => {
    const updatedColor = { ...color };

    if (key === "all") {
      updatedColor.all = true;
      updatedColor.Black = false;
      updatedColor.Grey = false;
    } else {
      updatedColor[key] = !updatedColor[key];
      updatedColor.all = !updatedColor.Black && !updatedColor.Grey;
    }

    setColor(updatedColor);

    const selectedColors = Object.keys(updatedColor)
      .filter((key) => updatedColor[key] && key !== "all")
      .map((key) => key);

    onFilterChange({ color: selectedColors });
  };

  // Handle Power Supply
  const handlePowerSupply = (key) => {
    const updatedPowerSupply = { ...power_supply };

    if (key === "all") {
      updatedPowerSupply.all = true;
      updatedPowerSupply.None = false;
      updatedPowerSupply["1000 W"] = false;
    } else {
      updatedPowerSupply[key] = !updatedPowerSupply[key];
      updatedPowerSupply.all = !updatedPowerSupply.None && !updatedPowerSupply["1000 W"];
    }

    setPowerSupply(updatedPowerSupply);

    const selectedPowerSupplies = Object.keys(updatedPowerSupply)
      .filter((key) => updatedPowerSupply[key] && key !== "all")
      .map((key) => key);

    onFilterChange({ power_supply: selectedPowerSupplies });
  };

    // Handle Side Panel
    const handleSidePanel = (key) => {
        const updatedSidePanel = { ...side_panel };
    
        if (key === "all") {
          updatedSidePanel.all = true;
          updatedSidePanel["Tinted Tempered Glass"] = false;
          updatedSidePanel["Tempered Glass"] = false;
        } else {
          updatedSidePanel[key] = !updatedSidePanel[key];
          updatedSidePanel.all = !updatedSidePanel["Tinted Tempered Glass"] && !updatedSidePanel["Tempered Glass"];
        }
    
        setSidePanel(updatedSidePanel);
    
        const selectedSidePanels = Object.keys(updatedSidePanel)
          .filter((key) => updatedSidePanel[key] && key !== "all")
          .map((key) => key);
    
        onFilterChange({ side_panel: selectedSidePanels });
      };

  // Handle Power Supply Shroud
  const handlePowerSupplyShroud = (key) => {
    const updatedPowerSupplyShroud = { ...power_supply_shroud };

    if (key === "all") {
      updatedPowerSupplyShroud.all = true;
      updatedPowerSupplyShroud.true = false;
      updatedPowerSupplyShroud.no = false;
    } else {
      updatedPowerSupplyShroud[key] = !updatedPowerSupplyShroud[key];
      updatedPowerSupplyShroud.all = !updatedPowerSupplyShroud.true && !updatedPowerSupplyShroud.no;
    }

    setPowerSupplyShroud(updatedPowerSupplyShroud);

    const selectedPowerSupplyShrouds = Object.keys(updatedPowerSupplyShroud)
      .filter((key) => updatedPowerSupplyShroud[key] && key !== "all")
      .map((key) => key);

    onFilterChange({ power_supply_shroud: selectedPowerSupplyShrouds });
  };

  // Handle Front Panel USB
  const handleFrontPanelUSB = (key) => {
    const updatedFrontPanelUSB = { ...front_panel_usb };

    if (key === "all") {
      updatedFrontPanelUSB.all = true;
      updatedFrontPanelUSB.true = false;
      updatedFrontPanelUSB.no = false;
    } else {
      updatedFrontPanelUSB[key] = !updatedFrontPanelUSB[key];
      updatedFrontPanelUSB.all = !updatedFrontPanelUSB.true && !updatedFrontPanelUSB.no;
    }

    setFrontPanelUSB(updatedFrontPanelUSB);

    const selectedFrontPanelUSBs = Object.keys(updatedFrontPanelUSB)
      .filter((key) => updatedFrontPanelUSB[key] && key !== "all")
      .map((key) => key);

    onFilterChange({ color: selectedFrontPanelUSBs });
  };

  return (
    <>
      <style>
        {`
    .form-range {
      appearance: none;
      width: 100%;
      height: 8px;
      background: #ddd;
      border-radius: 5px;
      outline: none;
    }

    .form-range::-webkit-slider-thumb {
      appearance: none;
      width: 20px;
      height: 20px;
      background: #007bff;
      border-radius: 50%;
      cursor: pointer;
    }

    .form-range::-moz-range-thumb {
      width: 20px;
      height: 20px;
      background: #007bff;
      border-radius: 50%;
      cursor: pointer;
    }

    .filter-section {
      width: 250px;
      padding: 10px;
      background: #f8f9fa;
      border: 1px solid #ddd;
      color: #000;
      font-size: 0.9em;
    }

    .filter-header {
      font-size: 1.2em;
      font-weight: bold;
      text-align: center;
      margin-bottom: 15px;
    }

    .filter-title {
      font-weight: bold;
      margin-bottom: 8px;
    }

    .filter-group {
      margin-bottom: 15px;
    }

    .slider-container {
      position: relative;
    }

    .max-value {
      position: absolute;
      right: 0;
      top: -25px;
      font-weight: bold;
      font-size: 12px;
      color: #333;
    }
  `}
      </style>

      <div className="filter-section">
      <div className="filter-header">Filters</div>

      {/* Price Filter */}
      <div className="filter-group">
        <div className="filter-title">Price</div>
        <div className="slider-container">
          <input
            type="range"
            className="form-range"
            min="0"
            max="20000"
            value={price}
            onChange={handlePriceChange}
          />
          <span className="max-value">${price}</span>
        </div>
      </div>

      {/* Manufacturer Filter */}
      <div className="filter-group">
        <div className="filter-title">Manufacturer</div>
        <input
          type="checkbox"
          id="manufacturer-all"
          checked={manufacturer.all}
          onChange={() => handleManufacturerChange("all")}
        />
        <label htmlFor="manufacturer-all">All</label>

        {["corsair", "msi"].map((key) => (
          <div key={key}>
            <input
              type="checkbox"
              id={`manufacturer-${key}`}
              checked={manufacturer[key]}
              onChange={() => handleManufacturerChange(key)}
            />
            <label htmlFor={`manufacturer-${key}`}>
              {key === "msi" ? key.toUpperCase() : key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
          </div>
        ))}
      </div>

      {/* Type Filter */}
      <div className="filter-group">
      <div className="filter-title">Type</div>
        <input
          type="checkbox"
          id="type-all"
          checked={type.all}
          onChange={() => handleTypeChange("all")}
        />
        <label htmlFor="type-all">All</label>

        {["ATX", "SFX"].map((key) => (
          <div key={key}>
            <input
              type="checkbox"
              id={`type-${key}`}
              checked={type[key]}
              onChange={() => handleTypeChange(key)}
            />
            <label htmlFor={`type-${key}`}>{key}</label>
          </div>
        ))}
      </div>

      {/* Efficiency Rating Filter */}
      <div className="filter-group">
      <div className="filter-title">Efficiency Rating</div>
        <input
          type="checkbox"
          id="efficiency_rating-all"
          checked={efficiency_rating.all}
          onChange={() => handleEfficiencyChange("all")}
        />
        <label htmlFor="efficiency_rating-all">All</label>

        {["80+ Gold", "80+ Bronze"].map((key) => (
          <div key={key}>
            <input
              type="checkbox"
              id={`efficiency_rating-${key}`}
              checked={efficiency_rating[key]}
              onChange={() => handleEfficiencyChange(key)}
            />
            <label htmlFor={`efficiency_rating-${key}`}>{key}</label>
          </div>
        ))}
      </div>
       
      {/* Wattage Filter */}
      <div className="filter-group">
        <div className="filter-title">Wattage</div>
        <div className="slider-container">
          <input
            type="range"
            className="form-range"
            min="0"
            max="2000"
            value={wattage}
            onChange={handleWattageChange}
          />
          <span className="max-value">{wattage} W</span>
        </div>
      </div>  

      {/* Modular Filter */}
      <div className="filter-group">
      <div className="filter-title">Modular</div>
        <input
          type="checkbox"
          id="modular-all"
          checked={modular.all}
          onChange={handleModularChange}
        />
        <label htmlFor="modular-all">All</label>

        {["Full", "None"].map((key) => (
          <div key={key}>
            <input
              type="checkbox"
              id={`modular-${key}`}
              checked={modular[key]}
              onChange={() => handleModularChange(key)}
            />
            <label htmlFor={`modular-${key}`}>{key}</label>
          </div>
        ))}
      </div>

      {/* Color Filter */}
      <div className="filter-group">
      <div className="filter-title">Color</div>
        <input
          type="checkbox"
          id="color-all"
          checked={color.all}
          onChange={() => handleColorChange("all")}
        />
        <label htmlFor="color-all">All</label>

        {["Black", "Grey"].map((key) => (
          <div key={key}>
            <input
              type="checkbox"
              id={`color-${key}`}
              checked={color[key]}
              onChange={() => handleColorChange(key)}
            />
            <label htmlFor={`color-${key}`}>{key}</label>
          </div>
        ))}
      </div>

      </div>
    </>
  );
};

export default PowerSupplySidebar;
