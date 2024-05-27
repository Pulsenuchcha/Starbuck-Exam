import React, { useState } from 'react';
import './Categories.css';

const Filter = ({ onFilter }) => {
  const categories = ["Whole bean", "Cafetiere", "Filter", "Espresso", "French press"];
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxChange = (category) => {
    const newSelectedCategories = [...selectedCategories];
    if (newSelectedCategories.includes(category)) {
      // If category is already selected, remove it
      newSelectedCategories.splice(newSelectedCategories.indexOf(category), 1);
    } else {
      // If category is not selected, add it
      newSelectedCategories.push(category);
    }
    setSelectedCategories(newSelectedCategories);
    onFilter(newSelectedCategories);
  };

  return (
    <div className="filter-container flex flex-col text-left">
      {categories.map((category, index) => (
        <div key={index} className="checkbox-item flex items-center mb-2">
          <input
            type="checkbox"
            id={category}
            value={category}
            checked={selectedCategories.includes(category)}
            onChange={() => handleCheckboxChange(category)}
            className="mr-2 h-4 w-4 text-blue-600 form-checkbox"
          />
          <label htmlFor={category} className="cursor-pointer">{category}</label>
        </div>
      ))}
    </div>
  );
};

export default Filter;
