import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    
    render(){
        const{name, Location}=this.props;
        return(
            <div className="user-card">
            <h2>{name} </h2>
            <h3>{Location}</h3>
            <h4>Contact: @rwtposts</h4>
        </div>
        )
    }
};
export default UserClass;