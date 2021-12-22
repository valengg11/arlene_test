import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import axios from "axios";
import Swal from "sweetalert2";

export const RegisterScreen = () => {
  const initialForm = {
    fullname: "",
    email: "",
    password: "",
  };
  const [values, handleInputChange, reset] = useForm(initialForm);
  const { fullname, email, password } = values;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    const userData = {
      email: email,
      password: password,
    };
    axios.post("https://reqres.in/api/users", userData).then((response) => {
      console.log(response.status);
      console.log(response.data);
    }).catch((error) => {
      Swal.fire({
        title: "Sorry, registration failed!",
        icon: "error",
        confirmButtonText: "Ok",
      });
      console.log(error);
    });

    reset();
  };
  return (
    <div className="auth__screen">
      <Link to="/" className="auth__link">
        <div className="auth__arrow">
          <i className="fas fa-arrow-left"></i>
        </div>
      </Link>
      <div className="auth__title">
        <h1 className="mb-1 title">Create an account</h1>
        <span>Just one step to get started.</span>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Full name</label>
        <input
          type="text"
          name="fullname"
          className="auth__input"
          autoComplete="off"
          value={fullname}
          onChange={handleInputChange}
          required
        />
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
      <p className="auth__terms">
        By creating an account you agree to the Terms of Service.
      </p>
    </div>
  );
};
