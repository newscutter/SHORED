// Library Imports
import React, { Component, Suspense } from "react";
//@ts-ignore
import { Route } from "react-router-dom";

import Loader from "../../../../shared/components/loader";
import { CreateWeb } from "../../pages/_auth/create";
import { LoginWeb } from "../../pages/_auth/login/container";
import { HomeWeb } from "../../pages/_public/home";

class PublicRoutesWeb extends Component {
  render() {
    return (
      <Suspense fallback={<Loader />}>
        <Route path="/" exact component={HomeWeb} />
        <Route path="/create" exact component={CreateWeb} />
        <Route path="/login" exact component={LoginWeb} />
      </Suspense>
    );
  }
}

export default PublicRoutesWeb;
