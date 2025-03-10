'use client'
import './case.css';
import React, { useState } from 'react';
import { pcCase } from '../../lib/placeholder_data'; // Importing the data from placeholder_data.js
import CaseSidebar from './case-sidebar'; // Import Sidebar component

const Case = ({pcCase}) => {
    const [pcCaseData, setpcCaseData] = useState(pcCase);
    const [selectedpcCases, setSelectedpcCases] = useState([]);
    const handleFilterChange = (newFilters) => {
        let filteredData = pcCase;
        // Apply price filter
        if (newFilters.price) {
            filteredData = filteredData.filter(
                (pcCase) => pcCase.current_price <= newFilters.price
            );
        }
        // Apply manufacturer filter
        if (newFilters.manufacturer && newFilters.manufacturer.length > 0) {
            filteredData = filteredData.filter((pcCase) =>
            newFilters.manufacturer.some((manufacturer) =>
                pcCase.name.toLowerCase().includes(manufacturer.toLowerCase())
            )
            );
        }
        // Apply type filter
        if (newFilters.type && newFilters.type.length > 0) {
            filteredData = filteredData.filter((pcCase) =>
              newFilters.type.includes(pcCase.specification.type)
            );
        }
        // Apply color filter
        if (newFilters.color && newFilters.color.length > 0) {
            filteredData = filteredData.filter((pcCase) =>
              newFilters.color.includes(pcCase.specification.color)
            );
        }
    }
    return (
        <div className="cpu-container">
            <h1>Choose a Case</h1>
            <table className="cpu-table">
                <thead>
                    <tr>
                        <th>Manufacturer</th>
                        <th>type</th>
                        <th>Color</th>
                        <th>Power supply</th>
                        <th>side pannel</th>
                        <th>External volume</th>
                        <th>Drive Bays</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {filteredpcCaseData.map((pcCase) => (
                    <tr key={pcCase.id}>
                        <td>
                            {pcCase.manufacturer}
                        </td>
                        <td>{pcCase.specification.type} </td>
                        <td>{pcCase.specification.color}   </td>
                        <td>{pcCase.specification.power_supply}  </td>
                        <td>{pcCase.specification.side_panel}  </td>
                        <td>{pcCase.specification.volume}  </td>
                        <td>{pcCase.specification.drive_bays} </td>
                        <td>{(pcCase.current_price / 100).toFixed(2)} $</td>
                        <td>
                            <button
                                onClick={() => console.log('Added cooler:', cooler)}
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
    );
};

export default Case;