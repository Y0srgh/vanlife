import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import VanDetails from "./VanDetails";
const HostVanDetail = () => {
  const { id } = useParams();
  /*{
    "id": "1",
    "name": "Modest Explorer",
    "price": 60,
    "description": "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
    "imageUrl": "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
    "type": "simple",
    "hostId": "123"
} */
  const [van, setHostVanData] = useState([]);
  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data:", data.vans);
        setHostVanData(data.vans[0]);
      });
  }, []);

  return (
    <section>
      <NavLink to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </NavLink>
      {van && (
        <div className="host-van-detail">
          
            <div className="host-van-detail-general">
              <img
                className="host-van-detail-image"
                src={van.imageUrl}
                alt=""
              />
              <div className="host-van-detail-text">
                <p className={"van-detailed-type van-type " + van.type}>
                  {van.type}
                </p>
                <p className="van-detailed-name">{van.name}</p>
                <p className="van-price">
                  ${van.price} <span>/day</span>{" "}
                </p>
              </div>
            </div>
            {/*<VanDetails van={van}/>*/}

            <nav className="host-links">
              <NavLink to={`.`} end className={({ isActive }) => (isActive ? "host-links-active" : null)}>Details</NavLink>
              <NavLink to={`pricing`} className={({ isActive }) => (isActive ? "host-links-active" : null)}>Pricing</NavLink>
              <NavLink to={`photos`} className={({ isActive }) => (isActive ? "host-links-active" : null)}>Photos</NavLink>
            </nav>
          
          <Outlet context={van}/>
        </div>
      )}
    </section>
  );
};

export default HostVanDetail;
