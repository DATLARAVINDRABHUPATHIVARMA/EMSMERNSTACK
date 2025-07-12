import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { fetchClients } from "../../utils/ContractHelper.jsx";
import axios from "axios";

const AddLicense = () => {
  const [clients, setClients] = useState([])
  const [license, setLicense] = useState({
  })

  const navigate = useNavigate();

  useEffect(() => {
      const getClients = async () => {
        const clients = await fetchClients();
        setClients(clients);
      };
      getClients();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLicense((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post(
            "http://localhost:5000/api/license/add",
            license,
            {
              headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            }
          );
          if (response.data.success) {
            navigate("/admin-dashboard/clients");
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
        <NavLink to='/admin-dashboard/contracts' className={({isActive}) => `${isActive ? "bg-blue-500" : " "} px-4 py-1 bg-green-800 rounded-md`}>Contracts</NavLink>
        <NavLink to='/admin-dashboard/add-license' className={({isActive}) => `${isActive ? "bg-blue-500" : " "} px-4 py-1 rounded-md`}>Licenses</NavLink>
        <NavLink to='/admin-dashboard/Attendance' className={({isActive}) => `${isActive ? "bg-blue-500" : " "} px-4 py-1 bg-green-800 rounded-md`}>Attendance</NavLink>
        <NavLink to='/admin-dashboard/Billing' className={({isActive}) => `${isActive ? "bg-blue-500" : " "} px-4 py-1 bg-green-800 rounded-md`}>Billing</NavLink>
        <NavLink to='/admin-dashboard/Reciepts' className={({isActive}) => `${isActive ? "bg-blue-500" : " "} px-4 py-1 bg-green-800 rounded-md`}>Reciepts</NavLink>
      </div> 
      <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="clientID"
                className="text-sm font-medium text-gray-700"
              >
                Client ID*
              </label>
              <select
                type="text"
                name="clientID"
                onChange={handleChange}
                placeholder="Enter Client ID"
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">-- Select Client --</option>
                {clients.map((client) => (
                  <option key={client._id} value={client._id}>
                    {client.clientID}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="clientName"
                className="text-sm font-medium text-gray-700"
              >
                Client Name*
              </label>
              <select
                type="text"
                name="clientName"
                onChange={handleChange}
                placeholder="Enter Client Name"
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">-- Select Client --</option>
                {clients.map((client) => (
                  <option key={client._id} value={client._id}>
                    {client.clientName}
                  </option>
                ))}
              </select>
            </div>
          <div>
            <label
              htmlFor="licenseNo"
              className="text-sm font-medium text-gray-700"
            >
              License Number*
            </label>
            <input
              type="text"
              name="licenseNo"
              onChange={handleChange}
              placeholder="Enter License Number"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="licenseLocation"
              className="text-sm font-medium text-gray-700"
            >
              Location of License Office
            </label>
            <textarea
              name="licenseLocation"
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              rows="1"
            />
          </div>
            <div>
              <label
                htmlFor="licenseStartedOn"
                className="text-sm font-medium text-gray-700"
              >
                License Start Date*
              </label>
              <input
                type="date"
                name="licenseStartedOn"
                onChange={handleChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label
                htmlFor="licenseEndOn"
                className="text-sm font-medium text-gray-700"
              >
                License End Date*
              </label>
              <input
                type="date"
                name="LicenseEndOn"
                onChange={handleChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Add License
          </button>
          <div className="mt-3">
            <p>All * marked must be fields must be required</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddLicense
