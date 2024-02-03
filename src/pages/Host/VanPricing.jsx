import React from 'react'
import { useOutletContext } from 'react-router-dom';

const VanPricing =()=>{
    const van = useOutletContext();
    return(
        <p className='host-vans-pricing'>${van.price}.00<span>/day</span></p >
    );
}

export default VanPricing;