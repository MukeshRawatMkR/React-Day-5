import { CDN_URL } from "../utils/constants";//named exports imported like this.


const RestaurantCard = (props) => {
  const { resData } = props;
 //destructuring of objects:
 const{cloudinaryImageId, name, cuisines, avgRating,sla}= resData?.info;



  return (
    <div
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300"
      
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL+ cloudinaryImageId}
      />
      <h3 className="font-bold  py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      {/* <h4>{resList[0].data.sla.deliveryTime} minutes </h4> */}
      
      <h4>{sla?.slaString}  </h4>
     
       </div> 
  );
};


export const withPromotedLabel=(RestaurantCard)=>{
return(props)=>{//component which returns JSX.
return(
  <div>
    <label className="absolute bg-gray-500 text-white rounded-md m-1  ">Promoted</label>
    <RestaurantCard {...props}/>
  </div>
)
}
} 



  export default RestaurantCard;