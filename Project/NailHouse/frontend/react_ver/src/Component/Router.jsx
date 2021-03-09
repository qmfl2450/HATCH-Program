import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "../Routes/Home/Home";
import Production from "../Routes/Production/Production";
import Login from "../Routes/Login/Login";
import SignUp from "../Routes/SignUp/SignUp";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/productions/:id" exact component={Production} />
        <Route path="/users/signin" exact component={Login} />
        <Route path="/users/new" exact component={SignUp} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
