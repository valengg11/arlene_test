import React from "react";
import { Link } from "react-router-dom";

export const LoginScreen = () => {
  return (
    <div className="auth__screen">
      <Link to="/" className="auth__link">
        <div className="auth__arrow">
          <i className="fas fa-arrow-left"></i>
        </div>
      </Link>
      <div className="auth__title">
        <h1 className="mb-1 title">Log in</h1>
        <span>Welcome back!</span>
      </div>
      <form>
        <label>E-mail</label>
        <input
          type="text"
          name="email"
          className="auth__input"
          autoComplete="off"
        />
        <label>Password</label>
        <input type="text" name="password" className="auth__input" />
        <button type="submit" className="btn btn-primary pointer mt-4">
          Log in
        </button>
        <div className="auth__social-networks">
          <p>or continue with</p>
          <div className="auth__network-icons">
            <div className="auth__icon-wrapper">
              <i className="fab fa-facebook-f"></i>
            </div>
            <div className="auth__icon-wrapper">
              <i className="fab fa-google"></i>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
