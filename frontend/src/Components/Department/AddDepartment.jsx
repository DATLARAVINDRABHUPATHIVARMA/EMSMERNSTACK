import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddDepartment = () => {
  const [department, setDepartment] = useState({
      departmentName: "",
      departmentDescription: "",
      departmentEmployeeCount: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepartment({ ...department, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/department/add", department,
        {
          headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}`, },
        }
      );
      if (response.data.success) {
        navigate("/admin-dashboard/departments")
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    }
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96">
      <h2 className="text-2xl font-bold mb-6">Add Department</h2>
       <form onSubmit={handleSubmit}> 
        <div>
          <label
            htmlFor="departmentName"
            className="text-sm font-medium text-gray-700"
          >
            Department Name*
          </label>
          <input
            type="text"
            name="departmentName"
            onChange={handleChange}
            placeholder="Enter Department Name"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mt-3">
          <label
            htmlFor="departmentDescription"
            className="block text-sm font-medium text-gray-700"
          >
            Department Description
          </label>
          <textarea
            name="departmentDescription"
            onChange={handleChange}
            placeholder="Department Description"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows="5"
          ></textarea>
        </div>
        <div className="mt-3">
          <label
            htmlFor="departmentEmployeeCount"
            className="block text-sm font-medium text-gray-700"
          >
            Total Employees in Department*
          </label>
          <input
            type="number"
            name="departmentEmployeeCount"
            onChange={handleChange}
            placeholder="Number of Employees in Department"
            className="block mt-1 w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full mt-6 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Department
        </button>
        <div className="mt-3">
          <p>All * marked must be fields must be required</p>
        </div>
      </form>
    </div>
  )
}

export default AddDepartment
