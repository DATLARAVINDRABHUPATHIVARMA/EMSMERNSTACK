import { Link, NavLink, useNavigate } from 'react-router-dom'
import axios from "axios";
import React, { useState, useEffect } from "react";
import { fetchClients } from "../../utils/EmployeeHelper.jsx";

const AddContract = () => {
  const [clients, setClients] = useState([]);
  const [contract, setContract] = useState({});

  useEffect(() => {
      const getClients = async () => {
        const clients = await fetchClients();
        setClients(clients);
      };
      getClients();
    }, []);

  const navigate = useNavigate();
    
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContract((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/contract/add",
        contract,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      if (response.data.success) {
        navigate("/admin-dashboard/contracts");
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    }
  };
    
  return (
    <div className="p-5">
      <div className='flex items-center text-white justify gap-2 h-12 bg-gray-200 px-5 w-full rounded'>
        <NavLink to='/admin-dashboard/contracts' className={({isActive}) => `${isActive ? "bg-blue-500" : " "} px-4 py-1 rounded-md`}>Contracts</NavLink>
        <NavLink to='/admin-dashboard/licenses' className={({isActive}) => `${isActive ? "bg-blue-500" : " "} px-4 py-1 bg-green-800 rounded-md`}>Licenses</NavLink>
        <NavLink to='/admin-dashboard/Attendance' className={({isActive}) => `${isActive ? "bg-blue-500" : " "} px-4 py-1 bg-green-800 rounded-md`}>Attendance</NavLink>
        <NavLink to='/admin-dashboard/Billing' className={({isActive}) => `${isActive ? "bg-blue-500" : " "} px-4 py-1 bg-green-800 rounded-md`}>Billing</NavLink>
        <NavLink to='/admin-dashboard/Reciepts' className={({isActive}) => `${isActive ? "bg-blue-500" : " "} px-4 py-1 bg-green-800 rounded-md`}>Reciepts</NavLink>
      </div>
      <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6">Add Contract</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="clientID"
                className="text-sm font-medium text-gray-700"
              >
                Client ID*
              </label>
              <input
                type="text"
                name="clientID"
                onChange={handleChange}
                placeholder="Enter Client ID"
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
            <label
              htmlFor="clientName"
              className="text-sm font-medium text-gray-700"
            >
              Client Name*
            </label>
            <input
              type="text"
              name="clientName"
              onChange={handleChange}
              placeholder="Enter Client Name"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddContract
