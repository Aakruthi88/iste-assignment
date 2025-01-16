import './App.css'
import React from 'react'
import Home from './components/Home'
import Home1 from './components/Home1'
import Products from './components/Products'
import Footer from './components/Footer'

function App() {
  return (
    <div className='box-border .m-0 .p-0 '>
      <Home/>
      <Home1/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default App
