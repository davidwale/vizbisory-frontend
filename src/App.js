import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import RegistrationPage from './pages/FarmerRegistration/registration'
import AddProductPage from './pages/AddProduct/addProducts'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<RegistrationPage />} />
          <Route path='/add-product' element={<AddProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
