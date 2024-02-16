import React, { useEffect, useState } from "react";
import "../../style/vans.css"
import { Link, useSearchParams } from "react-router-dom";
const Vans = () => {

  const [searchParams, setSearchParams]=useSearchParams();
  const typeFilter=searchParams.get('type');
  console.log(typeFilter);

  const [vansData, setVansData] = useState([]);
  /**
   * the function says hellew
   */
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        console.log("data:", data);
        setVansData(data.vans);
      });
  }, []);

  const data = typeFilter ? 
                vansData.filter(van=>van.type === typeFilter):
                vansData;

//("van", { id: "", name: "", price: , description: "", imageUrl: "", type: "" })
  return (
    <main><div className="vans ">
      <h1 className="vans-title">Explore our van options</h1>
      <div className="filter">
        <Link className="filter-type simple" to="?type=simple">Simple</Link>
        <Link className="filter-type luxury" to="?type=luxury">Luxury</Link>
        <Link className="filter-type rugged" to="?type=rugged">Rugged</Link>
        <Link to="." className="clear-filter">Clear filters</Link>
      </div>
      {data.length > 0 && (
      <div className="vans-containers">
        {data.map(van => ( 
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
    </div></main>
  );
};

export default Vans;
