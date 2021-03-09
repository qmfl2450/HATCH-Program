import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "../Routes/Home/Home";
import Production from "../Routes/Home/Production/Production";
import Login from "../Routes/Login/Login";
import SignUp from "../Routes/SignUp/SignUp";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/productions/:id" component={Production} />
      <Route path="/users/signin" exact component={Login} />
      <Route path="/users/new" exact component={SignUp} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
