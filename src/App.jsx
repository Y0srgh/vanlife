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
import HostVanDetail from './pages/Host/HostVanDetail';
import HostLayout from './components/HostLayout';
import VanDetails from './pages/Host/VanDetails';
import VanPricing from './pages/Host/VanPricing';
import VanPhotos from './pages/Host/VanPhotos';
import NotFound from './pages/notFound';
function App() {
    return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={< Layout />}>
        <Route path="/*" element={<NotFound/>}/> 
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>

      {/*the nesting here is not mendatory since both pages do not share any ui */}
        <Route path="vans">
          <Route index element={<Vans/>}/>
          <Route path=":id" element={<VanDetail/>}/>
        </Route>

        <Route path="host" element={<HostLayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="income" element={<Income/>}/>
          <Route path="reviews" element={<Reviews/>}/>
          <Route path="vans" element={<HostVans/>} />
          
          <Route path="vans/:id" element={<HostVanDetail/>}>
            <Route index element={<VanDetails />}/>
            <Route path="pricing" element={<VanPricing/>} />
            <Route path="photos" element={<VanPhotos/>}/>
          </Route>  
        </Route>
      </Route>
      </Routes> 

    </BrowserRouter>);
  
}
 
export default App;

