import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Details() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/Getall");
      setUsers(response.data);
    };
    fetchData();
  }, []);



  const deleteUser = async (userId) => {
    try {
      const response = await axios.delete(`http://localhost:3000/Delete/${userId}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="">
      <div className="container-fluid  p-4 ">
        <div className="mb-4">
          <button className="btn btn-info">
            <Link
              to="/Register"
              className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover text-decoration-none"
            >
              Add user
            </Link>
          </button>
        </div>
        <table
          border={2}
          className="table table-info table-striped table-bordered "
        >
          <thead>
            <tr>
              <th>S.No</th>
              <th>User Name</th>
              <th>User email</th>
              <th>User number</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  {user.fname} {user.lname}
                </td>
                <td>{user.email}</td>
                <td>{user.number}</td>
                <td>
                  <button className="btn btn-outline-primary">
                    <Link
                      to={`/update/` + user._id}
                      className="text-primary text-decoration-none custom-link-hover"
                    >
                      Update
                    </Link>
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-outline-primary"
                    onClick={()=>deleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Details;
