import axios from "axios";
import { fetchDepartments, fetchSites } from "../../utils/EmployeeHelper.jsx";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const stateGstCodes = {
  "Andhra Pradesh": "37", "Arunachal Pradesh": "12", "Assam": "18", "Bihar": "10",
  "Chhattisgarh": "22", "Delhi": "07", "Goa": "30", "Gujarat": "24", "Haryana": "06",
  "Himachal Pradesh": "02", "Jammu and Kashmir": "01", "Jharkhand": "20", "Karnataka": "29",
  "Kerala": "32", "Madhya Pradesh": "23", "Maharashtra": "27", "Manipur": "14", "Meghalaya": "17",
  "Mizoram": "15", "Nagaland": "13", "Odisha": "21", "Punjab": "03", "Rajasthan": "08", "Sikkim": "11",
  "Tamil Nadu": "33", "Telangana": "36", "Tripura": "16", "Uttar Pradesh": "09", "Uttarakhand": "05",
  "West Bengal": "19", "Puducherry": "34", "Other Territory": "97"
};

const EditClient = () => {
  const { id } = useParams();
  const [client, setClient] = useState({
    clientID: "", clientName: "", clientContactPerson: "", clientContact: "", clientEmail: "", clientDesignation: "", landlineNo: "", faxNo: "", companyGst: "", companyPan: "", clientServiceStartedOn: "", clientServiceEndOn: "", clientServices: "",
    clientBillHNo: "",
    clientBillStreet: "",
    clientBillVillage: "",
    clientBillMandal: "",
    clientBillCity: "", clientBillState: "", clientGSTNo: "", clientBillCountry: "", clientBillPincode: "", billPANNo: "", shipPANNo: "", shipGSTNo: "",
    clientShipHNo: "",
    clientShipStreet: "",
    clientShipVillage: "",
    clientShipMandal: "",
    clientShipCity: "",
    clientShipState: "",
    clientShipCountry: "",
    clientShipPincode: "",
    clientLocation: "",
    orderNo: "",
    PTState: "", LWFState: "", PFBranch: "", ESIBranch: "",
    clientType: "", location: "", unit: "", invoice: "", paySheet: "",
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

  const [gstSuffix, setGstSuffix] = useState("");
  const [shipGstSuffix, setShipGstSuffix] = useState("");

  const handleStateChange = (e) => {
    const clientBillState = e.target.value;
    const prefix = stateGstCodes[clientBillState] || "";
    setClient((prev) => ({
      ...prev,
      clientBillState,
      clientGSTNo: prefix + gstSuffix
    }));
  };

  const handleShipStateChange = (e) => {
    const clientShipState = e.target.value;
    const prefix1 = stateGstCodes[clientShipState] || "";
    setClient((prev) => ({
      ...prev,
      clientShipState,
      shipGSTNo: prefix1 + shipGstSuffix
    }));
  };

  const handleGstSuffixChange = (e) => {
    const input = e.target.value.toUpperCase().replace(/\s/g, "").slice(0, 13);
    const prefix = stateGstCodes[client.clientBillState] || "";
    const fullGst = prefix + input;

    setGstSuffix(input);
    setClient((prev) => ({
      ...prev,
      clientGSTNo: fullGst
    }));
  };

  const handleShipGstSuffixChange = (e) => {
    const input = e.target.value.toUpperCase().replace(/\s/g, "").slice(0, 13);
    const prefix1 = stateGstCodes[client.clientShipState] || "";
    const fullShipGst = prefix1 + input;

    setShipGstSuffix(input);
    setClient((prev) => ({
      ...prev,
      shipGSTNo: fullShipGst
    }));
  };

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
          const client = response.data.client;
          setClient({
            ...client,
            clientID: client.clientID,
            clientName: client.clientName,
            clientContactPerson: client.clientContactPerson,
            clientContact: client.clientContact,
            clientEmail: client.clientEmail,
            clientDesignation: client.clientDesignation,
            landlineNo: client.landlineNo,
            faxNo: client.faxNo,
            clientServiceStartedOn: client.clientServiceStartedOn,
            clientServiceEndOn: client.clientServiceEndOn,
            clientServices: client.clientServices,
            companyGst: client.companyGst, companyPan: client.companyPan,
            clientBillHNo: client.clientBillHNo,
            clientBillStreet: client.clientBillStreet,
            clientBillVillage: client.clientBillVillage,
            clientBillMandal: client.clientBillMandal,
            clientBillCity: client.clientBillCity,
            clientBillState: client.clientBillState,
            clientBillCountry: client.clientBillCountry,
            clientBillPincode: client.clientBillPincode,
            clientGSTNo: client.clientGSTNo,
            billPANNo: client.billPANNo,
            clientShipHNo: client.clientShipHNo,
            clientShipStreet: client.clientShipStreet,
            clientShipVillage: client.clientShipVillage,
            clientShipMandal: client.clientShipMandal,
            clientShipCity: client.clientShipCity,
            clientShipState: client.clientShipState,
            clientShipCountry: client.clientShipCountry,
            clientShipPincode: client.clientShipPincode,
            shipGSTNo: client.shipGSTNo,
            shipPANNo: client.shipPANNo,
            clientLocation: client.clientLocation,
            orderNo: client.orderNo,
            PTState: client.PTState,
            LWFState: client.LWFState,
            PFBranch: client.PFBranch,
            ESIBranch: client.ESIBranch,
            clientType: client.clientType,
            location: client.location,
            unit: client.unit,
            invoice: client.invoice,
            paySheet: client.paySheet,
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
                  placeholder="Enter Client ID"
                  className="mt-1 w-full p-2 border border-gray-300  bg-gray-200 rounded-md"
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
                  htmlFor="landlineNo"
                  className="text-sm font-medium text-gray-700"
                >
                  Landline Number
                </label>
                <input
                  type="text"
                  name="landlineNo"
                  value={client.landlineNo}
                  onChange={handleChange}
                  placeholder="Enter Client's Landline Number"
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
                  value={client.clientServiceStartedOn}
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
                  value={client.clientServiceEndOn}
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
                  htmlFor="faxNo"
                  className="text-sm font-medium text-gray-700"
                >
                  Fax Number
                </label>
                <input
                  type="text"
                  name="faxNo"
                  value={client.faxNo}
                  onChange={handleChange}
                  placeholder="Enter Client's Fax Number"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="companyGst" className="block text-sm font-medium text-gray-700">
                  Our Company GST NO
                </label>
                <input
                  name="companyGst"
                  value={client.companyGst}
                  className="mt-1 p-2 block w-full border border-gray-300 bg-gray-200 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="companyPan" className="block text-sm font-medium text-gray-700">
                  Our Company PAN NO
                </label>
                <input
                  name="companyPan"
                  value={client.companyPan}
                  className="mt-1 p-2 block w-full border border-gray-300 bg-gray-200 rounded-md"
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
                    value={client.clientBillHNo}
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
                    value={client.clientBillStreet}
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
                    value={client.clientBillVillage}
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
                    value={client.clientBillMandal}
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
                    value={client.clientBillCity}
                    onChange={handleChange}
                    placeholder="Enter District / City"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mt-2 mb-2">
                  <label className="text-sm font-medium text-gray-700">Select State</label>
                  <select
                    name="clientBillState"
                    value={client.clientBillState}
                    onChange={handleStateChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">-- Select State --</option>
                    {Object.keys(stateGstCodes).map((stateName) => (
                      <option key={stateName} value={stateName}>
                        {stateName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-2 mb-2">
                  <label
                    htmlFor="clientBillCountry"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <select
                    name="clientBillCountry"
                    value={client.clientBillCountry}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  >
                    <option value="India">INDIA</option>
                    <option value="Other">Other</option>
                  </select>
                  {client.clientBillCountry === "Other" && (
                    <input
                      type="text"
                      name="billCountry"
                      value={client.billCountry}
                      onChange={handleChange}
                      placeholder="Enter country name"
                      className="mt-2 p-2 block w-full border border-gray-300 rounded-md"
                      required
                    />
                  )}
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
                    value={client.clientBillPincode}
                    onChange={handleChange}
                    placeholder="Enter Pincode"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mt-2 mb-2">
                  <label className="text-sm font-medium text-gray-700">GST Number</label>
                  <div className="flex mt-1">
                    <span className="inline-flex items-center px-3 border border-r-0 bg-gray-200 rounded-l-md">
                      {stateGstCodes[client.clientBillState] || ""}
                    </span>
                    <input
                      type="text"
                      value={gstSuffix}
                      onChange={handleGstSuffixChange}
                      maxLength={13}
                      disabled={!client.clientBillState}
                      placeholder="Enter the remaining GST number Completely "
                      className="flex-1 p-2 border border-l-0 rounded-r-md"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="billPANNo"
                    className="text-sm font-medium text-gray-700"
                  >
                    Billing PAN Number
                  </label>
                  <input
                    type="text"
                    name="billPANNo"
                    onChange={handleChange}
                    placeholder="Enter Billing PAN Number"
                    className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
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
                    name="clientShipHNo"
                    value={client.clientShipHNo}
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
                    value={client.clientShipStreet}
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
                    value={client.clientShipVillage}
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
                    value={client.clientShipMandal}
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
                    value={client.clientShipCity}
                    onChange={handleChange}
                    placeholder="Enter District / City"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mt-2 mb-2">
                  <label className="text-sm font-medium text-gray-700">Select State</label>
                  <select
                    name="clientShipState"
                    value={client.clientShipState}
                    onChange={handleShipStateChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">-- Select State --</option>
                    {Object.keys(stateGstCodes).map((stateName) => (
                      <option key={stateName} value={stateName}>
                        {stateName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-2 mb-2">
                  <label
                    htmlFor="clientShipCountry"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <select
                    name="clientShipCountry"
                    value={client.clientShipCountry}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  >
                    <option value="India">INDIA</option>
                    <option value="Other">Other</option>
                  </select>
                  {client.clientShipCountry === "Other" && (
                    <input
                      type="text"
                      name="shipCountry"
                      value={client.shipCountry}
                      onChange={handleChange}
                      placeholder="Enter country name"
                      className="mt-2 p-2 block w-full border border-gray-300 rounded-md"
                      required
                    />
                  )}
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
                    value={client.clientShipPincode}
                    onChange={handleChange}
                    placeholder="Enter Pincode"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  />
                </div>
                {/* GST Number: Single Input (prefix + editable suffix) */}
                <div className="mt-2 mb-2">
                  <label className="text-sm font-medium text-gray-700">GST Number</label>
                  <div className="flex mt-1">
                    <span className="inline-flex items-center px-3 border border-r-0 bg-gray-200 rounded-l-md">
                      {stateGstCodes[client.clientShipState] || ""}
                    </span>
                    <input
                      type="text"
                      value={shipGstSuffix}
                      onChange={handleShipGstSuffixChange}
                      maxLength={13}
                      disabled={!client.clientShipState}
                      placeholder="Enter the remaining GST number Completely "
                      className="flex-1 p-2 border border-l-0 rounded-r-md"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="shipPANNo"
                    className="text-sm font-medium text-gray-700"
                  >
                    Shipping PAN Number
                  </label>
                  <input
                    type="text"
                    name="shipPANNo"
                    value={client.shipPANNo}
                    onChange={handleChange}
                    placeholder="Enter Shipping PAN Number"
                    className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
            <button
              type="button"
              className="w-full mt-8 mb-4 bg-blue-500 text-white font-bold py-2 px-4 rounded"
            >
              More Details
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="clientLocation"
                  className="text-sm font-medium text-gray-700"
                >
                  Branch*
                </label>
                <select
                  name="clientLocation"
                  value={client.clientLocation}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  required
                >
                  <option value="">Select Branch</option>
                  {sites.map((site) => (
                    <option key={site._id} value={site._id}>
                      {site.siteName}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="orderNo"
                  className="text-sm font-medium text-gray-700"
                >
                  Buyer's Order Number
                </label>
                <input
                  type="text"
                  name="orderNo"
                  value={client.orderNo}
                  onChange={handleChange}
                  placeholder="Enter Buyer's Order Number"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                >
                  PT State
                </label>
                <select
                  name="PTState"
                  value={client.PTState}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                >
                  <option value="">Select State</option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadra and Nagar Haveli">
                    Dadra and Nagar Haveli
                  </option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmirl</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Ladakh">Ladakh</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Other Territory">Other Territory</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Foreign Country">Foreign Country</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="LWFState"
                  className="block text-sm font-medium text-gray-700"
                >
                  LWF State
                </label>
                <select
                  name="LWFState"
                  value={client.LWFState}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                >
                  <option value="">-- Select State --</option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadra and Nagar Haveli">
                    Dadra and Nagar Haveli
                  </option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmirl</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Ladakh">Ladakh</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Other Territory">Other Territory</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Foreign Country">Foreign Country</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="PFBranch"
                  className="block text-sm font-medium text-gray-700"
                >
                  PF Branch
                </label>
                <select
                  name="PFBranch"
                  value={client.PFBranch}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                >
                  <option value="">-- Select State --</option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadra and Nagar Haveli">
                    Dadra and Nagar Haveli
                  </option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmirl</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Ladakh">Ladakh</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Other Territory">Other Territory</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Foreign Country">Foreign Country</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="ESIBranch"
                  className="block text-sm font-medium text-gray-700"
                >
                  ESI Branch
                </label>
                <select
                  name="ESIBranch"
                  value={client.ESIBranch}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                >
                  <option value="">-- Select State --</option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadra and Nagar Haveli">
                    Dadra and Nagar Haveli
                  </option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmirl</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Ladakh">Ladakh</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Other Territory">Other Territory</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Foreign Country">Foreign Country</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="clientType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Client Type
                </label>
                <select
                  name="clientType"
                  value={client.clientType}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                >
                  <option value="">-- Select --</option>
                  <option value="One Time Joining">One Time Joining</option>
                  <option value="Annual Maintenance Contract">
                    Annual Maintenance Contract
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={client.location}
                  onChange={handleChange}
                  placeholder="Enter location"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="mt-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Unit
                </label>
                <div className="flex items-center gap-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="unit"
                      value="Main Unit"
                      checked={client.unit === "Main Unit"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Main Unit
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="unit"
                      value="Sub Unit"
                      checked={client.unit === "Sub Unit"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Sub Unit
                  </label>
                </div>
              </div>
              {client.unit === "Sub Unit" && (
                <div>
                  <label
                    htmlFor="subUnitName"
                    className="text-sm font-medium text-gray-700"
                  >
                    Enter Sub Unit Name
                  </label>
                  <input
                    type="text"
                    name="subUnitName"
                    value={client.subUnitName}
                    onChange={handleChange}
                    placeholder="Type Sub Unit Name"
                    className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
              )}
            </div>
            <div className="mt-3">
              <label htmlFor="invoice" className="block text-sm font-medium text-gray-700 mb-1">
                Invoice
              </label>
              <div className="flex items-center gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="invoice"
                    value="Yes"
                    checked={client.invoice === "Yes"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="invoice"
                    value="No"
                    checked={client.invoice === "No"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>
            <div className="mt-3">
              <label htmlFor="paySheet" className="block text-sm font-medium text-gray-700 mb-1">
                Pay Sheet
              </label>
              <div className="flex items-center gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="paySheet"
                    value="Yes"
                    checked={client.paySheet === "Yes"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="paySheet"
                    value="No"
                    checked={client.paySheet === "No"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>
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
