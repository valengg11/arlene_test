import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { MainScreen } from "../components/app/MainScreen";
import { WelcomeScreen } from "../components/app/WelcomeScreen";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth/" component={AuthRouter} />
          <Route exact path="/" component={WelcomeScreen} />
          <Route exact path="/main" component={MainScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
