import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  state = {
    data: [],
    errMsg: "",
  };
  componentDidMount() {
    axios("https://crictime.herokuapp.com/teams")
      .then((res) => {
        // console.log(res);
        this.setState({ data: res.data });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ errMsg: "Went Something Wrong!" });
      });
  }
  handleClick = (datas) => {
    this.props.history.push(`/teams/${datas.id}`, {
      mydata: datas,
    });
  };

  render() {
    return (
      <div className="container  bg-light">
        <h3 className="text-center Text-Edit">Indian Premier League</h3>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 ">
            <ul className="list-group">
              {this.state.data
                ? this.state.data.map((datas) => {
                    // console.log(index);
                    return (
                      <li
                        className="list-group-item Col"
                        key={datas.id}
                        onClick={() => this.handleClick(datas)}
                      >
                        <Link to="/" className="List-Link">
                          <div className="media">
                            <img
                              src={datas.logo_image}
                              alt="Logo_img"
                              style={{ width: "30px", height: "30px", marginRight: "7px" }}
                            />
                            <div className="meda-body">{datas.name}</div>
                          </div>
                        </Link>
                        {/* < src={datas.cover_image} alt="cover_image" /> */}
                      </li>
                    );
                  })
                : this.state.errMsg}
            </ul>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    );
  }
}
export default Home;
