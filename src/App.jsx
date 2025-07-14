import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import products from './components/products';
import SearchBar from './components/SearchBar';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <header className="app-header">
        <nav className="nav-bar">
          <div className="nav-logo">
            <img src={reactLogo} className="logo react" alt="React logo" />
            <span className="nav-title">React Challenge</span>
          </div>
          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </nav>
      </header>

      <div className='side-bar'>Hello World</div>

      <h2 id="products">Products</h2>

      {filteredProducts.length === 0 && (
        <p className="no-matches">No matches found.</p>
      )}

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Rating: {product.rating} ⭐</p>
            <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
          </div>
        ))}
      </div>

      <footer className="app-footer">
        <p>&copy; 2025 React Challenge</p>
      </footer>
    </>
  );
}

export default App;