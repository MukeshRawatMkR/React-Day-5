import {Component} from "react";
class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

componentDidMount(){
    console.log("This is being executed at last!");
}

  render() {
    const { name, Location } = this.props;

    const { count } = this.state;

    return (
      <div className="user-card">
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase the count
        </button>
        <h1>Count: {count}</h1>

        <h2>{name} </h2>
        <h3>{Location}</h3>
        <h4>Contact: @rwtposts</h4>
      </div>
    );
  }
}
export default UserClass;
