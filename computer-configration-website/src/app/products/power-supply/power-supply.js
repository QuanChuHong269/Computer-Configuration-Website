'use client';
import './power-supply.css';
import React, { useState } from 'react';
import { powerSupply } from '../../lib/placeholder_data'; // Importing the data from placeholder_data.js
import PowerSupplySidebar from './power-supply-Sidebar'; // Import Sidebar component

const Powersupply = ({ powerSupply }) => {
    const [powerSupplyData, setPowerSupplyData] = useState(powerSupply);
    const [selectedPowerSupplies, setSelectedPowerSupplies] = useState([]);
    const handleFilterChange = (newFilters) => {
        let filteredData = powerSupply;
        // Apply price filter
        if (newFilters.price) {
            filteredData = filteredData.filter(
                (powerSupply) => powerSupply.current_price <= newFilters.price
            );
        }
        // Apply type filter
        if (newFilters.type && newFilters.type.length > 0) {
            filteredData = filteredData.filter((powerSupply) =>
              newFilters.type.includes(powerSupply.specification.type)
            );
        }
        // Apply efficiency_rating rating filter
        if (newFilters.efficiency_rating && newFilters.efficiency_rating.length > 0) {
            filteredData = filteredData.filter((powerSupply) =>
              newFilters.efficiency_rating.includes(powerSupply.specification.efficiency_rating)
            );
        }
        // Apply wattage filter
        if (newFilters.wattage) {
            filteredData = filteredData.filter(
            (powerSupply) => powerSupply.specification.wattage <= newFilters.wattage
            );
        }
        // Apply modular filter
        if (newFilters.modular && newFilters.modular.length > 0) {
            filteredData = filteredData.filter((powerSupply) =>
              newFilters.modular.includes(powerSupply.specification.modular)
            );
        }
        // Apply color filter
        if (newFilters.color && newFilters.color.length > 0) {
            filteredData = filteredData.filter((powerSupply) =>
              newFilters.color.includes(powerSupply.specification.color)
            );
        }
        // Apply manufacturer filter
        if (newFilters.manufacturer && newFilters.manufacturer.length > 0) {
            filteredData = filteredData.filter((cpu) =>
            newFilters.manufacturer.some((manufacturer) =>
                cpu.name.toLowerCase().includes(manufacturer.toLowerCase())
            )
            );
        }
        setPowerSupplyData(filteredData);
    };

    const handlePowerSupplySelect = (powerSupply) => {
        setSelectedPowerSupplies(powerSupply);
    };

    const filteredPowerSupplyData = powerSupplyData.filter(
        (powerSupply) =>
            selectedPowerSupplies.length === 0 ||
            selectedPowerSupplies.some((selected) => selected.id === powerSupply.id)
    );

    return (
        <div style={{ display: 'flex' }}>
          <PowerSupplySidebar
            onFilterChange={handleFilterChange}
            onPowerSupplySelect={handlePowerSupplySelect}
          />
          <div style={{ marginLeft: '20px', flex: 1 }}>
            <h1>Choose a Power Supply</h1>
            <table className="power-supply-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Type</th>
                  <th>Efficiency Rating</th>
                  <th>Wattage</th>
                  <th>Modular</th>
                  <th>Color</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredPowerSupplyData.map((powerSupply) => (
                  <tr key={powerSupply.id}>
                    <td>{powerSupply.name}</td>
                    <td>{powerSupply.specification.type}</td>
                    <td>{powerSupply.specification.efficiency_rating}</td>
                    <td>{powerSupply.specification.wattage} W</td>
                    <td>{powerSupply.specification.modular}</td>
                    <td>{powerSupply.specification.color}</td>
                    <td>${(powerSupply.current_price / 100).toFixed(2)}</td>
                    <td>
                      <button
                        onClick={() => console.log('Added Power Supply:', powerSupply)}
                        style={{
                          backgroundColor: '#1abc9c',
                          color: 'white',
                          border: 'none',
                          padding: '8px 16px',
                          cursor: 'pointer',
                          borderRadius: '5px',
                        }}
                      >
                        Add
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    );
};

export default Powersupply;