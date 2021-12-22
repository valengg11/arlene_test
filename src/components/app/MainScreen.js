import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const MainScreen = () => {
  const USERS_URL = "https://reqres.in/api/users/";
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
      <button className='btn-rounded'>
        <i class="fas fa-sign-out-alt"></i>
      </button>
    </div>
  );
};
