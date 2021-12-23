import React from "react";
import { Link } from "react-router-dom";

export const WelcomeScreen = () => {
  return (
    <div className="welcome__box-container">
      <div className="welcome__screen">
        <div className="welcome__screen-container">
          <img src="images/welcome_image.png" alt="welcome" />
          <h1 className="mb-1 title">Escape the ordinary life</h1>
          <p>
            Discover great experiences around you and make your life
            interesting!
          </p>
          <Link to="/auth/register">
            <button type="submit" className="btn btn-primary pointer mt-4">
              Get started
            </button>
          </Link>
          <Link to="/auth/login">
            <button type="submit" className="btn btn-secondary pointer mt-4">
              Log in
            </button>
          </Link>
          <p className="welcome__footer">Join 1M+ users today!</p>
        </div>
      </div>
    </div>
  );
};
