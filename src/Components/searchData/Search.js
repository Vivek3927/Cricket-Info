import React from "react";
import "./Search.css";
import Table from "react-bootstrap/Table";

const Search = () => {
  return (
    <div className="container bg-light">
      <div className=""></div>
      <div className="container bg-light">
        <div className="row">
          <div className="col-md-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/25/Sachin_Tendulkar_at_MRF_Promotion_Event.jpg"
              alt="Sachin"
              className="Image"
            />
          </div>
          <div className="col-md-9 align-self-end NameInfo">
            <h1>Sachin Tendulkar</h1>
            <p className="India">India</p>
          </div>
        </div>
      </div>
      <div className="container mt-3 ">
        <div className="row">
          <div className="col-md-5 bg-light p-2 ">
            <h5>Personal Information</h5>
            <Table borderless>
              <tbody>
                <tr>
                  <td className="TextBold">Born</td>
                  <td>Apr 24, 1973 (47 years)</td>
                </tr>
                <tr>
                  <td className="TextBold">Birth Place</td>
                  <td>Bombay (now Mumbai), Maharashtra</td>
                </tr>
                <tr>
                  <td className="TextBold">Height</td>
                  <td>5 ft 5 in</td>
                </tr>
                <tr>
                  <td className="TextBold">Role</td>
                  <td>Batsman</td>
                </tr>
                <tr>
                  <td className="TextBold">Batting Style</td>
                  <td>Right Handed Bat</td>
                </tr>
                <tr>
                  <td className="TextBold">Bowling Style</td>
                  <td>Right-arm legbreak</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="col-md-7">
            <h3 className="ml-5 mt-3">Sachiiiiiiin, Sachin!</h3>
            <p className="col-md mt-5">
              You’ve heard tde chant. You may not have heard of tde sport, but you’ve heard the
              chant. The chant - one that a billion people once l...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
