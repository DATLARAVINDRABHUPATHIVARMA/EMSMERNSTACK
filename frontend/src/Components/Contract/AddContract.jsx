import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { fetchClients } from "../../utils/EmployeeHelper.jsx";

const AddContract = () => {
  const [clients, setClients] = useState([]);
  const [contract, setContract] = useState({
    wagesType: "",
    professionalTax: false,
  });

  useEffect(() => {
    const getClients = async () => {
      const clients = await fetchClients();
      setClients(clients);
    };
    getClients();
  }, []);

  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setContract((prev) => ({
      ...prev,
      [name]: checked, // Directly use the checkbox's checked state
    }));
  };

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
      <div className="flex items-center text-white justify gap-2 h-12 bg-gray-200 px-5 w-full rounded">
        <NavLink
          to="/admin-dashboard/contracts"
          className={({ isActive }) =>
            `${isActive ? "bg-blue-500" : " "} px-4 py-1 rounded-md`
          }
        >
          Contracts
        </NavLink>
        <NavLink
          to="/admin-dashboard/licenses"
          className={({ isActive }) =>
            `${
              isActive ? "bg-blue-500" : " "
            } px-4 py-1 bg-green-800 rounded-md`
          }
        >
          Licenses
        </NavLink>
        <NavLink
          to="/admin-dashboard/Attendance"
          className={({ isActive }) =>
            `${
              isActive ? "bg-blue-500" : " "
            } px-4 py-1 bg-green-800 rounded-md`
          }
        >
          Attendance
        </NavLink>
        <NavLink
          to="/admin-dashboard/Billing"
          className={({ isActive }) =>
            `${
              isActive ? "bg-blue-500" : " "
            } px-4 py-1 bg-green-800 rounded-md`
          }
        >
          Billing
        </NavLink>
        <NavLink
          to="/admin-dashboard/Reciepts"
          className={({ isActive }) =>
            `${
              isActive ? "bg-blue-500" : " "
            } px-4 py-1 bg-green-800 rounded-md`
          }
        >
          Reciepts
        </NavLink>
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
              <select
                type="text"
                name="clientID"
                onChange={handleChange}
                placeholder="Enter Client ID"
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                required
              >
                {/* <option value="">-- Select Client --</option> */}
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
                {/* <option value="">-- Select Client --</option> */}
                {clients.map((client) => (
                  <option key={client._id} value={client._id}>
                    {client.clientName}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="contractID"
                className="text-sm font-medium text-gray-700"
              >
                Contract ID*
              </label>
              <input
                type="text"
                name="contractID"
                onChange={handleChange}
                placeholder="Enter Contract ID"
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label
                htmlFor="contractStartedOn"
                className="text-sm font-medium text-gray-700"
              >
                Contract Start Date
              </label>
              <input
                type="date"
                name="contractStartedOn"
                onChange={handleChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label
                htmlFor="contractEndOn"
                className="text-sm font-medium text-gray-700"
              >
                Contract Ending Date
              </label>
              <input
                type="date"
                name="contractEndOn"
                onChange={handleChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label
                htmlFor="BGAmount"
                className="text-sm font-medium text-gray-700"
              >
                BG Amount
              </label>
              <input
                type="text"
                name="BGAmount"
                onChange={handleChange}
                placeholder="Enter BG Amount"
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label
                htmlFor="typeOfWork"
                className="block text-sm font-medium text-gray-700"
              >
                Type of Work
              </label>
              <select
                name="typeofWork"
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              >
                <option value="">-- Select --</option>
                <option value="Service">Service</option>
                <option value="Job Workers">Job Workers</option>
                <option value="Material">Material</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="billingDates"
                className="block text-sm font-medium text-gray-700"
              >
                Billing Dates
              </label>
              <select
                name="billingDates"
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              >
                <option value="">-- Select --</option>
                <option value="Month Start to Month End">
                  Month Start to Month End
                </option>
                <option value="Starting Manual Date to One Month">
                  Starting Manual Date to One Month
                </option>
                <option value="26th to 25th">26th to 25th</option>
                <option value="21st to 20th">21st to 20th</option>
                <option value="16th to 15th">16th to 15th</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="paySheetDates"
                className="block text-sm font-medium text-gray-700"
              >
                Pay Sheet Dates
              </label>
              <select
                name="paySheetDates"
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              >
                <option value="">-- Select --</option>
                <option value="Month Start to Month End">
                  Month Start to Month End
                </option>
                <option value="Starting Manual Date to One Month">
                  Starting Manual Date to One Month
                </option>
                <option value="26th to 25th">26th to 25th</option>
                <option value="21st to 20th">21st to 20th</option>
                <option value="16th to 15th">16th to 15th</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="validityDate"
                className="text-sm font-medium text-gray-700"
              >
                Validity Date
              </label>
              <input
                type="date"
                name="validityDate"
                onChange={handleChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="contractI"
                className="text-sm font-medium text-gray-700"
              >
                Contract
              </label>
              <input
                type="text"
                name="contractI"
                onChange={handleChange}
                placeholder="Enter Contract"
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label
                htmlFor="payment"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Payment
              </label>
              <div className="flex items-center gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="Lump Sum"
                    checked={contract.payment === "Lump Sum"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Lump Sum
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="Man Power"
                    checked={contract.payment === "Man Power"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Man Power
                </label>
              </div>
            </div>
            <div>
              <label
                htmlFor="wagesType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Wages Type
              </label>
              <div className="flex items-center gap-4">
                {/* Radio buttons for mutually exclusive selection */}
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="wagesType"
                    value="client"
                    checked={contract.wagesType === "client"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Client
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="wagesType"
                    value="special"
                    checked={contract.wagesType === "special"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Special
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="wagesType"
                    value="individual"
                    checked={contract.wagesType === "individual"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Individual
                </label>
                {/* Separate checkbox with different name */}
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="professionalTax"
                    checked={contract.professionalTax}
                    onChange={handleCheckboxChange}
                    className="mr-2 rounded text-blue-500 focus:ring-blue-400"
                  />
                  Professional Tax
                </label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            <div>
              <button
                type="button"
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded"
              >
                Billing
              </button>
              <div className="mt-2 mb-2">
                <label
                  htmlFor="materialCost"
                  className="block text-sm font-medium text-gray-700"
                >
                  Material Cost
                </label>
                <input
                  type="text"
                  name="materialCost"
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="mt-2 mb-2">
                <label
                  htmlFor="machineryCost"
                  className="block text-sm font-medium text-gray-700"
                >
                  Machinery Cost
                </label>
                <input
                  type="text"
                  name="machineryCost"
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <button
                type="button"
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded"
              >
                Pay Sheet
              </button>
              <h1 className="text-2xl underline mt-7 mb-2">PF</h1>
              <div className="mt-2 mb-2">
                <label
                  htmlFor="PFLimit"
                  className="block text-sm font-medium text-gray-700"
                >
                  PF Limit
                </label>
                <input
                  type="text"
                  name="PFLimit"
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="PFLimit"
                    value="basic"
                    checked={contract.basic}
                    onChange={handleCheckboxChange}
                    className="mr-2 rounded text-blue-500 focus:ring-blue-400"
                  />
                  Basic
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="PFLimit"
                    value="DA"
                    checked={contract.DA}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  DA
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="PFLimit"
                    value="HRA"
                    checked={contract.HRA}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  HRA
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="PFLimit"
                    value="CCA"
                    checked={contract.CCA}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  CCA
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="PFLimit"
                    value="conv"
                    checked={contract.conv}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  Conv
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="PFLimit"
                    value="WA"
                    checked={contract.WA}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  WA
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="PFLimit"
                    value="OA"
                    checked={contract.OA}
                    onChange={handleCheckboxChange}
                    className="mr-2 rounded text-blue-500 focus:ring-blue-400"
                  />
                  OA
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="PFLimit"
                    value="specialAllowance"
                    checked={contract.specialAllowance}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  Spec. Allw.
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="PFLimit"
                    value="medicalAllowance"
                    checked={contract.medicalAllowance}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  Med. Allw.
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="PFLimit"
                    value="foodAllowance"
                    checked={contract.foodAllowance}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  Food Allw.
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="PFLimit"
                    value="siteAllowance"
                    checked={contract.siteAllowance}
                    onChange={handleCheckboxChange}
                    className="mr-2 rounded text-blue-500 focus:ring-blue-400"
                  />
                  Site Allw.
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="PFLimit"
                    value="gunAllowance"
                    checked={contract.gunAllowance}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  Gun Allw.
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="PFLimit"
                    value="gunAllowance"
                    checked={contract.gunAllowance}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  Gun Allw.
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContract;
