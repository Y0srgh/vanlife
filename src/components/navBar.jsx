import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {

    render() { 
        return (
        
        <div className='navbar'>
        <div className='brand-name'>
            <Link to={"/"}>#VANLIFE</Link >
            
        </div><div className='links'>
            <Link to={"/about"}>About</Link>
            <Link to={"/vans"}>Vans</Link>
        </div>

        
        </div>
        );
    }
}
 
export default NavBar;