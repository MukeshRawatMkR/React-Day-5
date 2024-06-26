import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import { withPromotedLabel } from "./RestaurantCard";
const Body = () => {
  //Local state variable -> super powerful variable
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
console.log(listOfRestaurants);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);//returns new component.
  useEffect(() => {
    // console.log("useEffect Called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.2685607&lng=78.00710389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

const onlineStatus= useOnlineStatus();
if(onlineStatus===false )return( <h1>You are offline, User</h1>);


  return listOfRestaurants.length === 0 ? (
    <Shimmer /> //this is ternary operator.
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 flex items-center">
          { <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          /> }
          <button
            className="px-4 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.data.name.toLowerCase().include(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4">
        <button
          className="p-2 bg-green-100 m-4 rounded-lg"
          onClick={() => {
            //filter logic here
            const filteredRestaurant = listOfRestaurants.filter(
              (res) =>
                res?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
                  ?.restaurants?.[0]?.info?.avgRating > 4
            );
            // console.log(listOfRestaurants);

            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Top Rated Restaurants For you
        </button>
        </div>
        
      </div>
      <div className="res-container flex flex-wrap">
        {
          //whenever we loop through map we should always use key to get rid of warning on console.
          filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {
                restaurant.info.isOpen?(<RestaurantCardPromoted resData={restaurant}/>):(      <RestaurantCard resData={restaurant} />
              )       
              }
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Body;
