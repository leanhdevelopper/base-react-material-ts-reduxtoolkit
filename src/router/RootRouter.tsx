import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function RootRouter() {
  const environment = true;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="*" render={() => <NotFound />} />
      </Switch>
    </BrowserRouter>
  );
}

export default RootRouter;
