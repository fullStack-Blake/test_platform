import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router.jsx";

import Header from "./Header.jsx";
import Feed from "./Feed.jsx";
import Tab from "./Tab.jsx";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Tab />
      <Router />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
