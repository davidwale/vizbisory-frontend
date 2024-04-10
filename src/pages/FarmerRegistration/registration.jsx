import React, { useState } from 'react';
import axios from 'axios';
import './style.css'
import { API_PATH } from '../../hook/config';
import NavBar from '../../component/Navbar/Navbar'


const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    farmName: '',
    email: '',
    phoneNumber: ''
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
      const response = await axios.post(`${API_PATH}/register`, formData);
        setSuccess(response.data.message)
        window.location.href = '/'
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
          <h1>Registration</h1>
          {error && (
              <p className='error'>{error}</p>
          )}
          {success && (
              <p className='success'>{success}</p>
          )}
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name*</p>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          <p>Username*</p>
          <input type="text" name="username" value={formData.username.toLowerCase()} onChange={handleChange} required />
        </label>
        <label>
          <p>Farm Name*</p>
          <input type="text" name="farmName" value={formData.farmName} onChange={handleChange} required />
        </label>
        <label>
          <p>Email*</p>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          <p>Phone Number*</p>
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </label>
        <button type="submit">Register</button>
      </form>
      </div>
      </>
  );
};

export default RegistrationPage;
