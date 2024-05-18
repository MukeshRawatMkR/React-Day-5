import {useRouteError} from "react-router-dom";
 const Error = () => {
 const err=useRouteError();
 console.log(err);
    return (

    <div>Opps!!!something went wrong</div>
  )
}
export default Error;
