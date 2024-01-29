import React, { useEffect, useState } from "react";
import "../style/vans.css"
const Vans = () => {
  const [vansData, setVansData] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        console.log("data:", data);
        setVansData(data.vans);
      });
  }, []);

  useEffect(() => {
    console.log("halo:", vansData);
  }, [vansData]);
//("van", { id: "", name: "", price: , description: "", imageUrl: "", type: "" })
  return (
    <div className="vans">
      <h1 className="vans-title">Explore our van options</h1>
      {vansData.length > 0 && (
      <div className="vans-container">
        {vansData.map(van => (
        <div className="van-container">
          
          <img className="van-image" src ={van.imageUrl} alt="" />
          <div className="van-container-content">
            <p className="van-name">{van.name}</p>
            <div ><p className="van-price">${van.price}</p><p className="van-price-period">/day</p></div>
            <p className={ "van-type "+ van.type }>{ van.type }</p>
          </div>
        </div>))}
      </div>
        
      )}
    </div>
  );
};

export default Vans;
