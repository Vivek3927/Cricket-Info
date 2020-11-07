import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "../HomeDetails/Home";
import Teamdata from "../Datas/Teamdata";
import PageNoFound from "../PageNotFound";

export default class CricInfo extends Component {
  render() {
    return (
      <div>
        <Router>
          <Link to="/teamdata"></Link>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:teams/:id" component={Teamdata} />
            <Route component={PageNoFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}
