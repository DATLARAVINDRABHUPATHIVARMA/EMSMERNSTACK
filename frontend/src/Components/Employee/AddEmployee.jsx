import React, { useState, useEffect } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import {
  fetchClients,
  fetchDepartments,
  fetchSites,
} from "../../utils/EmployeeHelper.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddEmployee = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const toggleVisibility = () => setVisiblePassword(!visiblePassword);

  const [departments, setDepartments] = useState([]);
  const [clients, setClients] = useState([]);
  const [sites, setSites] = useState([]);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getDepartments = async () => {
      const departments = await fetchDepartments();
      setDepartments(departments);
    };
    getDepartments();
  }, []);

  useEffect(() => {
    const getClients = async () => {
      const clients = await fetchClients();
      setClients(clients);
    };
    getClients();
  }, []);

  useEffect(() => {
    const getSites = async () => {
      const sites = await fetchSites();
      setSites(sites);
    };
    getSites();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObj = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataObj.append(key, formData[key]);
    });

    try {
      const response = await axios.post(
        "http://localhost:5000/api/employee/add",
        formDataObj,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      if (response.data.success) {
        navigate("/admin-dashboard/employees");
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Employee ID*
            </label>
            <input
              type="text"
              name="employeeID"
              onChange={handleChange}
              placeholder="Enter Employee ID"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>
        <button
          type="button"
          className="w-full mt-8 mb-4 bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Basic Personal Details
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name*
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Enter Full Name as per Aadhaar"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number*
            </label>
            <input
              type="text"
              name="personalContact"
              onChange={handleChange}
              placeholder="Enter Personal Phone Number"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Photo*
            </label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              placeholder="Upload Image"
              accept="image/*"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date of Birth*
            </label>
            <input
              type="date"
              name="dateOfBirth"
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Personal Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter Personal Email"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative flex justify-between">
              <input
                type={visiblePassword ? "text" : "password"}
                name="password"
                placeholder="**********"
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
              <button
                type="button"
                onClick={toggleVisibility}
                className="absolute inset-y-0 right-0 px-2 py-2 text-grey-500 hover:text-purple-500 transition-colors duration-100"
              >
                {" "}
                {visiblePassword ? (
                  <IoMdEye size={24} />
                ) : (
                  <IoMdEyeOff size={24} />
                )}
              </button>
            </div>
          </div>
        </div>
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
              Present Address
            </button>
            <div className="mt-2 mb-2">
              <label className="block text-sm font-medium text-gray-700">
                House Number / Door Number / Flat Number
              </label>
              <input
                type="text"
                name="preHNo"
                onChange={handleChange}
                placeholder="Enter House Number or Door Number"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mt-2 mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Street / Lane
              </label>
              <input
                type="text"
                name="preStreet"
                onChange={handleChange}
                placeholder="Enter Street Details"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mt-2 mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Village / Locality
              </label>
              <input
                type="text"
                name="preVillage"
                onChange={handleChange}
                placeholder="Enter Village"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mt-2 mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Mandal / Municipality / Area
              </label>
              <input
                type="text"
                name="preMandal"
                onChange={handleChange}
                placeholder="Enter Area"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mt-2 mb-2">
              <label className="block text-sm font-medium text-gray-700">
                District / City
              </label>
              <input
                type="text"
                name="preCity"
                onChange={handleChange}
                placeholder="Enter District / City"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mt-2 mb-2">
              <label className="block text-sm font-medium text-gray-700">
                State
              </label>
              <input
                type="text"
                name="preState"
                onChange={handleChange}
                placeholder="Enter State"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mt-2 mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <input
                type="text"
                name="preCountry"
                onChange={handleChange}
                placeholder="Enter Country"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mt-2 mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Pin Code / Zip Code
              </label>
              <input
                type="number"
                name="prePincode"
                onChange={handleChange}
                placeholder="Enter Pincode"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
          <div>
            <button
              type="button"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded"
            >
              Permanent Address
            </button>
            <div className="mt-2 mb-2">
              <label className="block text-sm font-medium text-gray-700">
                House Number / Door Number / Flat Number
              </label>
              <input
                type="text"
                name="perHNo"
                onChange={handleChange}
                placeholder="Enter House Number or Door Number"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mt-2 mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Street / Lane
              </label>
              <input
                type="text"
                name="perStreet"
                onChange={handleChange}
                placeholder="Enter Street Details"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mt-2 mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Village / Locality
              </label>
              <input
                type="text"
                name="perVillage"
                onChange={handleChange}
                placeholder="Enter Village"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mt-2 mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Mandal / Municipality / Area
              </label>
              <input
                type="text"
                name="perMandal"
                onChange={handleChange}
                placeholder="Enter Area"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mt-2 mb-2">
              <label className="block text-sm font-medium text-gray-700">
                District / City
              </label>
              <input
                type="text"
                name="perCity"
                onChange={handleChange}
                placeholder="Enter District / City"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mt-2 mb-2">
              <label className="block text-sm font-medium text-gray-700">
                State
              </label>
              <input
                type="text"
                name="perState"
                onChange={handleChange}
                placeholder="Enter State"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mt-2 mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <input
                type="text"
                name="perCountry"
                onChange={handleChange}
                placeholder="Enter Country"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mt-2 mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Pin Code / Zip Code
              </label>
              <input
                type="number"
                name="perPincode"
                onChange={handleChange}
                placeholder="Enter Pincode"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
        </div>
        <button
          type="button"
          className="w-full mt-8 mb-4 bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Other Personal Details
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender*
            </label>
            <select
              name="gender"
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Blood Group
            </label>
            <select
              name="bloodGroup"
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+ve</option>
              <option value="AB+">AB+ve</option>
              <option value="B+">B+ve</option>
              <option value="O+">O+ve</option>
              <option value="A-">A-ve</option>
              <option value="AB-">AB-ve</option>
              <option value="B-">B-ve</option>
              <option value="O-">O-ve</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Emergency Phone Number*
            </label>
            <input
              type="text"
              name="emergencyContact"
              onChange={handleChange}
              placeholder="Enter Other Contact Number for Emergency "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Religion
            </label>
            <select
              name="religion"
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            >
              <option value="">Select Religion</option>
              <option value="Hinduism">Hindu</option>
              <option value="Islam">Muslim</option>
              <option value="Sikhism">Sikh</option>
              <option value="Christianity">Christian</option>
              <option value="Buddhism">Buddhist</option>
              <option value="Jainism">Jain</option>
              <option value="Shinto">Shinto</option>
              <option value="Judaism">Jew</option>
              <option value="Taoism">Tao</option>
              <option value="Zoroastrianism">Zoroastrian</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Highest Qualification
            </label>
            <input
              type="text"
              name="qualification"
              onChange={handleChange}
              placeholder="Enter Highest Qualification "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Branch Major
            </label>
            <input
              type="text"
              name="major"
              onChange={handleChange}
              placeholder="Enter Major Branch of Study"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Caste
            </label>
            <select
              name="caste"
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            >
              <option value="">Select Category</option>
              <option value="OC">General</option>
              <option value="BC">Other Backward Classes</option>
              <option value="SC">Scheduled Caste</option>
              <option value="ST">Scheduled Tribe</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Sub Caste
            </label>
            <input
              type="text"
              name="subCaste"
              onChange={handleChange}
              placeholder="Enter Sub Category"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mother Tongue
            </label>
            <input
              type="text"
              name="motherTongue"
              onChange={handleChange}
              placeholder="Enter Mother Tongue"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Languages Known
            </label>
            <input
              type="text"
              name="languagesKnown"
              onChange={handleChange}
              placeholder="Enter Known Languages"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Person With Disability Status
            </label>
            <select
              name="PWDStatus"
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            >
              <option value="">Person With Disability Status</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Disability
            </label>
            <input
              type="text"
              name="disability"
              onChange={handleChange}
              placeholder="If disabled enter disability"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Aadhaar Number*
            </label>
            <input
              type="text"
              name="aadhaarNumber"
              onChange={handleChange}
              placeholder="Enter Aadhaar Number"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              PAN Number
            </label>
            <input
              type="text"
              name="PANNumber"
              onChange={handleChange}
              placeholder="Enter PAN Number "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          {/* Nationality 
          <div>
          <label className="block text-sm font-medium text-gray-700">
          Nationality*
          </label>
          <select
          name="nationality"
          onChange={handleChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          required
          >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="Other">Other</option>
          </select>
          </div>*/}
        </div>
        <button
          type="button"
          className="w-full mt-8 mb-4 bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Employee Details
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date of Joining*
            </label>
            <input
              type="date"
              name="dateOfJoining"
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Employee Current Status
            </label>
            <select
              name="empStatus"
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Resigned">Resigned</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Designation*
            </label>
            <input
              type="text"
              name="designation"
              onChange={handleChange}
              placeholder="Enter Designation"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Department*
            </label>
            <select
              name="department"
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Department</option>
              {departments.map((department) => (
                <option key={department._id} value={department._id}>
                  {department.departmentName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Client*
            </label>
            <select
              name="client"
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Client</option>
              {clients.map((client) => (
                <option key={client._id} value={client._id}>
                  {client.clientName + " (" + client.clientID + ")"}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Site*
            </label>
            <select
              name="site"
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
            <label className="block text-sm font-medium text-gray-700">
              Office Phone Number
            </label>
            <input
              type="text"
              name="officeContact"
              onChange={handleChange}
              placeholder="Enter Office Phone Number "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Office Email
            </label>
            <input
              type="email"
              name="officeEmail"
              onChange={handleChange}
              placeholder="Enter Office Email "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Job Role*
            </label>
            <textarea
              name="jobRole"
              placeholder="Enter Job Details"
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              rows={1}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Web Role*
            </label>
            <select
              name="role"
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Web Role</option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
              <option value="staff">Staff</option>
              <option value="employee">Employee</option>
            </select>
          </div>
          {/* Site Details
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Site Details*
              </label>
            <textarea
              name="workSiteDetails"
              placeholder="Enter Site Details"
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              rows={4}
              required
              />
              </div>*/}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Salary
            </label>
            <input
              type="text"
              name="currentSalary"
              onChange={handleChange}
              placeholder="Enter Salary "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reporting Manager
            </label>
            <input
              type="text"
              name="reportingInchargePerson"
              onChange={handleChange}
              placeholder="Enter Reporting Manager Name "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reporting Manager Designation
            </label>
            <input
              type="text"
              name="repPersonDesignation"
              onChange={handleChange}
              placeholder="Enter Reporting Manager Designation "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reporting Manager Employee ID
            </label>
            <input
              type="text"
              name="repPersonEmployeeID"
              onChange={handleChange}
              placeholder="Enter Reporting Manager Employee ID "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Previous Designation
            </label>
            <input
              type="text"
              name="previousDesignation"
              onChange={handleChange}
              placeholder="Enter Previous Designation "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Previous Salary
            </label>
            <input
              type="text"
              name="previousSalary"
              onChange={handleChange}
              placeholder="Enter Previous Salary "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date of Promotion
            </label>
            <input
              type="date"
              name="dateOfPromotion"
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date of Termination
            </label>
            <input
              type="date"
              name="dateOfTermination"
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <button
          type="button"
          className="w-full mt-8 mb-4 bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Family Details
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Father's Name
            </label>
            <input
              type="text"
              name="fatherName"
              onChange={handleChange}
              placeholder="Enter Father's Name"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Father's Occupation
            </label>
            <input
              type="text"
              name="fatherOccupation"
              onChange={handleChange}
              placeholder="Enter Father's Occupation"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mother's Name
            </label>
            <input
              type="text"
              name="motherName"
              onChange={handleChange}
              placeholder="Enter Mother's Name"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mother's Occupation
            </label>
            <input
              type="text"
              name="motherOccupation"
              onChange={handleChange}
              placeholder="Enter Mother's Occupation"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Marital Status*
            </label>
            <select
              name="maritalStatus"
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Marital Status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Spouse Name
            </label>
            <input
              type="text"
              name="spouseName"
              onChange={handleChange}
              placeholder="Enter Spouse Name "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Children Count
            </label>
            <input
              type="number"
              name="childrenCount"
              onChange={handleChange}
              placeholder="Number of Children "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Siblings
            </label>
            <input
              type="text"
              name="siblings"
              onChange={handleChange}
              placeholder="Enter Siblings"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <button
          type="button"
          className="w-full mt-8 mb-4 bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Physical Standards
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Height
            </label>
            <input
              type="text"
              name="height"
              onChange={handleChange}
              placeholder="Enter Height"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Weight
            </label>
            <input
              type="text"
              name="weight"
              onChange={handleChange}
              placeholder="Enter Weight"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Chest
            </label>
            <input
              type="text"
              name="chest"
              onChange={handleChange}
              placeholder="Enter Chest"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Eye Colour
            </label>
            <input
              type="text"
              name="eyeColour"
              onChange={handleChange}
              placeholder="Enter Eye Colour"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Hair Colour
            </label>
            <input
              type="text"
              name="hairColour"
              onChange={handleChange}
              placeholder="Enter Hair Colour"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Disease (if any)
            </label>
            <input
              type="text"
              name="disease"
              onChange={handleChange}
              placeholder="Enter disease"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Identification Marks 1
            </label>
            <input
              type="text"
              name="IDMark1"
              onChange={handleChange}
              placeholder="Enter Identification Marks 1"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Identification Marks 2
            </label>
            <input
              type="text"
              name="IDMark2"
              onChange={handleChange}
              placeholder="Enter Identification Marks 2"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <button
          type="button"
          className="w-full mt-8 mb-4 bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          ESI and PF Details
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              ESI Number
            </label>
            <input
              type="text"
              name="ESIDetails"
              onChange={handleChange}
              placeholder="Enter ESI Number "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Insurance Number
            </label>
            <input
              type="text"
              name="insuranceDetails"
              onChange={handleChange}
              placeholder="Enter Insurance Number "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              PF Number
            </label>
            <input
              type="text"
              name="PFDetails"
              onChange={handleChange}
              placeholder="Enter PF Number "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              UAN Number
            </label>
            <input
              type="text"
              name="UANNumber"
              onChange={handleChange}
              placeholder="Enter UAN Number "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          {/*Total Team 
          <div>
            <label className="block text-sm font-medium text-gray-700">
               Total Team
            </label>
            <input
              type="number"
              name="teamCount"
              onChange={handleChange}
              placeholder="Enter Total Team Members "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Team Details 
            </label>
            <input
              type="text"
              name="teamDetails"
              onChange={handleChange}
              placeholder="Enter Team Details "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>*/}
        </div>
        <button
          type="button"
          className="w-full mt-8 mb-4 bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Bank Details
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Bank Name*
            </label>
            <input
              type="text"
              name="bankName"
              onChange={handleChange}
              placeholder="Enter Bank Name "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Bank Account Number*
            </label>
            <input
              type="text"
              name="bankAccountNumber"
              onChange={handleChange}
              placeholder="Enter Account Number "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Bank IFSC Code*
            </label>
            <input
              type="text"
              name="IFSCCode"
              onChange={handleChange}
              placeholder="Enter IFSC Code"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Bank Branch
            </label>
            <input
              type="text"
              name="bankBranch"
              onChange={handleChange}
              placeholder="Enter Branch "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <button
          type="button"
          className="w-full mt-8 mb-4 bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Reference Details
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reference Person 1 Name
            </label>
            <input
              type="text"
              name="refPerson1"
              onChange={handleChange}
              placeholder="Enter Reference Person 1 Name "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reference Person 1 Contact
            </label>
            <input
              type="text"
              name="refPerson1Contact"
              onChange={handleChange}
              placeholder="Enter Reference 1 Contact"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reference Person 1 Email
            </label>
            <input
              type="email"
              name="refPerson1Email"
              onChange={handleChange}
              placeholder="Enter Reference 1 Email"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reference 1 Status Employee or Not
            </label>
            <select
              name="isRefPerson1Employee"
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            >
              <option value="">Reference 1 Status</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reference Person 1 Employee ID
            </label>
            <input
              type="text"
              name="refPerson1EmployeeID"
              onChange={handleChange}
              placeholder="Enter Reference Person 1 Employee ID "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reference Person 1 Occupation
            </label>
            <input
              type="text"
              name="refPerson1Occupation"
              onChange={handleChange}
              placeholder="Enter Reference 1 Occupation"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reference Person 2 Name
            </label>
            <input
              type="text"
              name="refPerson2"
              onChange={handleChange}
              placeholder="Enter Reference Person 2 Name "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reference Person 2 Contact
            </label>
            <input
              type="text"
              name="refPerson2Contact"
              onChange={handleChange}
              placeholder="Enter Reference 2 Contact"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reference Person 2 Email
            </label>
            <input
              type="email"
              name="refPerson2Email"
              onChange={handleChange}
              placeholder="Enter Reference 2 Email"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reference 2 Status Employee or Not
            </label>
            <select
              name="isRefPerson2Employee"
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            >
              <option value="">Reference 2 Status</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reference Person 2 Employee ID
            </label>
            <input
              type="text"
              name="refPerson2EmployeeID"
              onChange={handleChange}
              placeholder="Enter Reference Person 2 Employee ID "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reference Person 2 Occupation
            </label>
            <input
              type="text"
              name="refPerson2Occupation"
              onChange={handleChange}
              placeholder="Enter Reference 2 Occupation"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full mt-10 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Employee
        </button>
        <div className="mt-3">
          <p>All * marked must be fields must be required</p>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
