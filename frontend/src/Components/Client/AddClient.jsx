import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDepartments, fetchSites } from "../../utils/ClientHelper.jsx";

const stateGstCodes = {
  "Andhra Pradesh": "37", "Arunachal Pradesh": "12", "Assam": "18", "Bihar": "10",
  "Chhattisgarh": "22", "Delhi": "07", "Goa": "30", "Gujarat": "24", "Haryana": "06",
  "Himachal Pradesh": "02", "Jammu and Kashmir": "01", "Jharkhand": "20", "Karnataka": "29",
  "Kerala": "32", "Madhya Pradesh": "23", "Maharashtra": "27", "Manipur": "14", "Meghalaya": "17",
  "Mizoram": "15", "Nagaland": "13", "Odisha": "21", "Punjab": "03", "Rajasthan": "08", "Sikkim": "11",
  "Tamil Nadu": "33", "Telangana": "36", "Tripura": "16", "Uttar Pradesh": "09", "Uttarakhand": "05",
  "West Bengal": "19", "Puducherry": "34", "Other Territory": "97"
};

const AddClient = () => {
  const [departments, setDepartments] = useState([]);
  const [sites, setSites] = useState([]);
  const [client, setClient] = useState({
    clientID: "",
    clientName: "",
    clientContactPerson: "",
    clientContact: "",
    clientEmail: "",
    clientDesignation: "",
    clientServiceStartedOn: "",
    clientServiceEndOn: "",
    clientServices: "",
    clientLocation: "",
    clientGSTNo: "",
    state: "",
    clientPANNo: "",
    clientBillHNo: "",
    clientBillStreet: "",
    clientBillVillage: "",
    clientBillMandal: "",
    clientBillCity: "",
    clientBillState: "",
    clientBillCountry: "",
    clientBillPincode: "",
    clientShipHNo: "",
    clientShipStreet: "",
    clientShipVillage: "",
    clientShipMandal: "",
    clientShipCity: "",
    clientShipState: "",
    clientShipCountry: "",
    clientShipPincode: "",
    clientDescription: "",
    clientEmployeeCount: "",
  });

  const [gstSuffix, setGstSuffix] = useState("");

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

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient((prev) => ({ ...prev, [name]: value }));
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    const prefix = stateGstCodes[state] || "";
    setClient((prev) => ({
      ...prev,
      state,
      clientGSTNo: prefix + gstSuffix
    }));
  };

  const handleGstSuffixChange = (e) => {
    const input = e.target.value.toUpperCase().replace(/\s/g, "").slice(0, 13);
    const prefix = stateGstCodes[client.state] || "";
    const fullGst = prefix + input;

    setGstSuffix(input);
    setClient((prev) => ({
      ...prev,
      clientGSTNo: fullGst
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/client/add",
        client,
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
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add Client</h2>
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
              onChange={handleChange}
              placeholder="Enter Contact Person Name"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
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
              onChange={handleChange}
              placeholder="Enter Phone Number"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
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
              onChange={handleChange}
              placeholder="Enter Client Starting Date"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="clientServiceEndOn"
              className="text-sm font-medium text-gray-700"
            >
              Client End Date
            </label>
            <input
              type="date"
              name="clientServiceEndOn"
              onChange={handleChange}
              placeholder="Enter Client Ending Date"
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
        <label className="text-sm font-medium text-gray-700">Select State</label>
        <select
  name="state"
  value={client.state}
  onChange={handleStateChange}
  className="mt-1 w-full p-2 border border-gray-300 rounded-md"
  required
>
  <option value="">-- Select State --</option>
  {Object.keys(stateGstCodes).map((stateName) => (
    <option key={stateName} value={stateName}>
      {stateName}
    </option>
  ))}
</select>
      </div>

      {/* GST Number: Single Input (prefix + editable suffix) */}
      <div>
        <label className="text-sm font-medium text-gray-700">GST Number</label>
        <div className="flex mt-1">
          <span className="inline-flex items-center px-3 border border-r-0 bg-gray-200 rounded-l-md text-sm font-mono">
            {stateGstCodes[client.state] || ""}
          </span>
          <input
            type="text"
            value={gstSuffix}
            onChange={handleGstSuffixChange}
            maxLength={13}
            disabled={!client.state}
            placeholder="Enter the remaining GST number Completely "
            className="flex-1 p-2 border border-l-0 rounded-r-md"
            required
          />
        </div>
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
            <button
              type="button"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded"
            >
              Billing Address
            </button>
            <div className="mt-2 mb-2">
              <label
                htmlFor="clientBillHNo"
                className="block text-sm font-medium text-gray-700"
              >
                House Number / Door Number / Flat Number
              </label>
              <input
                type="text"
                name="clientBillHNo"
                onChange={handleChange}
                placeholder="Enter House Number or Door Number"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="mt-2 mb-2">
              <label
                htmlFor="clientBillStreet"
                className="block text-sm font-medium text-gray-700"
              >
                Street / Lane
              </label>
              <input
                type="text"
                name="clientBillStreet"
                onChange={handleChange}
                placeholder="Enter Street Details"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="mt-2 mb-2">
              <label
                htmlFor="clientBillVillage"
                className="block text-sm font-medium text-gray-700"
              >
                Village / Locality
              </label>
              <input
                type="text"
                name="clientBillVillage"
                onChange={handleChange}
                placeholder="Enter Village"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="mt-2 mb-2">
              <label
                htmlFor="clientBillMandal"
                className="block text-sm font-medium text-gray-700"
              >
                Mandal / Municipality / Area
              </label>
              <input
                type="text"
                name="clientBillMandal"
                onChange={handleChange}
                placeholder="Enter Area"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="mt-2 mb-2">
              <label
                htmlFor="clientBillCity"
                className="block text-sm font-medium text-gray-700"
              >
                District / City
              </label>
              <input
                type="text"
                name="clientBillCity"
                onChange={handleChange}
                placeholder="Enter District / City"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="mt-2 mb-2">
              <label
                htmlFor="clientBillState"
                className="block text-sm font-medium text-gray-700"
              >
                State
              </label>
              <input
                type="text"
                name="clientBillState"
                onChange={handleChange}
                placeholder="Enter State"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="mt-2 mb-2">
              <label
                htmlFor="clientBillCountry"
                className="block text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <input
                type="text"
                name="clientBillCountry"
                onChange={handleChange}
                placeholder="Enter Country"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="mt-2 mb-2">
              <label
                htmlFor="clientBillPincode"
                className="block text-sm font-medium text-gray-700"
              >
                Pin Code / Zip Code
              </label>
              <input
                type="number"
                name="clientBillPincode"
                onChange={handleChange}
                placeholder="Enter Pincode"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div>
            <button
              type="button"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded"
            >
              Shipping Address
            </button>
            <div className="mt-2 mb-2">
              <label
                htmlFor="clientShipHNo"
                className="block text-sm font-medium text-gray-700"
              >
                House Number / Door Number / Flat Number
              </label>
              <input
                type="text"
                name="clientShipHNo"
                onChange={handleChange}
                placeholder="Enter House Number or Door Number"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="mt-2 mb-2">
              <label
                htmlFor="clientShipStreet"
                className="block text-sm font-medium text-gray-700"
              >
                Street / Lane
              </label>
              <input
                type="text"
                name="clientShipStreet"
                onChange={handleChange}
                placeholder="Enter Street Details"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="mt-2 mb-2">
              <label
                htmlFor="clientShipVillage"
                className="block text-sm font-medium text-gray-700"
              >
                Village / Locality
              </label>
              <input
                type="text"
                name="clientShipVillage"
                onChange={handleChange}
                placeholder="Enter Village"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="mt-2 mb-2">
              <label
                htmlFor="clientShipMandal"
                className="block text-sm font-medium text-gray-700"
              >
                Mandal / Municipality / Area
              </label>
              <input
                type="text"
                name="clientShipMandal"
                onChange={handleChange}
                placeholder="Enter Area"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="mt-2 mb-2">
              <label
                htmlFor="clientShipCity"
                className="block text-sm font-medium text-gray-700"
              >
                District / City
              </label>
              <input
                type="text"
                name="clientShipCity"
                onChange={handleChange}
                placeholder="Enter District / City"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="mt-2 mb-2">
              <label
                htmlFor="clientShipState"
                className="block text-sm font-medium text-gray-700"
              >
                State
              </label>
              <input
                type="text"
                name="clientShipState"
                onChange={handleChange}
                placeholder="Enter State"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="mt-2 mb-2">
              <label
                htmlFor="clientShipCountry"
                className="block text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <input
                type="text"
                name="clientShipCountry"
                onChange={handleChange}
                placeholder="Enter Country"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="mt-2 mb-2">
              <label
                htmlFor="clientShipPincode"
                className="block text-sm font-medium text-gray-700"
              >
                Pin Code / Zip Code
              </label>
              <input
                type="number"
                name="clientShipPincode"
                onChange={handleChange}
                placeholder="Enter Pincode"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
        <button
          type="button"
          className="w-full mt-8 mb-4 bg-blue-500 text-white font-bold py-0.5 px-4 rounded"
        ></button>
        <div>
          <label
            htmlFor="clientDescription"
            className="block text-sm font-medium text-gray-700"
          >
            Client Description
          </label>
          <textarea
            name="clientDescription"
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
            Total Employees for Client
          </label>
          <input
            type="number"
            name="clientEmployeeCount"
            onChange={handleChange}
            placeholder="Number of Employees for Client"
            className="block mt-1 w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full mt-6 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Client
        </button>
        <div className="mt-3">
          <p>All * marked must be fields must be required</p>
        </div>
      </form>
    </div>
  );
};

export default AddClient;
