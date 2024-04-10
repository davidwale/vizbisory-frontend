import React, { useState } from 'react';
import axios from 'axios';
import './style.css'
import { API_PATH } from '../../hook/config';
import NavBar from '../../component/Navbar/Navbar'


const AddProductPage = () => {
  const [formData, setFormData] = useState({
    productName: '',
    username: '',
    description: '',
    location: '',
    category: ''
  });
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
    
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      setError(null)
    try {
      const response = await axios.post(`${API_PATH}/add-product`, formData);
        setSuccess(response.data.message)
        setTimeout(() => {
        window.location.href = '/'
      }, 3000)
    } catch (error) {
        setSuccess(null)
      console.error('Error registering:', error);
      setError(error.response.data.message)
    }
  };

    return (
        <>
        <NavBar />
    <div className="registration-container">
          <h1>Add Product</h1>
          {error && (
              <p className='error'>{error}</p>
          )}
          {success && (
              <p className='success'>{success}</p>
          )}
      <form onSubmit={handleSubmit}>
        <label>
          <p>Product Name*</p>
          <input type="text" name="productName" value={formData.productName} onChange={handleChange} required />
        </label>
        <label>
          <p>Farmer Username*</p>
          <input type="text" name="username" value={formData.username.toLowerCase()} onChange={handleChange} required />
        </label>
       <label>
        <p>Category*</p>
        <select name="category" value={formData.category} onChange={handleChange} required>
            <option value="">Select a category</option>
            <option value="food">Food</option>
            <option value="fruits">Fruits</option>
            <option value="vegetables">Vegetables</option>
            <option value="dairy">Dairy</option>
            <option value="grains">Grains</option>
        </select>
        </label>
        <label>
          <p>Description*</p>
          <textarea type="email" name="description" value={formData.description} onChange={handleChange} required />
        </label>
        <label>
          <p>Location*</p>
          <input type="tel" name="location" value={formData.location} onChange={handleChange} required />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
       </>
  );
};

export default AddProductPage;
