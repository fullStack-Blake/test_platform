import React from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import Feed from "./Feed.jsx";
import Detail from "./Detail.jsx";
import Archive from "./Archive.jsx";
import Tab from "./Tab.jsx";
import Header from "./Header.jsx";

const Router = () => (
  <div>
    <HashRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Feed} />
        <Route path="/archive" exact component={Archive} />
        <Route path="/detail/:id" exact component={Detail} />
        <Redirect path="*" to="/" />
      </Switch>
    </HashRouter>
  </div>
);

export default Router;
