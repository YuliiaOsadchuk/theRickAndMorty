import React from "react";
import "./FilterPanel.scss";

const STATUS_OPTIONS = ["All", "Alive", "Dead", "Unknown"];
const GENDER_OPTIONS = ["All", "Male", "Female", "Genderless", "Unknown"];

const FilterPanel = ({ onStatusChange, onGenderChange }) => {
  const renderStatusFilter = (status) => (
    <div>
      <input
        type="radio"
        id="statusChoice"
        name="status"
        value={status}
        onChange={onStatusChange}
      />
      <label for="statusChoice">{status}</label>
    </div>
  );

  const renderGenderFilter = (gender) => (
    <div>
      <input
        type="radio"
        id="genderChoice"
        name="gender"
        value={gender}
        onChange={onGenderChange}
      />
      <label for="statusChoice">{gender}</label>
    </div>
  );

  return (
    <div className="filter-panel">
      <div className="filter">
        <p>Select characters status:</p>
        <div className="input-choices">
          {STATUS_OPTIONS.map((status) => renderStatusFilter(status))}
        </div>
      </div>
      <div className="filter">
        <p>Select characters gender:</p>
        <div className="input-choices">
          {GENDER_OPTIONS.map((gender) => renderGenderFilter(gender))}
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
