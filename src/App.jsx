import React, { Component, useEffect } from 'react';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import About from './pages/about';
import Vans from './pages/Vans/vans';
import Footer from './components/footer';
import Home from './pages/home';
import './App.css';
import VanDetail from './pages/Vans/vanDetail';
import Layout from './components/Layout';

function App() {
    return (
    <BrowserRouter>
      
      <Routes>
        <Route element={< Layout />}>
        <Route path="/vans" element={<Vans/>}/>
        <Route path="/vans/:id" element={<VanDetail/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Route>
      </Routes> 
      <Footer/>
    </BrowserRouter>);
  
}
 
export default App;

