import React from 'react';
import FilterBy from './FilterBy';
import SortBy from './SortBy';

function SideBar({ filters, setFilters, categories, sortOption, setSortOption }) {
  return (
    <div className="side-bar">
      <h2>Filter By</h2>
      <FilterBy filters={filters} setFilters={setFilters} categories={categories} />
      <SortBy sortOption={sortOption} setSortOption={setSortOption} />
    </div>
  );
}

export default SideBar;