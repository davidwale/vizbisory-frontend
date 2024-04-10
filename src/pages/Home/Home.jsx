import React from 'react'
import './style.css'
import ProductList from './components/product'
import NavBar from '../../component/Navbar/Navbar'

function Home() {
  return (
    <>
      <NavBar />
      <div className='home'>
        <ProductList />
      </div>
    </>
  )
}

export default Home
