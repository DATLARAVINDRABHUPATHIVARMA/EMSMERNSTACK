import React, { useState, useEffect } from "react";
import {
  fetchClients,
  fetchDepartments,
  fetchSites,
} from "../../utils/EmployeeHelper.jsx";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    personalContact: "",
    presentAddress: "",
    qualification: "",
    maritalStatus: "",
    emergencyContact: "",
    spouseName: "",
    childrenCount: "",
    permanentAddress: "",
    officeContact: "",
    officeEmail: "",
    PANNumber: "",
    department: "",
    designation: "",
    site: "",
    jobRole: "",
    client: "",
    reportingInchargePerson: "",
    repPersonDesignation: "",
    repPersonEmployeeID: "",
    currentSalary: 0,
    bankName: "",
    bankAccountNumber: "",
    IFSCCode: "",
    bankBranch: "",
    ESIDetails: "",
    insuranceDetails: "",
    PFDetails: "",
    UANNumber: "",
    previousDesignation: "",
    previousSalary: "",
    dateOfPromotion: "",
  });
  const [departments, setDepartments] = useState(null);
  const [clients, setClients] = useState(null);
  const [sites, setSites] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/employee/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          const employee = response.data.employee;
          setEmployee((prev) => ({
            ...prev,
            name: employee.userId.name,
            personalContact: employee.personalContact,
            presentAddress: employee.presentAddress,
            qualification: employee.qualification,
            maritalStatus: employee.maritalStatus,
            emergencyContact: employee.emergencyContact,
            spouseName: employee.spouseName,
            childrenCount: employee.childrenCount,
            permanentAddress: employee.permanentAddress,
            officeContact: employee.officeContact,
            officeEmail: employee.officeEmail,
            PANNumber: employee.PANNumber,
            department: employee.department.departmentName,
            designation: employee.designation,
            site: employee.site.siteName,
            jobRole: employee.jobRole,
            client: employee.client.clientID,
            reportingInchargePerson: employee.reportingInchargePerson,
            repPersonDesignation: employee.repPersonDesignation,
            repPersonEmployeeID: employee.repPersonEmployeeID,
            currentSalary: employee.currentSalary,
            bankName: employee.bankName,
            bankAccountNumber: employee.bankAccountNumber,
            IFSCCode: employee.IFSCCode,
            bankBranch: employee.bankBranch,
            ESIDetails: employee.ESIDetails,
            insuranceDetails: employee.insuranceDetails,
            PFDetails: employee.PFDetails,
            UANNumber: employee.UANNumber,
            previousDesignation: employee.previousDesignation,
            previousSalary: employee.previousSalary,
            dateOfPromotion: employee.dateOfPromotion,
          }));
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    };

    fetchEmployee();
  }, []);

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
    const { name, value } = e.target;
    setEmployee((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:5000/api/employee/${id}`,
        employee,
        {
          headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` },
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
    <>
      {departments && clients && sites && employee ? (
        <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-6">Edit Employee</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name*
                </label>
                <input
                  type="text"
                  name="name"
                  value={employee.name}
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
                  value={employee.personalContact}
                  onChange={handleChange}
                  placeholder="Enter Personal Phone Number"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Present Address*
                </label>
                <input
                  type="text"
                  name="presentAddress"
                  value={employee.presentAddress}
                  onChange={handleChange}
                  placeholder="Enter Present Address"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Highest Qualification
                </label>
                <input
                  type="text"
                  name="qualification"
                  value={employee.qualification}
                  onChange={handleChange}
                  placeholder="Enter Highest Qualification "
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
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Marital Status*
                </label>
                <select
                  name="maritalStatus"
                  value={employee.maritalStatus}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  required
                >
                  <option value="">Select Marital Status</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Other Emergency Phone Number*
                </label>
                <input
                  type="text"
                  name="emergencyContact"
                  value={employee.emergencyContact}
                  onChange={handleChange}
                  placeholder="Enter Other Contact Number for Emergency "
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Spouse Name
                </label>
                <input
                  type="text"
                  name="spouseName"
                  value={employee.spouseName}
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
                  value={employee.childrenCount}
                  onChange={handleChange}
                  placeholder="Number of Children "
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Permanent Address*
                </label>
                <input
                  type="text"
                  name="permanentAddress"
                  value={employee.permanentAddress}
                  onChange={handleChange}
                  placeholder="Enter Permanent Address "
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Office Phone Number
                </label>
                <input
                  type="text"
                  name="officeContact"
                  value={employee.officeContact}
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
                  value={employee.officeEmail}
                  onChange={handleChange}
                  placeholder="Enter Office Email "
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  PAN Number
                </label>
                <input
                  type="text"
                  name="PANNumber"
                  value={employee.PANNumber}
                  onChange={handleChange}
                  placeholder="Enter PAN Number "
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Department*
                </label>
                <select
                  name="department"
                  value={employee.department}
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
                  Designation*
                </label>
                <input
                  type="text"
                  name="designation"
                  value={employee.designation}
                  onChange={handleChange}
                  placeholder="Enter Designation"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Site*
                </label>
                <select
                  name="site"
                  value={employee.site}
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
                  Job Role*
                </label>
                <textarea
                  name="jobRole"
                  value={employee.jobRole}
                  placeholder="Enter Job Details"
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  rows={1}
                  required
                />
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
                  Client*
                </label>
                <select
                  name="client"
                  value={employee.client}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  required
                >
                  <option value="">Select Client</option>
                  {clients.map((client) => (
                    <option key={client._id} value={client._id}>
                      {client.clientID}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Reporting Manager
                </label>
                <input
                  type="text"
                  name="reportingInchargePerson"
                  value={employee.reportingInchargePerson}
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
                  value={employee.repPersonDesignation}
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
                  value={employee.repPersonEmployeeID}
                  onChange={handleChange}
                  placeholder="Enter Reporting Manager Employee ID "
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Salary
                </label>
                <input
                  type="text"
                  name="currentSalary"
                  value={employee.currentSalary}
                  onChange={handleChange}
                  placeholder="Enter Salary "
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Bank Name*
                </label>
                <input
                  type="text"
                  name="bankName"
                  value={employee.bankName}
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
                  value={employee.bankAccountNumber}
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
                  value={employee.IFSCCode}
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
                  value={employee.bankBranch}
                  onChange={handleChange}
                  placeholder="Enter Branch "
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  ESI Number
                </label>
                <input
                  type="text"
                  name="ESIDetails"
                  value={employee.ESIDetails}
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
                  value={employee.insuranceDetails}
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
                  value={employee.PFDetails}
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
                  value={employee.UANNumber}
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
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Previous Designation
                </label>
                <input
                  type="text"
                  name="previousDesignation"
                  value={employee.previousDesignation}
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
                  value={employee.previousSalary}
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
                  value={employee.dateOfPromotion}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-6 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
              Edit Employee
            </button>
            <div className="mt-3">
              <p>All * marked must be fields must be required</p>
            </div>
          </form>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default EditEmployee;
