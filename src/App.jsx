import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './pages/home/Home';
import Price from './pages/price/Price';
import Promotions from './pages/promotions/Promotions';
import Service from './pages/service/Service';
import Nav from './components/nav/Nav';


const App = () => {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/price' element={<Price/>}/>
        <Route path='/promotions' element={<Promotions/>}/>
        <Route path='/service' element={<Service/>}/>
      </Routes>
    </Router>
  )
}

export default App
