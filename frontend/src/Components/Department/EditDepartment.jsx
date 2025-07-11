import axios from 'axios'
import React, { useState,  useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const EditDepartment = () => {
    const {id} = useParams()
    const [department, setDepartment] = useState([])
    const [departmentLoading, setDepartmentLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
    const { name, value } = e.target;
    setDepartment({ ...department, [name]: value });
  };

    useEffect(() => {
    const fetchDepartments = async () => {
      setDepartmentLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:5000/api/department/${id}`,
          {
            headers: {
              "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          setDepartment(response.data.department)
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      } finally {
        setDepartmentLoading(false);
      }
    };
    
    fetchDepartments();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
        try {
          const response = await axios.put(
            `http://localhost:5000/api/department/${id}`,
            department,
            {
              headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
              },
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
    <>{departmentLoading ? <div>Loading...</div> :
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96">
      <h2 className="text-2xl font-bold mb-6">Edit Department</h2>
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
            value={department.departmentName}
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
            value={department.departmentDescription}
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
            Total Employees in Department
          </label>
          <input
            type="number"
            name="departmentEmployeeCount"
            value={department.departmentEmployeeCount}
            onChange={handleChange}
            placeholder="Number of Employees"
            className="block mt-1 w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full mt-6 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Edit Department
        </button>
        <div className="mt-3">
          <p>All * marked must be fields must be required</p>
        </div>
      </form>
    </div>}</>
  )
}

export default EditDepartment
