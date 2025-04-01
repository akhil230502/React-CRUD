import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import Header from "../Components/Header";

function Employee() {

  const [tableData, setTableData] = useState([]);
  console.log('hi');


  useEffect(() => {
    axios.get(`https://67e67d256530dbd31110336d.mockapi.io/api/Users`)
      .then((response) => {
        console.log(response);

        setTableData(response.data)
      })
      .catch((err) => console.log("error", err)
      )
  }, [])

  const handleDelete = (id) => {

    axios.delete(`https://67e67d256530dbd31110336d.mockapi.io/api/Users/${id}`)
      .then((response) => {
        console.log("Deleted Successfully", response);

        const updatedTableData = tableData.filter(user => user.id !== id);
        setTableData(updatedTableData);

      })
      .catch((err) => {
        console.log("error", err);

      })
    }


  return (
    <div>
      <Header />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Role</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((user, val) => (
            <tr>
              <td>{user.firstname}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>{user.role}</td>
              <td><Link to={`/edituser/${user.id}`}><button type="button" className="btn btn-primary">Update</button></Link></td>
              <td><button type="button" className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>


    </div>
  )
}

export default Employee
