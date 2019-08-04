import { DashBoard } from "../../pages/dashboard/Page";
import { GraphQl } from "../../pages/graphql/Page";
import React from "react";
import { Route } from "react-router-dom";

const Routing = () => {
  return (
    <>
      <Route path="/" exact component={DashBoard} />
      <Route path="/graphql/" component={GraphQl} />
    </>
  );
};

export { Routing };
