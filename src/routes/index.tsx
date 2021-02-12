import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";

import Home from "../pages/Home";
import List from "../pages/List";
import Book from "../pages/Book";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <QueryParamProvider ReactRouterRoute={Route}>
          <Route path="/" exact component={Home} />
          <Route path="/books" exact component={List} />
          <Route path="/books/:book+" exact component={Book} />
        </QueryParamProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
