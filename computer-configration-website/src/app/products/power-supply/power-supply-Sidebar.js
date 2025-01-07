"use client";
import React, { useState, useEffect } from "react";
import { powerSupply } from "../../lib/placeholder_data"; // Importing the data from placeholder_data.js
import "./power-supply.css";

const PowerSupplySidebar = ({ onFilterChange, onPowerSupplySelect}) => {
  const [price, setPrice] = useState(20000);
  const [wattage, setWattage] = useState(2000);
  const [manufacturer, setManufacturer] = useState({
    all: true,
    corsair: false,
    msi: false,
  });
  const [type, setType] = useState({
    all: true,
    ATX: false,
    SFX: false,
  });
  const [efficiency_rating, setEfficiency] = useState({
    all: true,
    "80+ Gold": false,
    "80+ Bronze": false,
  });
  const [modular, setModular] = useState({
    all: true,
    Full: false,
    None: false,
  });
  const [color, setColor] = useState({
    all: true,
    Black: false,
    Grey: false,
  })

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPrice(newPrice);
    onFilterChange({ price: newPrice });
  };

  const handleWattageChange = (e) => {
    const newWattage = e.target.value;
    setWattage(newWattage);
    onFilterChange({ wattage: newWattage });
  };

  // Handle Manufacturer Filter
  const handleManufacturerChange = (key) => {
    const updatedManufacturer = { ...manufacturer };
  
    if (key === "all") {
      updatedManufacturer.all = true;
      updatedManufacturer.corsair = false;
      updatedManufacturer.msi = false;
    } else {
      updatedManufacturer[key] = !updatedManufacturer[key];
      updatedManufacturer.all = !updatedManufacturer.corsair && !updatedManufacturer.msi;
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
      updatedType.ATX = false;
      updatedType.SFX = false;
    } else {
      updatedType[key] = !updatedType[key];
      updatedType.all = !updatedType.ATX && !updatedType.SFX;
    }
  
    setType(updatedType);
  
    const selectedTypes = Object.keys(updatedType)
      .filter((key) => updatedType[key] && key !== "all")
      .map((key) => key);
  
    onFilterChange({ type: selectedTypes });
  };

  // Handle Efficiency Filter
  const handleEfficiencyChange = (key) => {
    const updatedEfficiency = { ...efficiency_rating };
  
    if (key === "all") {
      updatedEfficiency.all = true;
      updatedEfficiency["80+ Gold"] = false;
      updatedEfficiency["80+ Bronze"] = false;
    } else {
      updatedEfficiency[key] = !updatedEfficiency[key];
      updatedEfficiency.all = !updatedEfficiency["80+ Gold"] && !updatedEfficiency["80+ Bronze"];
    }
  
    setEfficiency(updatedEfficiency);
  
    const selectedEfficiencies = Object.keys(updatedEfficiency)
      .filter((key) => updatedEfficiency[key] && key !== "all")
      .map((key) => key);
  
    onFilterChange({ efficiency_rating: selectedEfficiencies });
  };

  // Handle Modular Filter
  const handleModularChange = (key) => {
    const updatedModular = { ...modular };

    if (key === "all") {
      updatedModular.all = true;
      updatedModular.Full = false;
      updatedModular.None = false;
    } else {
      updatedModular[key] = !updatedModular[key];
      updatedModular.all = !updatedModular.Full && !updatedModular.None;
    }

    setModular(updatedModular);

    const selectedModularOptions = Object.keys(updatedModular)
      .filter((key) => updatedModular[key] && key !== "all")
      .map((key) => key);

    onFilterChange({ modular: selectedModularOptions });
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
