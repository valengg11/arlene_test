import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { MainScreen } from "../components/app/MainScreen";
import { WelcomeScreen } from "../components/app/WelcomeScreen";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AuthRouter />} />
        <Route path="/" element={<WelcomeScreen />} />
        <Route
          exact
          path="/main"
          element={
            <PrivateRoute>
              <MainScreen />
            </PrivateRoute>
          }
        />
        <Route element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};
