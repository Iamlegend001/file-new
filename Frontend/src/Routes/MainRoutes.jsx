import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import { isDocumentVisible } from './../../node_modules/@reduxjs/toolkit/src/query/utils/isDocumentVisible';
import Products from '../Pages/Products';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import { useSelector } from 'react-redux';
import CreateProduct from '../Pages/admin/CreateProduct';
import UpdateProduct from '../Pages/admin/ProductDetails';

const MainRoutes = () => {

  return (
    <Routes >
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/login' element={<Login/>}/>
      {/* <Route path='/login' element={<Login/>}/> */}
      <Route path='/register' element={<Register/>}/>
      <Route path='/admin/create-product' element={<CreateProduct/>}/>
      <Route path='/product/:id' element={<UpdateProduct/>}/>
    </Routes>
  )
}

export default MainRoutes