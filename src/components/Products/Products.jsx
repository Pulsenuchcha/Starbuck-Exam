import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import './Products.css';
import Search from '../Search/Search';
import Categories from '../Sidebar/Categories/Categories'

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const fetchData = async (retries = 3, delay = 1000) => {
    try {
      const response = await axios.get('https://cors-anywhere.herokuapp.com/https://coffee-list-api.vercel.app/api/data');
      console.log('Fetched Data:', response.data); // Log fetched data
      setProducts(response.data);
      setFilteredProducts(response.data); // Set initial filtered products
    } catch (error) {
      if (error.response && error.response.status === 429 && retries > 0) {
        // If the error is 429 and we have retries left, wait and try again
        setTimeout(() => {
          fetchData(retries - 1, delay * 2); // Exponential backoff
        }, delay);
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (query) => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page after search
  };

  const handleFilter = (selectedCategories) => {
    console.log('Selected Categories:', selectedCategories); // Log selected categories
  
    const filtered = selectedCategories.length > 0
      ? products.filter(product => {
          let lowerCaseGrindOptions = product.grind_option.map(option => option.toLowerCase());
          let lowerCaseSelectedCategories = selectedCategories.map(category => category.toLowerCase());
          let matchedOptions = lowerCaseGrindOptions.filter(option => lowerCaseSelectedCategories.includes(option));
          return matchedOptions.length > 0; // Check if any matched grind_option exists
        })
      : products;
  
    console.log('Filtered Products:', filtered); // Log filtered products
  
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page after filter
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
      <Categories onFilter={handleFilter} />
      <section className="card-container grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {currentProducts.map(product => (
          <section key={product.id} id="product" className="card">
            <img className="object-contain" src={product.image_url} alt="Product Image" />
            <div className="card-details">
              <h3 className="card-title">{product.name || 'Signature Blend'}</h3>
              <div className="category bg-black text-white px-2 py-1 rounded-full inline-block">
                {product.grind_option|| 'Whole Bean'}
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
