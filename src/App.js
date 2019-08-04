import React, { Component } from "react";
import NavLink from "./components/NavLink/navlink";
import NextAndPrevious from './components/NextAndPrevious/NextAndPrevious';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: []
    };
  }

  componentDidMount() {
    fetch("https://swapi.co/api/planets/")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        return this.setState({ planets: data.results });
      });
  }

  render() {
    console.log(this.state.planets);
    return (
      <div className="App">
        <div className="App-div">
          <NavLink />
        </div>
        <div className="body">
          {this.state.planets.map((planet, index) => (
            <h2 className="body-h2" key={index}>
              {planet.name}
            </h2>
          ))}
        </div>
        <div>
          <NextAndPrevious/>
        </div>
      </div>
    );
  }
}

export default App;
