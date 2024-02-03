import React from 'react'
import { useOutletContext } from 'react-router-dom';

const VanPhotos =()=>{
    const van = useOutletContext();
    return(
        <img className="van-photos" src={van.imageUrl} alt="" />
        );
}

export default VanPhotos;