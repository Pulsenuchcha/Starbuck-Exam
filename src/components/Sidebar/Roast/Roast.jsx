import React, { useState } from 'react';
import './Roast.css';

const Filter = ({ onFilter }) => {
  const categories = [
    { value: [1, 2], label: 'Blonde Roast' },
    { value: [3, 4], label: 'Medium Roast' },
    { value: [5, 6], label: 'Dark Roast' }
  ];
  const [selectedRoast, setSelectedRoast] = useState(null);

  const handleCheckboxChange = (roast) => {
    if (selectedRoast && selectedRoast[0] === roast[0] && selectedRoast[1] === roast[1]) {
      // If the same category is already selected, deselect it
      setSelectedRoast(null);
      onFilter(null); // Notify parent component of deselection
    } else {
      // If a different category is selected, update selection
      setSelectedRoast(roast);
      onFilter(roast); // Notify parent component of new selection
    }
  };

  return (
    <div className="filter-container flex flex-col text-left">
      {categories.map((category, index) => (
        <div key={index} className="checkbox-item flex items-center mb-2">
          <input
            type="checkbox"
            id={`${category.value[0]}-${category.value[1]}`}
            value={category.value}
            checked={selectedRoast && selectedRoast[0] === category.value[0] && selectedRoast[1] === category.value[1]}
            onChange={() => handleCheckboxChange(category.value)}
            className="mr-2 h-5 w-5 text-blue-600 form-checkbox"
          />
          <label htmlFor={`${category.value[0]}-${category.value[1]}`} className="cursor-pointer">
            {category.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Filter;
