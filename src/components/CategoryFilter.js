import React from 'react';

const CategoryFilter = ({ activeCategory, onCategoryChange }) => {
  const categories = [
    'general',
    'business',
    'entertainment',
    'health',
    'science',
    'sports',
    'technology'
  ];

  return (
    <div className="filters">
      {categories.map(category => (
        <button
          key={category}
          className={`filter-button ${category === activeCategory ? 'active' : ''}`}
          onClick={() => onCategoryChange(category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter; 