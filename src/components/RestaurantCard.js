import { CDN_URL } from "../utils/constants";//named exports imported like this.


const RestaurantCard = (props) => {
  const { resData } = props;
 //destructuring of objects:
const{cloudinaryImageId, name, cuisines, avgRating,sla}= resData?.info;



  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL+ cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      {/* <h4>{resList[0].data.sla.deliveryTime} minutes </h4> */}
      
      <h4>{sla?.slaString}  </h4>
     
       </div> 
  );
};


  export default RestaurantCard;