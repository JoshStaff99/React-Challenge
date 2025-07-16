import { useState } from 'react';
import './App.css';
import products from './components/products';
import SideBar from './components/SideBar';
import AppHeader from './components/AppHeader';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false); // 🍔 new state
  const [filters, setFilters] = useState({
    inStock: false,
    category: '',
    priceRange: [0, 1000],
  });

  const categories = [...new Set(products.map(product => product.category))];

  const filteredProducts = products.filter(product => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStock = !filters.inStock || product.inStock;
    const matchesCategory = !filters.category || product.category === filters.category;
    const matchesPrice =
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];

    return matchesSearch && matchesStock && matchesCategory && matchesPrice;
  });

  return (
    <>
      <AppHeader
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className='fake-header'></div>

      <div className="main-content">
        <SideBar
          filters={filters}
          setFilters={setFilters}
          categories={categories}
        />

        <div className="product-section">
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
        </div>
      </div>

      <footer className="app-footer">
        <p>&copy; 2025 React Challenge</p>
      </footer>
    </>
  );
}

export default App;