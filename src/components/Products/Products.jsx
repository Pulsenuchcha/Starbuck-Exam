import React, { useState, useEffect } from 'react';
import './Products.css';
import Search from '../Search/Search';

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://cors-anywhere.herokuapp.com/https://coffee-list-api.vercel.app/api/data');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data); // Set initial filtered products
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (query) => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page after search
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="products-container">
      <Search onSearch={handleSearch} />
      <section className="card-container grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {currentProducts.map(product => (
          <section key={product.id} id="product" className="card">
            <img className="object-contain" src={product.image_url} alt="Product Image" />
            <div className="card-details">
              <h3 className="card-title">{product.name || 'Signature Blend'}</h3>
              <div className="category bg-black text-white px-2 py-1 rounded-full inline-block">
                {product.category || 'Whole Bean'}
              </div>
              <div className="card-price">{product.price ? `$${product.price}` : '$12.99'}</div>
              <div className="card-description">{product.description || 'No description available.'}</div>
            </div>
          </section>
        ))}
      </section>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handleClick(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Products;
