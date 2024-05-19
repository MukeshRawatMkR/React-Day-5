import {Component} from "react";
class UserClass extends Component {
  constructor(props) {
    super(props);
    
    this.state={
        userInfo:{
            name:"Lorem Ipsum",
            location:"Default",
            // avatar_url:"http://dummy-photo.com",
        }
    };
  }

async componentDidMount(){
    const data=await fetch("https://api.github.com/users/mukeshrawatmkr");
    const json=await data.json();
    
    this.setState({
        userInfo:json,
    });
}

componentDidUpdate(){
    console.log("component did update");
}
componentWillUnmount(){
    console.log("I'll be gone as soon as you go to other page");
}

render() {
      const{name, location, avatar_url}=this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>{name} </h2>
        <h3>{location}</h3>
        <h4>Contact: @rwtposts</h4>
      </div>
    );
  }
}
export default UserClass;
