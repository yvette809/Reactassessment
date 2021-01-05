import React from "react";
import REACTDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay"

class App extends React.Component {
  state = {
    lat: null,
    errMessage: "",
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errMessage: err.message })
    );
  }

  render() {
    if (this.state.errMessage && !this.state.lat) {
      return <div>Error: {this.state.errMessage}</div>;
    }
    if (!this.state.errMessage && this.state.lat) {
      return <SeasonDisplay lat ={this.state.lat}/>
    }

    return <div>Loading!</div>;
    // return (
    //  {this.state.errMessage && !this.state.latitude? (<h1>Error: {this.state.errMessage}</h1>): (<h1>Latitude: {this.state.lat}</h1>)}
    // );
  }
}

REACTDOM.render(<App />, document.querySelector("#root"));

export default App;
