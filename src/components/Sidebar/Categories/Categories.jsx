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
    <div className="filter-container">
      {categories.map((category, index) => (
        <div key={index} className="checkbox-item">
          <input
            type="checkbox"
            id={category}
            value={category}
            checked={selectedCategories.includes(category)}
            onChange={() => handleCheckboxChange(category)}
          />
          <label htmlFor={category}>{category}</label>
        </div>
      ))}
    </div>
  );
};

export default Filter;
