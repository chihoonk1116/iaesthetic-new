import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './pages/home/Home';
import Price from './pages/price/Price';
import Promotions from './pages/promotions/Promotions';
import FacialServices from './pages/service/FacialService';
import HairService from './pages/service/HairService';
import PermanentMakeupService from './pages/service/PermanentMakeupService';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/price' element={<Price/>}/>
        <Route path='/promotions' element={<Promotions/>}/>
        <Route path='/services/skin-care' element={<FacialServices/>}/>
        <Route path='/services/hairloss-prevention-removal' element={<HairService/>}/>
        <Route path='/services/permanent-makeup' element={<PermanentMakeupService/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
