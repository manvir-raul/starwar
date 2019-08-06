import React, { Component } from "react";
import NavLink from "./components/NavLink/navlink";
import NextAndPrevious from "./components/NextAndPrevious/NextAndPrevious";
import "./App.css";
import axios from "axios";
import { Button } from "reactstrap";
import Planet from "./components/Planet/Planet";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [],
      url: "https://swapi.co/api/planets/?page=1",
      next: "",
      previous: "",
      modal: false,
      planet:{}
    };
  }

  onClickPlanet = (planet) => {
    console.log("planet",planet);
    
    this.setState(prevState => ({
      modal: !prevState.modal,
      planet:planet
    }));
  };

  regex = () => {
    let url = this.state.url;
    let number = new RegExp("[0-9]");
    // let number = url.substring(url.indexOf("page=")+5, url.indexOf("page=")+6);
    let page = number.exec(url);
    let page2 = Object.values(page);
    return page2[0];
  };

  componentDidMount() {
    this.fetchData(this.state.url);
  }

  fetchData = url => {
    axios
      .get(url)
      .then(response => {
        this.setState({
          planets: response.data.results,
          url: url,
          next: response.data.next,
          previous: response.data.previous
        });
      })
      .catch(error => {
        console.log("error", error);
      });
  };

  onClick = clicked => {
    if (clicked === "next") {
      this.fetchData(this.state.next);
    } else {
      this.fetchData(this.state.previous);
    }
  };

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <div className="sticky">
          <div className="App-div">
            <NavLink />
          </div>
          <div className="page">
            <h6>current Page {this.regex()}</h6>
          </div>
          <div>
            <NextAndPrevious onClick={this.onClick} />
          </div>
        </div>
        <div className="body">
          {this.state.planets.map((planet, index) => (
            <Button
              className="body-h2 "
              outline
              color="primary"
              style={{ display: "block", width: "100%" }}
              onClick={()=>this.onClickPlanet(planet)}
              key={index}
            >
              {planet.name}
            </Button>
          ))}
        </div>
        <Planet
          modal={this.state.modal}
          toggle={this.onClickPlanet}
          className="modal-content"
          planet={this.state.planet}
        />
      </div>
    );
  }
}

export default App;
