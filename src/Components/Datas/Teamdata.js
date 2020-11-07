import React, { Component } from "react";
import "./Teamdata.css";
import { Link, Route } from "react-router-dom";
import About from "../HomeDetails/Players/About";
export default class Teamdata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mydata: {},
    };
  }
  componentWillMount() {
    console.log(this.props.location);
    if (this.props.location.state && this.props.location.state.mydata) {
      this.setState({ mydata: this.props.location.state.mydata });
    } else {
      this.props.history.push("/");
      alert("You Can't Write URL manualy and change");
      // console.log(this.props);
    }
  }

  render() {
    const data = this.state.mydata;
    return (
      <div className="Body">
        <div className="Navbar">
          <h2 className="TextEdit">{data.name}</h2>
        </div>
        <img
          src={data.cover_image}
          alt="cover_image"
          style={{ width: "100%", height: "300px" }}
          className="img-fluid"
        />
        <hr />
      </div>
    );
  }
}
