import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="container-fluid p-3 Nav">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <h3 className="TextEdit">Indian Premier League</h3>
        </div>
        <div className="col-md-4">
          <div className="d-flex justify-content-end">
            <form className="form-inline" />
            <input
              className="form-control w-50"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-info " type="submit">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
