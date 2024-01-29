import React, { useEffect, useState } from "react";
import "../style/vans.css"
import { Link } from "react-router-dom";
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

//("van", { id: "", name: "", price: , description: "", imageUrl: "", type: "" })
  return (
    <div className="vans">
      <h1 className="vans-title">Explore our van options</h1>
      {vansData.length > 0 && (
      <div className="vans-containers">
        {vansData.map(van => ( 
        <div key={van.id} className="van-container">
          <Link 
            to={`/vans/${van.id}`}
            aria-label={`View details for ${van.name}, 
                             priced at $${van.price} per day`}
            >
          <img className="van-image" src ={van.imageUrl} alt="" />
          <div className="van-container-content">
            <p className="van-name">{van.name}</p>
            <div ><p className="van-price">${van.price}</p><p className="van-price-period">/day</p></div>
            <p className={ "van-type "+ van.type }>{ van.type }</p>
          </div>
          </Link>
        </div>))}
      </div>
        
      )}
    </div>
  );
};

export default Vans;
