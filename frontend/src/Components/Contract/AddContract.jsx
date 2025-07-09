import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { fetchClients } from "../../utils/ContractHelper.jsx"; // need to change many details including adding of client contract Helper

const AddContract = () => {
  const [clients, setClients] = useState([]);
  const [contract, setContract] = useState({
    wagesType: "",
    professionalTax: false,
    wagesCalnOn: "Duties",
    OT: "100%",
    PTOn: "Total Earnings",
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
        <NavLink to="/admin-dashboard/contracts" className="bg-blue-500 px-4 py-1 rounded-md">
          Contracts
        </NavLink>
        <NavLink
          to="/admin-dashboard/add-license"
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
              <div className="mt-2 mb-2">
                <label
                  htmlFor="serviceCharge"
                  className="block text-sm font-medium text-gray-700"
                >
                  Service Charge
                </label>
                <input
                  type="text"
                  name="serviceCharge"
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
              <h1 className="text-2xl underline mt-10 mb-2">PF</h1>
              <div className="mt-5 mb-2">
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
                    value="fireAllowance"
                    checked={contract.fireAllowance}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  Fire Allw.
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="PFLimit"
                    value="trlAllowance"
                    checked={contract.trlAllowance}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  Trl. Allw.
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="PFLimit"
                    value="perAllowance"
                    checked={contract.perAllowance}
                    onChange={handleCheckboxChange}
                    className="mr-2 rounded text-blue-500 focus:ring-blue-400"
                  />
                  Per. Allw.
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="PFLimit"
                    value="mobAllowance"
                    checked={contract.mobAllowance}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  Mob. Allw.
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="PFLimit"
                    value="bonus"
                    checked={contract.bonus}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  Bonus
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="PFLimit"
                    value="gratuity"
                    checked={contract.gratuity}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  Grat.
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="PFLimit"
                    value="LA"
                    checked={contract.LA}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  LA
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="PFLimit"
                    value="serWetg"
                    checked={contract.serWetg}
                    onChange={handleCheckboxChange}
                    className="mr-2 rounded text-blue-500 focus:ring-blue-400"
                  />
                  Ser. Wetg.
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="PFLimit"
                    value="PLAmount"
                    checked={contract.PLAmount}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  PL Amount
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="PFLimit"
                    value="TLAmount"
                    checked={contract.TLAmount}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  TL Amount
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="PFLimit"
                    value="RC"
                    checked={contract.RC}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  RC
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="PFLimit"
                    value="SC"
                    checked={contract.SC}
                    onChange={handleCheckboxChange}
                    className="mr-2 rounded text-blue-500 focus:ring-blue-400"
                  />
                  SC
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="PFLimit"
                    value="Others"
                    checked={contract.Others}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  Others
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="PFLimit"
                    value="OTs"
                    checked={contract.OTs}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  OTs
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="PFLimit"
                    value="WOs"
                    checked={contract.WOs}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  WOs
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="PFLimit"
                    value="NHS"
                    checked={contract.NHS}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  NHS
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="PFLimit"
                    value="NFHS"
                    checked={contract.NHFS}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  NHFS
                </label>
              </div>
              <h1 className="text-2xl underline mt-10 mb-2">ESI</h1>
              <div className="mt-5 mb-2">
                <label
                  htmlFor="ESILimit"
                  className="block text-sm font-medium text-gray-700"
                >
                  ESI Limit
                </label>
                <input
                  type="text"
                  name="ESILimit"
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="ESILimit"
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
                    name="ESILimit"
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
                    name="ESILimit"
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
                    name="ESILimit"
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
                    name="ESILimit"
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
                    name="ESILimit"
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
                    name="ESILimit"
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
                    name="ESILimit"
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
                    name="ESILimit"
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
                    name="ESILimit"
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
                    name="ESILimit"
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
                    name="ESILimit"
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
                    name="ESILimit"
                    value="fireAllowance"
                    checked={contract.fireAllowance}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  Fire Allw.
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="ESILimit"
                    value="trlAllowance"
                    checked={contract.trlAllowance}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  Trl. Allw.
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="ESILimit"
                    value="perAllowance"
                    checked={contract.perAllowance}
                    onChange={handleCheckboxChange}
                    className="mr-2 rounded text-blue-500 focus:ring-blue-400"
                  />
                  Per. Allw.
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="ESILimit"
                    value="mobAllowance"
                    checked={contract.mobAllowance}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  Mob. Allw.
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="ESILimit"
                    value="bonus"
                    checked={contract.bonus}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  Bonus
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="ESILimit"
                    value="gratuity"
                    checked={contract.gratuity}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  Grat.
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="ESILimit"
                    value="LA"
                    checked={contract.LA}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  LA
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="ESILimit"
                    value="serWetg"
                    checked={contract.serWetg}
                    onChange={handleCheckboxChange}
                    className="mr-2 rounded text-blue-500 focus:ring-blue-400"
                  />
                  Ser. Wetg.
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="ESILimit"
                    value="PLAmount"
                    checked={contract.PLAmount}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  PL Amount
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="ESILimit"
                    value="TLAmount"
                    checked={contract.TLAmount}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  TL Amount
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="ESILimit"
                    value="RC"
                    checked={contract.RC}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  RC
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="ESILimit"
                    value="SC"
                    checked={contract.SC}
                    onChange={handleCheckboxChange}
                    className="mr-2 rounded text-blue-500 focus:ring-blue-400"
                  />
                  SC
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="ESILimit"
                    value="Others"
                    checked={contract.Others}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  Others
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="ESILimit"
                    value="OTs"
                    checked={contract.OTs}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  OTs
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="ESILimit"
                    value="WOs"
                    checked={contract.WOs}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  WOs
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="ESILimit"
                    value="NHS"
                    checked={contract.NHS}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  NHS
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="ESILimit"
                    value="NFHS"
                    checked={contract.NHFS}
                    onChange={handleCheckboxChange}
                    className="mr-2 ml-4 rounded text-blue-500 focus:ring-blue-400"
                  />
                  NHFS
                </label>
              </div>
              <div className="mt-10 mb-3">
                <label
                  htmlFor="wagesCalnOn"
                  className="block text-sm font-medium text-gray-700"
                >
                  Wages Caln On
                </label>
                <select
                  name="wagesCalnOn"
                  value={contract.wagesCalnOn}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                >
                  <option value="Duties">Duties</option>
                  <option value="Duties + WOs + NHs + L Days">
                    Duties + WOs + NHs + L Days
                  </option>
                </select>
              </div>
              <div className="mt-3 mb-3">
                <label
                  htmlFor="OT"
                  className="block text-sm font-medium text-gray-700"
                >
                  OT
                </label>
                <select
                  name="OT"
                  value={contract.OT}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                >
                  <option value="100%">100%</option>
                  <option value="200%">200%</option>
                </select>
              </div>
              <div className="mt-3 mb-3">
                <label
                  htmlFor="PTOn"
                  className="block text-sm font-medium text-gray-700"
                >
                  PT On
                </label>
                <select
                  name="PTOn"
                  value={contract.PTOn}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                >
                  <option value="Total Earnings">Total Earnings</option>
                  <option value="Gross-Bonus">Gross-Bonus</option>
                </select>
              </div>
              <div className="mt-3 mb-3">
                <label
                  htmlFor="indNDays"
                  className="block text-sm font-medium text-gray-700"
                >
                  Ind N Day's
                </label>
                <select
                  name="indNDays"
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                >
                  <option value="">-- Select --</option>
                  <option value="GEN">GEN</option>
                  <option value="G-S">G-S</option>
                  <option value="G-4">G-4</option>
                  <option value="Per Hour">Per Hour</option>
                  <option value="Per Day">Per Day</option>
                  <option value="Per Hour / Per Day">Per Hour / Per Day</option>
                  <option value="P.M / 8">P.M / 8</option>
                  <option value="G-S / 8">G-S / 8</option>
                  <option value="26 Days / 8 Hours">26 Days / 8 Hours</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
              </div>
              <div className="mt-3 mb-3">
                <label
                  htmlFor="indNOTs"
                  className="block text-sm font-medium text-gray-700"
                >
                  Ind N OT's
                </label>
                <select
                  name="indNOTs"
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                >
                  <option value="">-- Select --</option>
                  <option value="GEN">GEN</option>
                  <option value="G-S">G-S</option>
                  <option value="G-4">G-4</option>
                  <option value="Per Hour">Per Hour</option>
                  <option value="Per Day">Per Day</option>
                  <option value="Per Hour / Per Day">Per Hour / Per Day</option>
                  <option value="P.M / 8">P.M / 8</option>
                  <option value="G-S / 8">G-S / 8</option>
                  <option value="26 Days / 8 Hours">26 Days / 8 Hours</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="indNOTs"
                    value="noUniform"
                    checked={contract.noUniform}
                    onChange={handleCheckboxChange}
                    className="mr-1 rounded text-blue-500 focus:ring-blue-400"
                  />
                  No Uniform
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="indNOTs"
                    value="noAdvSal"
                    checked={contract.noAdvSal}
                    onChange={handleCheckboxChange}
                    className="mr-1 ml-2 rounded text-blue-500 focus:ring-blue-400"
                  />
                  No Adv. Sal.
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="indNOTs"
                    value="noLWF"
                    checked={contract.noLWF}
                    onChange={handleCheckboxChange}
                    className="mr-1 ml-2 rounded text-blue-500 focus:ring-blue-400"
                  />
                  No LWF
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="indNOTs"
                    value="noRegFee"
                    checked={contract.noRegFee}
                    onChange={handleCheckboxChange}
                    className="mr-1 ml-2 rounded text-blue-500 focus:ring-blue-400"
                  />
                  No Reg. Fee.
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Contract
          </button>
          <div className="mt-3">
            <p>All * marked must be fields must be required</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContract;
