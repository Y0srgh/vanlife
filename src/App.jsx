import React, { Component } from 'react';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import NavBar from './components/navBar';
import About from './components/about';
import Vans from './components/vans';
import Footer from './components/footer';
import Home from './components/home';
import './App.css';
class App extends Component {
  render() { 
    return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/vans" element={<Vans/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes> 
      <Footer/>
    </BrowserRouter>);
  }
}
 
export default App;

