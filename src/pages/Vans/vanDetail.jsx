import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
  const params = useParams();
  console.log(params);

  /**
 * description
    id
    imageUrl
    name
    price
    type

 */
  const [van, setVanData] = useState({});

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data:", data);
        console.log("data.vans", data.vans);
        setVanData(data.vans);
      });
  }, [params.id]);

  return (
    <div className="vans">
      
      {
        van.name&&(<div className="van-container">
          <img className="van-image van-image-detailed" src={van.imageUrl} alt="" />
          <div className="van-detailed-container-content">
            <p className={"van-detailed-type " + van.type}>{van.type}</p>
            <p className="van-detailed-name">{van.name}</p>
            <p className="van-detailed-price">
              ${van.price} <span>/day</span>{" "}
            </p>
            <p className="van-description">{van.description}</p>
            <button className="rent-btn ">
                Rent this van
            </button>
          </div>
        </div>)||<h2>Loading ...</h2>
      }
    </div>
  );
}
