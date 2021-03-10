import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "../Routes/Header/index";
import Production from "../Routes/Production/index";
import Login from "../Routes/Login/index";
import SignUp from "../Routes/SignUp/index";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Header} />
        <Route path="/store" exact component={Header} />
        <Route path="/experts" exact component={Header} />
        <Route path="/productions/:id" exact component={Production} />
        <Route path="/users/signin" exact component={Login} />
        <Route path="/users/new" exact component={SignUp} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
