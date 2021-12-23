import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { types } from "../../types/types";
import { AuthContext } from "../../auth/authContext";

export const MainScreen = () => {
  let navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const USERS_URL = "https://reqres.in/api/users?per_page=12";
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    axios
      .get(USERS_URL)
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        Swal.fire({
          title: "Oh oh, we can't show the users!",
          icon: "error",
          confirmButtonText: "Ok",
        });
        console.log(error);
      });
  };
  useEffect(() => {
    getUsers();
  }, []);

  const handleLogout = () => {
    const action = {
      type: types.logout,
    };
    dispatch(action);
    navigate("/auth/login");
  };
  return (
    <div className="main__screen">
      <h1>Nice to see you again!</h1>
      <h2>Here, you can see the list of all users!</h2>
      <div>
        <table className="main__table">
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  <img src={user.avatar} alt={user.first_name} />
                </td>
                <td>{`${user.first_name} ${user.last_name}`}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn-rounded" onClick={handleLogout}>
        <i className="fas fa-sign-out-alt"></i>
      </button>
    </div>
  );
};
