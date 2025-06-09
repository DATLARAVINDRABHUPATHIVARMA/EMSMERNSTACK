import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchClients } from "../../utils/SiteHelper.jsx";

const AddSite = () => {
  const [clients, setClients] = useState([]);
  const [site, setSite] = useState({
    siteName: "",
    siteAddress: "",
    siteDescription: "",
    siteEmployeeCount: "",
  });

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
    setSite({ ...site, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/site/add",
        site,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      if (response.data.success) {
        navigate("/admin-dashboard/sites");
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96">
      <h2 className="text-2xl font-bold mb-6">Add Site</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="siteName"
            className="text-sm font-medium text-gray-700"
          >
            Site Name*
          </label>
          <input
            type="text"
            name="siteName"
            onChange={handleChange}
            placeholder="Enter Site Name"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mt-3">
          <label
            htmlFor="siteAddress"
            className="text-sm font-medium text-gray-700"
          >
            Site Address*
          </label>
          <input
            type="text"
            name="siteAddress"
            onChange={handleChange}
            placeholder="Enter Site Address"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mt-3">
          <label
            htmlFor="siteClients"
            className="text-sm font-medium text-gray-700"
          >
            Clients in the Site*
          </label>
          <select
              name="siteClients"
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Choose Clients</option>
              {clients.map((client) => (
                <option key={client._id} value={client._id}>
                  {client.clientName}
                </option>
              ))}
            </select>
          </div>
        {/* start date, updation date, ending date, map location etc*/}
        <div className="mt-3">
          <label
            htmlFor="siteDescription"
            className="block text-sm font-medium text-gray-700"
          >
            Site Description
          </label>
          <textarea
            name="siteDescription"
            onChange={handleChange}
            placeholder="Site Description"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows="5"
          ></textarea>
        </div>
        <div className="mt-3">
          <label
            htmlFor="siteEmployeeCount"
            className="block text-sm font-medium text-gray-700"
          >
            Total Employees in Site*
          </label>
          <input
            type="number"
            name="siteEmployeeCount"
            onChange={handleChange}
            placeholder="Number of Employees in Site"
            className="block mt-1 w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full mt-6 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Site
        </button>
        <div className="mt-3">
          <p>All * marked must be fields must be required</p>
        </div>
      </form>
    </div>
  );
};

export default AddSite;
