import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API
    );
    const json = await data.json();
    setResInfo(json.data);
  };

  if(resInfo === null) return <Shimmer />;
 
  const{name, cuisines, costForTwo}  = resInfo?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info;
 
 
    return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(",")} - {costForTwo}</p>
      <ul>
        <li>Paneer</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
