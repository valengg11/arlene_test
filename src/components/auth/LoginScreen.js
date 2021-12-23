import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import axios from "axios";
import Swal from "sweetalert2";
import { types } from "../../types/types";
import { AuthContext } from "../../auth/authContext";

const LoginScreen = () => {
  let navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  let token;
  const initialForm = {
    email: "",
    password: "",
  };
  const [values, handleInputChange, reset] = useForm(initialForm);
  const { email, password } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);

    handleLogin();

    reset();
  };

  const handleLogin = () => {
    const userData = {
      email: email,
      password: password,
    };
    axios
      .post("https://reqres.in/api/login", userData)
      .then((response) => {
        token = response.data.token;
        const action = {
          type: types.login,
          payload: { token: token },
        };
        dispatch(action);
        navigate("/main");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: `Sorry, the data is invalid!`,
          icon: "error",
          confirmButtonText: "Ok",
        });
        console.log(error);
      });
  };

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
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
          required
        />
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

export default LoginScreen;
