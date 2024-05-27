import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import './Products.css';
import Search from '../Search/Search';
import Categories from '../Sidebar/Categories/Categories';
import Roast from '../Sidebar/Roast/Roast';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRoast, setSelectedRoast] = useState(null);

  const fetchData = async (retries = 3, delay = 1000) => {
    try {
      const response = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://coffee-list-api.vercel.app/api/data"
      );
      console.log("Fetched Data:", response.data);
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      if (error.response && error.response.status === 429 && retries > 0) {
        setTimeout(() => {
          fetchData(retries - 1, delay * 2);
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
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handleFilter = (selectedCategories) => {
    console.log('Selected Categories:', selectedCategories); 
    setSelectedCategories(selectedCategories);
    applyFilters(selectedCategories, selectedRoast);
  };

  const handleFilterRoast = (selectedRoast) => {
    console.log('Selected Roast:', selectedRoast); 
    setSelectedRoast(selectedRoast);
    applyFilters(selectedCategories, selectedRoast);
  };

  const applyFilters = (categories, roast) => {
    const filtered = products.filter(product => {
      const categoryMatch = categories.length === 0 || categories.some(cat => product.grind_option.includes(cat));
      const roastMatch = roast === null || roast.includes(product.roast_level);
      return categoryMatch && roastMatch;
    });
    setFilteredProducts(filtered);
    console.log(filtered);
    setCurrentPage(1); 
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

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
    <div className="products-container p-4">
      <Search onSearch={handleSearch} />
      <div className="flex flex-cols-2 lg:flex-row gap-4 mt-4 ">
        <div className=" w-60 m-14">
          <h2 class="text-center mb-5">Category</h2>
          <Categories onFilter={handleFilter} />
          <h2 class="text-center mb-5">Roast</h2>
          <Roast onFilter={handleFilterRoast} />
        </div>
        <div className="lg:w-3/4">
          <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {currentProducts.map(product => (
              <section key={product.id} id="product" className="card p-4 border rounded-lg shadow-lg">
                <img className="object-contain w-full h-48" src={product.image_url} alt="Product Image" />
                <div className="card-details mt-4">
                  <h3 className="card-title font-semibold text-lg">{product.name || 'Signature Blend'}</h3>
                  <div className="category bg-black text-white px-2 py-1 rounded-full inline-block mt-2">
                    {product.grind_option || 'Whole Bean'}
                  </div>
                  <div className="card-price mt-2 text-lg font-bold">{product.price ? `$${product.price}` : '$12.99'}</div>
                  <div className="card-description mt-2">{product.description || 'No description available.'}</div>
                </div>
              </section>
            ))}
          </section>
          <div className="pagination mt-4 flex justify-center">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handleClick(index + 1)}
                className={`px-4 py-2 mx-1 border rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Products;
