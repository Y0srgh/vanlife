import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
    const [HostVansData, setHostVansData] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => {
        console.log("data:", data.vans);
        setHostVansData(data.vans);
      });
  }, []);

  return (
    <div className="host-vans">
        <h1>Your listed vans</h1>
        {HostVansData.length>0 && (HostVansData.map(van=>(
            <Link key={van.id} to={van.id}>
            <div  className="host-van-container">
                <img src={van.imageUrl} alt="" className="host-van-image"/>
                <div className="host-van-container-desc">
                    <p className="host-van-name">{van.name}</p>
                    <p className="edit">Edit</p>
                    <p className="host-van-price">${van.price}/day</p>
                </div>
            </div></Link>
        )))||<h4>Loading ...</h4>
        
        }
    </div>
  );
}
