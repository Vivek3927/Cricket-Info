import React from "react";
import AutoComplete from "../searchData/AutoComplete";
import "./Header.css";

function Header() {
  return (
    <div className="container-fluid p-3 Nav">
      <div className="row">
        <div className="col-md-4">
          <h3 className="TextEdit">Indian Premier League</h3>
        </div>
        <div className="col-md-8">
          <div className="d-flex justify-content-end">
            <form className="form-inline" />
            <AutoComplete />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
