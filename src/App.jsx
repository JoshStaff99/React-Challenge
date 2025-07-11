
import reactLogo from './assets/react.svg'
import './App.css'
import products from './components/products'

function App() {

  return (
    <>
      <header className="app-header">
        <nav className="nav-bar">
          <div className="nav-logo">
            <img src={reactLogo} className="logo react" alt="React logo" />
            <span className="nav-title">React Challenge</span>
          </div>
          <ul className="nav-links">
            <li><a href="#products">Products</a></li>
          </ul>
        </nav>
      </header>
      <h2 id="products">Products</h2>
      <div className="products-grid">
        {products.map(product => (
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
  )
}

export default App
