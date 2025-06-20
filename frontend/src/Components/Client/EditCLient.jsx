import axios from "axios";
import { fetchDepartments, fetchSites } from "../../utils/EmployeeHelper.jsx";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditClient = () => {
  const { id } = useParams();
  const [client, setClient] = useState({
    clientID: "",
    clientName: "",
    clientContactPerson: "",
    clientContact: "",
    clientEmail: "",
    clientDesignation: "",
    clientServicesStartedOn: "",
    clientServices: "",
    clientLocation: "",
    clientGSTNo: "",
    clientPANNo: "",
    clientHNo: "",
    clientStreet: "",
    clientVillage: "",
    clientMandal: "",
    clientCity: "",
    clientState: "",
    clientCountry: "",
    clientPincode: "",
    clientDescription: "",
    clientEmployeeCount: "",
  });
  const [departments, setDepartments] = useState(null);
  const [sites, setSites] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient({ ...client, [name]: value });
  };

  useEffect(() => {
    const getDepartments = async () => {
      const departments = await fetchDepartments();
      setDepartments(departments);
    };
    getDepartments();
  }, []);

  useEffect(() => {
    const getSites = async () => {
      const sites = await fetchSites();
      setSites(sites);
    };
    getSites();
  }, []);

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/client/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          const client = response.data.client
          setClient({...client,
            clientID: client.clientID,
            clientName: client.clientName,
            clientContactPerson: client.clientContactPerson,
            clientContact: client.clientContact,
            clientEmail: client.clientEmail,
            clientDesignation: client.clientDesignation,
            clientServicesStartedOn: client.clientServicesStartedOn,
            clientServices: client.clientServices,
            clientLocation: client.clientLocation,
            clientGSTNo: client.clientGSTNo,
            clientPANNo: client.clientPANNo,
            clientHNo: client.clientHNo,
            clientStreet: client.clientStreet,
            clientVillage: client.clientVillage,
            clientMandal: client.clientMandal,
            clientCity: client.clientCity,
            clientState: client.clientState,
            clientCountry: client.clientCountry,
            clientPincode: client.clientPincode,
            clientDescription: client.clientDescription,
            clientEmployeeCount: client.clientEmployeeCount,
          });
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    };

    fetchClient();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:5000/api/client/${id}`,
        client,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
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
    <>
      {departments && sites && client ? (
        <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-6">Edit Client</h2>
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
                  value={client.clientID}
                  onChange={handleChange}
                  placeholder="Enter Client ID"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>
            <button
              type="button"
              className="w-full mt-8 mb-4 bg-blue-500 text-white font-bold py-2 px-4 rounded"
            >
              Basic Details
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  value={client.clientName}
                  onChange={handleChange}
                  placeholder="Enter Client Name"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="clientContactPerson"
                  className="text-sm font-medium text-gray-700"
                >
                  Contact Person*
                </label>
                <input
                  type="text"
                  name="clientContactPerson"
                  value={client.clientContactPerson}
                  onChange={handleChange}
                  placeholder="Enter Contact Person Name"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="clientContact"
                  className="text-sm font-medium text-gray-700"
                >
                  Phone Number*
                </label>
                <input
                  type="text"
                  name="clientContact"
                  value={client.clientContact}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="clientEmail"
                  className="text-sm font-medium text-gray-700"
                >
                  Client Email*
                </label>
                <input
                  type="email"
                  name="clientEmail"
                  value={client.clientEmail}
                  onChange={handleChange}
                  placeholder="Enter Client's Email"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="clientDesignation"
                  className="text-sm font-medium text-gray-700"
                >
                  Contact Person Designation
                </label>
                <input
                  type="text"
                  name="clientDesignation"
                  value={client.clientDesignation}
                  onChange={handleChange}
                  placeholder="Enter Contact Person Designation"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="clientServiceStartedOn"
                  className="text-sm font-medium text-gray-700"
                >
                  Client Start Date
                </label>
                <input
                  type="date"
                  name="clientServiceStartedOn"
                  value={client.clientServicesStartedOn}
                  onChange={handleChange}
                  placeholder="Enter Client Starting Date"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="clientServices"
                  className="text-sm font-medium text-gray-700"
                >
                  Client Services*
                </label>
                <select
                  name="clientServices"
                  value={client.clientServices}
                  onChange={handleChange}
                  placeholder="Enter Client Services"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="">Choose Services</option>
                  {departments.map((department) => (
                    <option key={department._id} value={department._id}>
                      {department.departmentName}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="clientLocation"
                  className="text-sm font-medium text-gray-700"
                >
                  Client Location*
                </label>
                <select
                  name="clientLocation"
                  value={client.clientLocation}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  required
                >
                  <option value="">Select Site</option>
                  {sites.map((site) => (
                    <option key={site._id} value={site._id}>
                      {site.siteName}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="clientGSTNo"
                  className="text-sm font-medium text-gray-700"
                >
                  GST Number
                </label>
                <input
                  type="text"
                  name="clientGSTNo"
                  value={client.clientGSTNo}
                  onChange={handleChange}
                  placeholder="Enter Client's GST Number"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="clientPANNo"
                  className="text-sm font-medium text-gray-700"
                >
                  PAN Number
                </label>
                <input
                  type="text"
                  name="clientPANNo"
                  value={client.clientPANNo}
                  onChange={handleChange}
                  placeholder="Enter Client's PAN Number"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            {/* updation date, ending date, logo, map location etc*/}
            <button
              type="button"
              className="w-full mt-8 mb-4 bg-blue-500 text-white font-bold py-2 px-4 rounded"
            >
              Address
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="clientHNo"
                  className="block text-sm font-medium text-gray-700"
                >
                  House Number / Door Number / Flat Number
                </label>
                <input
                  type="text"
                  name="clientHNo"
                  value={client.clientHNo}
                  onChange={handleChange}
                  placeholder="Enter House Number or Door Number"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="clientStreet"
                  className="block text-sm font-medium text-gray-700"
                >
                  Street / Lane
                </label>
                <input
                  type="text"
                  name="clientStreet"
                  value={client.clientStreet}
                  onChange={handleChange}
                  placeholder="Enter Street Details"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="clientVillage"
                  className="block text-sm font-medium text-gray-700"
                >
                  Village / Locality
                </label>
                <input
                  type="text"
                  name="clientVillage"
                  value={client.clientVillage}
                  onChange={handleChange}
                  placeholder="Enter Village"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="clientMandal"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mandal / Municipality / Area
                </label>
                <input
                  type="text"
                  name="clientMandal"
                  value={client.clientMandal}
                  onChange={handleChange}
                  placeholder="Enter Area"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="clientCity"
                  className="block text-sm font-medium text-gray-700"
                >
                  District / City
                </label>
                <input
                  type="text"
                  name="clientCity"
                  value={client.clientCity}
                  onChange={handleChange}
                  placeholder="Enter District / City"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="clientState"
                  className="block text-sm font-medium text-gray-700"
                >
                  State
                </label>
                <input
                  type="text"
                  name="clientState"
                  value={client.clientState}
                  onChange={handleChange}
                  placeholder="Enter State"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="clientCountry"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <input
                  type="text"
                  name="clientCountry"
                  value={client.clientCountry}
                  onChange={handleChange}
                  placeholder="Enter Country"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="clientPincode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pin Code / Zip Code
                </label>
                <input
                  type="number"
                  name="clientPincode"
                  value={client.clientPincode}
                  onChange={handleChange}
                  placeholder="Enter Pincode"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <button
              type="button"
              className="w-full mt-8 mb-4 bg-blue-500 text-white font-bold py-0.5 px-4 rounded"
            ></button>
            <div className="mt-3">
              <label
                htmlFor="clientDescription"
                className="block text-sm font-medium text-gray-700"
              >
                Client Description
              </label>
              <textarea
                name="clientDescription"
                value={client.clientDescription}
                onChange={handleChange}
                placeholder="Client Description"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                rows="5"
              ></textarea>
            </div>
            <div className="mt-3">
              <label
                htmlFor="clientEmployeeCount"
                className="block text-sm font-medium text-gray-700"
              >
                Total Employees for Client*
              </label>
              <input
                type="number"
                name="clientEmployeeCount"
                value={client.clientEmployeeCount}
                onChange={handleChange}
                placeholder="Number of Employees for Client"
                className="block mt-1 w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-6 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
              Edit Client
            </button>
            <div className="mt-3">
              <p>All * marked must be fields must be required</p>
            </div>
          </form>
        </div>
      ) : (
        <div>Loading....</div>
      )}
    </>
  );
};

export default EditClient;
