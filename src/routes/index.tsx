import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import List from "../pages/List";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/books" exact component={List} />
        {/* <Route path="/books/:book+" exact component={List} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;