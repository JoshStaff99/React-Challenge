import React from 'react';

function SideBar({ filters, setFilters, categories }) {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handlePriceChange = (e, index) => {
    const newRange = [...filters.priceRange];
    newRange[index] = Number(e.target.value);
    setFilters(prev => ({ ...prev, priceRange: newRange }));
  };

  return (
    <div className="side-bar">
      <h2>Filter By</h2>

      {/* In Stock */}
      <div className="filter-group">
        <label>
          <input
            type="checkbox"
            name="inStock"
            checked={filters.inStock}
            onChange={handleChange}
          />
          In Stock Only
        </label>
      </div>

      {/* Category Dropdown */}
      <div className="filter-group">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={filters.category}
          onChange={handleChange}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div className="filter-group">
        <label>Price Range:</label>
        <div className="price-inputs">
          <input
            type="number"
            value={filters.priceRange[0]}
            onChange={(e) => handlePriceChange(e, 0)}
            placeholder="Min"
            min="0"
          />
          <span> - </span>
          <input
            type="number"
            value={filters.priceRange[1]}
            onChange={(e) => handlePriceChange(e, 1)}
            placeholder="Max"
            min="0"
          />
        </div>
      </div>
    </div>
  );
}

export default SideBar;