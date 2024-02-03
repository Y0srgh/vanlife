import React, { Component, useEffect } from 'react';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import About from './pages/about';
import Vans from './pages/Vans/vans';
import Footer from './components/footer';
import Home from './pages/home';
import './App.css';
import VanDetail from './pages/Vans/vanDetail';
import Layout from './components/Layout';

import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostVans from './pages/Host/HostVans';
import HostLayout from './components/HostLayout';

function App() {
    return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={< Layout />}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>

        <Route path="vans">
          <Route index element={<Vans/>}/>
          <Route path=":id" element={<VanDetail/>}/>
        </Route>

        <Route path="host" element={<HostLayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="income" element={<Income/>}/>
          <Route path="reviews" element={<Reviews/>}/>
          <Route path="vans">
            <Route index element={<HostVans/>}/>
            <Route path=":id" element={<VanDetail/>}/>
          </Route>
        </Route>
      </Route>
      </Routes> 

    </BrowserRouter>);
  
}
 
export default App;

