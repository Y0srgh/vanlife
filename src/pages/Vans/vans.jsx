import React, { useEffect, useState } from "react";
import "../../style/vans.css";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../../api";
const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const [vansData, setVansData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(null);
  /**
   * the function says hellew
   */
  useEffect(() => {
    /*fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        console.log("data:", data);
        setVansData(data.vans);
      });*/
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans();
        setVansData(data);
        console.log(data);
      } catch (error) {
        console.log("there was an error");
        console.log(error);
        setError(error);
      }finally{
        setLoading(false);

      }
    }

    loadVans();
  }, []);

  const data = typeFilter
    ? vansData.filter((van) => van.type === typeFilter)
    : vansData;

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }
  //("van", { id: "", name: "", price: , description: "", imageUrl: "", type: "" })
  return (
    <main>
      <div className="vans ">
        <h1 className="vans-title">Explore our van options</h1>
        <div className="filter">
          {/*<Link className="filter-type simple" to="?type=simple">Simple</Link>
        <Link className="filter-type luxury" to="?type=luxury">Luxury</Link>
        <Link className="filter-type rugged" to="?type=rugged">Rugged</Link>
  <Link to="." className="clear-filter">Clear filters</Link>*/}
          <button
            className={
              "filter-type simple " +
              (typeFilter === "simple" ? "simple-selected" : "")
            }
            onClick={() => handleFilterChange("type", "simple")}
          >
            Simple
          </button>
          <button
            className={
              "filter-type luxury " +
              (typeFilter === "luxury" ? "luxury-selected" : "")
            }
            onClick={() => handleFilterChange("type", "luxury")}
          >
            Luxury
          </button>
          <button
            className={
              "filter-type rugged " +
              (typeFilter === "rugged" ? "rugged-selected" : "")
            }
            onClick={() => handleFilterChange("type", "rugged")}
          >
            Rugged
          </button>
          {typeFilter && (
            <button
              className="clear-filter"
              onClick={() => handleFilterChange("type", null)}
            >
              Clear filters
            </button>
          )}
        </div>
        {Loading && <h1>Loading...</h1>}
        {Error && <h1>There was an error : {Error.message}</h1>}
   
        {(!Error&&data.length > 0) && (
          <div className="vans-containers">
            {data.map((van) => (
              <div key={van.id} className="van-container">
                <Link
                  to={van.id}
                  state={{ search: searchParams.toString(), type: typeFilter }}
                  aria-label={`View details for ${van.name}, 
                             priced at $${van.price} per day`}
                >
                  <img className="van-image" src={van.imageUrl} alt="" />
                  <div className="van-container-content">
                    <p className="van-name">{van.name}</p>
                    <div>
                      <p className="van-price">${van.price}</p>
                      <p className="van-price-period">/day</p>
                    </div>
                    <p className={"van-type " + van.type}>{van.type}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Vans;
