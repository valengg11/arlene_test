import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { WelcomeScreen } from "../components/app/WelcomeScreen";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";

const MainScreen = React.lazy(() => import("../components/app/MainScreen"));

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
              <React.Suspense fallback={<>Loading...</>}>
                <PrivateRoute>
                  <MainScreen />
                </PrivateRoute>
              </React.Suspense>
            }
          />
          <Route element={<Navigate to="/" />} />
        </Routes>
    </Router>
  );
};
