import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
const LoginScreen = React.lazy(() => 
import("../components/auth/LoginScreen")
);
const RegisterScreen = React.lazy(() =>
  import("../components/auth/RegisterScreen")
);

export const AuthRouter = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <Routes>
          <Route
            path="auth/login"
            element={
              <React.Suspense fallback={<>Loading...</>}>
                <LoginScreen />
              </React.Suspense>
            }
          />
          <Route
            path="auth/register"
            element={
              <React.Suspense fallback={<>Loading...</>}>
                <RegisterScreen />
              </React.Suspense>
            }
          />
          <Route path="/*" element={<Navigate to="auth/register" />} />
        </Routes>
      </div>
    </div>
  );
};
