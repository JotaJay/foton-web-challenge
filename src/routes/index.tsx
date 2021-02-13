import React, { lazy, Suspense } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";

const Home = lazy(() => import("../pages/Home"));
const List = lazy(() => import("../pages/List"));
const Book = lazy(() => import("../pages/Book"));

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <QueryParamProvider ReactRouterRoute={Route}>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/" exact component={Home} />
            <Route path="/books" exact component={List} />
            <Route path="/books/:bookId+" component={Book} />  
          </Suspense>
        </QueryParamProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
