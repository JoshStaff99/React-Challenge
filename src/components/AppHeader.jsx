import reactLogo from '../assets/react.svg';
import SearchBar from './SearchBar';
import FilterBy from './FilterBy';
import SortBy from './SortBy';

function AppHeader({
  menuOpen,
  setMenuOpen,
  searchQuery,
  setSearchQuery,
  filters,
  setFilters,
  categories,
  sortOption,
  setSortOption,
}) {
  return (
    <header className="app-header">
      <nav className="nav-bar">
        <div className="nav-logo">
          <img src={reactLogo} className="logo react" alt="React logo" />
          <span className="nav-title">React Challenge</span>
        </div>
        <div className="search-bar-large">
          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
        <div className={`nav-menu${menuOpen ? ' open' : ''}`}>
          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FilterBy
            filters={filters}
            setFilters={setFilters}
            categories={categories}
          />
          <SortBy
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
        </div>
      </nav>
    </header>
  );
}

export default AppHeader;