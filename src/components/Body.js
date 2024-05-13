import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //Local state variable -> super powerful variable
  let [listOfRestaurants, setListOfRestaurant] = useState([
    {
      data: {
        id: "97828",
        name: " Pizza",
        cloudinaryImageId: "lnvcfknv2yyhidbh6mky",
        locality: "Post Office Road",
        areaName: "Subhash Nagar",
        costForTwo: "₹275 for two",
        cuisines: ["Italian", "Pizzas"],
        avgRating: 2.3,
        deliveryTime: 27,
        parentId: "475411",
        avgRatingString: "4.3",
      },
    },
    {
      data: {
        id: "97829",
        name: "Jo Paaji",
        cloudinaryImageId: "lnvcfknv2yyhidbh6mky",
        locality: "Post Office Road",
        areaName: "Subhash Nagar",
        costForTwo: "₹275 for two",
        cuisines: ["Italian", "Pizzas"],
        avgRating: 4.3,
        parentId: "475411",
        deliveryTime: 27,
        avgRatingString: "4.3",
      },
    },
    {
      data: {
        id: "978528",
        name: " Pizza",
        cloudinaryImageId: "lnvcfknv2yyhidbh6mky",
        locality: "Post Office Road",
        areaName: "Subhash Nagar",
        costForTwo: "₹275 for two",
        cuisines: ["Italian", "Pizzas"],
        avgRating: 4.3,
        deliveryTime: 27,
        parentId: "475411",
        avgRatingString: "4.3",
      },
    }
  ]);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic here
          const filteredList= listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            // console.log(listOfRestaurants);
          
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {
          //whenever we loop through map we should always use key to get rid of warning on console.
          listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))
        }
      </div>
    </div>
  );
};

export default Body;
