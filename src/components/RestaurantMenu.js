import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {

const{resId}=useParams();
const resInfo=useRestaurantMenu(resId);//custom hook.
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo } =
    resInfo?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]
      ?.info;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwo}
      </p>
      <ul>
        <li>Paneer</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
