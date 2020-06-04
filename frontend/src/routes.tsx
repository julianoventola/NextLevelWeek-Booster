import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import CreatePoint from "./pages/CreatePoint";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/create-point" component={CreatePoint} exact />
    </BrowserRouter>
  );
};

export default Routes;
