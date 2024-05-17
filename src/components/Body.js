import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //Local state variable -> super powerful variable
  const [listOfRestaurants, setListOfRestaurant] = useState([]);

  const[filteredRestaurant, setFilteredRestaurant]=useState([]); 

  const [searchText, setSearchText]=useState("");

useEffect(()=>{
  // console.log("useEffect Called");
  fetchData();
},[]);

const fetchData=async ()=>{
  const data=await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.2685607&lng=78.00710389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
  const json=await data.json();
  // console.log(json);
  setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}

  return listOfRestaurants.length===0?<Shimmer/>:(//this is ternary operator.
    <div className="body">
      <div className="filter">
       <div className="search">
        <input type="text" className="search-box" value={searchText} 
        onChange={(e)=>{
setSearchText(e.target.value);
        }}/>
        <button onClick={()=>{
          //filter the restaurant cards and update the UI.
          //serachText

        }}>Search</button>
       </div>
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic here
          const filteredRestaurant= listOfRestaurants.filter(
              (res) => res?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.[0]?.info?.avgRating> 4
            );
            // console.log(listOfRestaurants);
          
            setFilteredRestaurant(filteredRestaurant);
      
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {
          //whenever we loop through map we should always use key to get rid of warning on console.
          filteredRestaurant.map((restaurant) => (
            <RestaurantCard key={ restaurant.info.id} resData={restaurant} />
           ))
        }
      </div>
    </div>
  );
};

export default Body;
