import React from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import Feed from "./Feed.jsx";
import Detail from "./Detail.jsx";

const Router = () => (
  <div>
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Feed} />
        <Route path="/feed" exact component={Feed} />
        <Route path="/detail/:id" exact component={Detail} />

        <Redirect path="*" to="/" />
      </Switch>
    </HashRouter>
  </div>
);

export default Router;
