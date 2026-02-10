import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ProductDetails from '../components/ProductDetails'

function RouterConfig() {
  return (
   <Routes>
    <Route path='/' element= {<Home/>}/>
    <Route path='products/:id' element = {<ProductDetails/>}/>
   </Routes>
  )
}

export default RouterConfig
