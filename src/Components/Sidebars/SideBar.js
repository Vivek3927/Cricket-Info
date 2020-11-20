import React, { Component } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleLeft: false,
    };
  }
  render() {
    return (
      <div>
        <Button
          icon="pi pi-align-justify"
          onClick={() => this.setState({ visibleLeft: true })}
          className="mr-3"
        />
        <Sidebar
          visible={this.state.visibleLeft}
          baseZIndex={1000000}
          onHide={() => this.setState({ visibleLeft: false })}
        >
          <h1 style={{ fontWeight: "normal" }}>Left Sidebar</h1>
          <Link to="/Save">
            <Button
              type="button"
              onClick={() => this.setState({ visibleLeft: false })}
              label="Save"
              className="p-button-success"
              style={{ marginRight: ".25em" }}
            />
          </Link>
          <Button
            type="button"
            onClick={() => this.setState({ visibleLeft: false })}
            label="Cancel"
            className="p-button-secondary"
          />
        </Sidebar>
      </div>
    );
  }
}
