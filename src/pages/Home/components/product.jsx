import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_PATH } from '../../../hook/config';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [searchLocation, setSearchLocation] = useState('')
    const [searchCategory, setSearchCategory] = useState('')

  useEffect(() => {
        fetchProducts();
    }, [searchLocation, searchCategory]);

    const fetchProducts = async () => {
        try {
            let queryParams = [];
            if (searchLocation) queryParams.push(`location=${searchLocation.toLowerCase()}`);
            if (searchCategory && searchCategory !== 'all') queryParams.push(`category=${searchCategory}`);
            const response = await axios.get(`${API_PATH}/product?${queryParams.join('&')}`);
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

  return (
    <div>
          <h1>Products</h1>
          <div className="job-dropdown-filter">
            <p className="job-dropdown">
              Sort by Location
                  <input
                      type='text'
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                  />
            </p>
            <p className="job-dropdown">
              Sort by
               <select value={searchCategory} onChange={(e) => setSearchCategory(e.target.value)}>
                        <option value="all">All</option>
                        <option value="food">Food</option>
                        <option value="fruits">Fruit</option>
                        <option value="vegetables">Vegetables</option>
                        <option value="dairy">Dairy</option>
                        <option value="grains">Grains</option>
                    </select>
            </p>
          </div>
      <div className="product-container">
        {products.map(product => (
          <div className="product-card-container" key={product.id}>
            <div className="product-card-top-section">
              <div className="product-card-img-container">
                <span>
                  <div className="product-profile-icon">
                    <h1>{product.farmer.name.charAt(0).toUpperCase()}</h1>
                  </div>
                </span>
                <span className="ml-2">
                  <p className="product-title-name">
                    {product.name} 
                  </p>
                  <p>{product.category}</p>
                </span>
              </div>
              <div className="product-card-btn-container">
                    <button className="product-apply-btn">
                        <a href={`tel:${product.farmer.phoneNumber}`}>Call Farmer</a>
                    </button>
                    <button className="product-apply-btn">
                        <a href={`mailto:${product.farmer.email}`}>Email Farmer</a>
                    </button>
              </div>
            </div>
            <div className="product-card-bottom-section">
              <div>
                <span className="product-board-location mr-2">
                  {product.location}
                </span>
              </div>
              <div className='farmer-name'>
                <p className="mr-2">farmer: <span>{product.farmer.name}</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
