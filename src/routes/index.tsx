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
        <Route path="/" exact component={Home} />
        <QueryParamProvider ReactRouterRoute={Route}>
          <Route path="/books" exact component={List} />
        </QueryParamProvider>
        <Route path="/books/:book+" exact component={Book} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
