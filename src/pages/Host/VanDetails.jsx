import React from 'react'
import { useOutletContext } from 'react-router-dom';

const VanDetails = (props)=>{
    const van = useOutletContext();
    console.log(van);

    return(
        
        <div className="van-desc">
            <p className="van-desc-name">Name: <span> {van.name}</span></p>
            <p className="van-desc-type">Categorie: <span> {van.type}</span></p>
            <p className="van-desc-description">Description: <span> {van.description}</span></p>
            <p className="van-desc-visibility">Visibility: <span>Public</span></p>
        </div>
        
    );
}

export default VanDetails