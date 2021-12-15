import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from "./Header.jsx";

import Feeds from "./Feeds.jsx";
import Feedss from "./Feedss.jsx";
import Feedsss from "./Feedsss.jsx";
// import Feeds from "./Feeds.jsx";
// import Feedss from "./Archive.jsx";
// import Feedsss from "./Detail.jsx";

const Router = () => (
  <BrowserRouter>
    {/* <Header /> */}
    <Switch>
      <Route path="/" exact component={Feeds} />
      <Route path="/archive" exact component={Feedss} />
      <Route path="/detail/:id" exact component={Feedsss} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Router;
