import React, { useState, useEffect } from 'react';

// SearchBar Component
const SearchBar = ({ searchText, setSearchText }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      className="border p-2 rounded"
    />
  );
};

// ProductList Component
const ProductList = ({ products }) => {
  return (
    <div>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id}>
            {product.title} | {product.category} | ${product.price}
          </div>
        ))
      ) : (
        <div>No products found</div>
      )}
    </div>
  );
};

// App Component
const App = () => {
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to fetch products
  const fetchProducts = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
    setLoading(false);
  };

  // Debounce effect
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchText) {
        fetchProducts(searchText);
      }
    }, 1000); // Delay 1 second

    return () => clearTimeout(delayDebounceFn);
  }, [searchText]);

  return (
    <div className="app">
      <h1>Product Search</h1>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      {loading ? <p>Loading...</p> : <ProductList products={products} />}
    </div>
  );
};

export default App;
