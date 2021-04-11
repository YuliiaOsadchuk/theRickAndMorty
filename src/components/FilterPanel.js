import React from "react";
import "./FilterPanel.scss";

const STATUS_OPTIONS = ["All", "Alive", "Dead", "Unknown"];
const GENDER_OPTIONS = ["All", "Male", "Female", "Genderless", "Unknown"];

const FilterPanel = ({ onStatusChange, onGenderChange }) => {
  const renderStatusFilter = (status) => (
    <div>
      <input
        type="radio"
        id={`${status}-status-choice`}
        name="status"
        value={status}
        onChange={onStatusChange}
      />
      <label for={`${status}-status-choice`}>{status}</label>
    </div>
  );

  const renderGenderFilter = (gender) => (
    <div>
      <input
        type="radio"
        id={`${gender}-gender-choice`}
        name="gender"
        value={gender}
        onChange={onGenderChange}
      />
      <label for={`${gender}-gender-choice`}>{gender}</label>
    </div>
  );

  return (
    <div className="filter-panel">
      <div className="filter">
        <span className="filter-label">Select characters status:</span>
        <div className="input-choices">
          {STATUS_OPTIONS.map((status) => renderStatusFilter(status))}
        </div>
      </div>
      <div className="filter">
        <span className="filter-label">Select characters gender:</span>
        <div className="input-choices">
          {GENDER_OPTIONS.map((gender) => renderGenderFilter(gender))}
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
