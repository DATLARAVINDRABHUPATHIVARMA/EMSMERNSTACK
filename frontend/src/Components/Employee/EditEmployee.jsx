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
    employeeID: "",
    name: "",
    personalContact: "",
    dateOfBirth: "",
    email: "",
    preHNo: "",
    preStreet: "",
    preVillage: "",
    preMandal: "",
    preCity: "",
    preState: "",
    preCountry: "",
    prePincode: "",
    perHNo: "",
    perStreet: "",
    perVillage: "",
    perMandal: "",
    perCity: "",
    perState: "",
    perCountry: "",
    perPincode: "",
    gender: "",
    bloodGroup: "",
    emergencyContact: "",
    religion: "",
    qualification: "",
    major: "",
    caste: "",
    subCaste: "",
    motherTongue: "",
    languagesKnown: "",
    PWDStatus: "",
    disability: "",
    aadhaarNumber: "",
    PANNumber: "",
    dateOfJoining: "",
    empStatus: "",
    designation: "",
    department: "",
    client: "",
    site: "",
    officeContact: "",
    officeEmail: "",
    jobRole: "",
    role: "",
    currentSalary: "",
    reportingInchargePerson: "",
    repPersonDesignation: "",
    repPersonEmployeeID: "",
    previousDesignation: "",
    previousSalary: "",
    dateOfPromotion: "",
    dateOfTermination: "",
    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    motherOccupation: "",
    maritalStatus: "",
    spouseName: "",
    childrenCount: "",
    siblings: "",
    height: "",
    weight: "",
    chest: "",
    eyeColour: "",
    hairColour: "",
    disease: "",
    IDMark1: "",
    IDMark2: "",
    ESIDetails: "",
    insuranceDetails: "",
    PFDetails: "",
    UANNumber: "",
    bankName: "",
    bankAccountNumber: "",
    IFSCCode: "",
    bankBranch: "",
    refPerson1: "",
    isRefPerson1Employee: "",
    refPerson1Contact: "",
    refPerson1Email: "",
    refPerson1Occupation: "",
    refPerson1EmployeeID: "",
    refPerson2: "",
    isRefPerson2Employee: "",
    refPerson2Contact: "",
    refPerson2Email: "",
    refPerson2Occupation: "",
    refPerson2EmployeeID: ""
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
            employeeID: employee.employeeID,
            name: employee.userId.name,
            personalContact: employee.personalContact,
            dateOfBirth: employee.dateOfBirth,
            email: employee.userId.email,
            preHNo: employee.preHNo,
            preStreet: employee.preStreet,
            preVillage: employee.preVillage,
            preMandal: employee.preMandal,
            preCity: employee.preCity,
            preState: employee.preState,
            preCountry: employee.preCountry,
            prePincode: employee.prePincode,
            perHNo: employee.perHNo,
            perStreet: employee.perStreet,
            perVillage: employee.perVillage,
            perMandal: employee.perMandal,
            perCity: employee.perCity,
            perState: employee.perState,
            perCountry: employee.perCountry,
            perPincode: employee.perPincode,
            gender: employee.gender,
            bloodGroup: employee.bloodGroup,
            emergencyContact: employee.emergencyContact,
            religion: employee.religion,
            qualification: employee.qualification,
            major: employee.major,
            caste: employee.caste,
            subCaste: employee.subCaste,
            motherTongue: employee.motherTongue,
            languagesKnown: employee.languagesKnown,
            PWDStatus: employee.PWDStatus,
            disability: employee.disability,
            aadhaarNumber: employee.aadhaarNumber,
            PANNumber: employee.PANNumber,
            dateOfJoining: employee.dateOfJoining,
            empStatus: employee.empStatus,
            designation: employee.designation,
            department: employee.department,
            client: employee.client,
            site: employee.site,
            officeContact: employee.officeContact,
            officeEmail: employee.officeEmail,
            jobRole: employee.jobRole,
            role: employee.userId.role,
            currentSalary: employee.currentSalary,
            reportingInchargePerson: employee.reportingInchargePerson,
            repPersonDesignation: employee.repPersonDesignation,
            repPersonEmployeeID: employee.repPersonEmployeeID,
            previousDesignation: employee.previousDesignation,
            previousSalary: employee.previousSalary,
            dateOfPromotion: employee.dateOfPromotion,
            dateOfTermination: employee.dateOfTermination,
            fatherName: employee.fatherName,
            fatherOccupation: employee.fatherOccupation,
            motherName: employee.motherName,
            motherOccupation: employee.motherOccupation,
            maritalStatus: employee.maritalStatus,
            spouseName: employee.spouseName,
            childrenCount: employee.childrenCount,
            siblings: employee.siblings,
            height: employee.height,
            weight: employee.weight,
            chest: employee.chest,
            eyeColour: employee.eyeColour,
            hairColour: employee.hairColour,
            disease: employee.disease,
            IDMark1: employee.IDMark1,
            IDMark2: employee.IDMark2,
            ESIDetails: employee.ESIDetails,
            insuranceDetails: employee.insuranceDetails,
            PFDetails: employee.PFDetails,
            UANNumber: employee.UANNumber,
            bankName: employee.bankName,
            bankAccountNumber: employee.bankAccountNumber,
            IFSCCode: employee.IFSCCode,
            bankBranch: employee.bankBranch,
            refPerson1: employee.refPerson1,
            isRefPerson1Employee: employee.isRefPerson1Employee,
            refPerson1Contact: employee.refPerson1Contact,
            refPerson1Email: employee.refPerson1Email,
            refPerson1Occupation: employee.refPerson1Occupation,
            refPerson1EmployeeID: employee.refPerson1EmployeeID,
            refPerson2: employee.refPerson2,
            isRefPerson2Employee: employee.isRefPerson2Employee,
            refPerson2Contact: employee.refPerson2Contact,
            refPerson2Email: employee.refPerson2Email,
            refPerson2Occupation: employee.refPerson2Occupation,
            refPerson2EmployeeID: employee.refPerson2EmployeeID,
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
    <>
      {departments && clients && sites && employee ? (
        <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-6">Edit Employee</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Employee ID*
                </label>
                <input
                  type="text"
                  name="employeeID"
                  value={employee.employeeID}
                  className="mt-1 p-2 block w-full border bg-gray-200 border-gray-300 rounded-md"
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
                  placeholder="Enter Personal Phone Number"
                  className="mt-1 p-2 block w-full border bg-gray-200 border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date of Birth*
                </label>
                <input
                  type="text"
                  name="dateOfBirth"
                  value={new Date(employee.dateOfBirth).toDateString()}
                  className="mt-1 p-2 block w-full border bg-gray-200 border-gray-300 rounded-md"
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
                  value={employee.email}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
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
                    value={employee.preHNo}
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
                    value={employee.preStreet}
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
                    value={employee.preVillage}
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
                    value={employee.preMandal}
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
                    value={employee.preCity}
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
                    value={employee.preState}
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
                    value={employee.preCountry}
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
                    value={employee.prePincode}
                    onChange={handleChange}
                    placeholder="Enter Present Address"
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
                    value={employee.perHNo}
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
                    value={employee.perStreet}
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
                    value={employee.perVillage}
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
                    value={employee.perMandal}
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
                    value={employee.perCity}
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
                    value={employee.perState}
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
                    value={employee.perCountry}
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
                    value={employee.perPincode}
                    onChange={handleChange}
                    placeholder="Enter Present Address"
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
                <input
                  type="text"
                  name="gender"
                  value={employee.gender}
                  className="mt-1 p-2 block w-full border bg-gray-200 border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Blood Group
                </label>
                <select
                  name="bloodGroup"
                  value={employee.bloodGroup}
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
                  value={employee.emergencyContact}
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
                  value={employee.religion}
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
                  value={employee.qualification}
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
                  value={employee.major}
                  onChange={handleChange}
                  placeholder="Enter Major Branch of Study "
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Caste
                </label>
                <select
                  name="caste"
                  value={employee.caste}
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
                  value={employee.subCaste}
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
                  value={employee.motherTongue}
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
                  value={employee.languagesKnown}
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
                  value={employee.PWDStatus}
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
                  value={employee.disability}
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
                  value={employee.aadhaarNumber}
                  placeholder="Enter Aadhaar Number"
                  className="mt-1 p-2 block w-full border bg-gray-200 border-gray-300 rounded-md"
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
                  value={employee.PANNumber}
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
                  type="text"
                  name="dateOfJoining"
                  value={new Date(employee.dateOfJoining).toDateString()}
                  className="mt-1 p-2 block w-full border bg-gray-200 border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Employee Current Status
                </label>
                <select
                  name="empStatus"
                  value={employee.empStatus}
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
                  value={employee.designation}
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
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Web Role*
                </label>
                <input
                  type="text"
                  name="role"
                  value={employee.role}
                  className="mt-1 p-2 block w-full border bg-gray-200 border-gray-300 rounded-md"
                  required
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
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date of Termination
                </label>
                <input
                  type="date"
                  name="dateOfTermination"
                  value={employee.dateOfTermination}
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
                  value={employee.fatherName}
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
                  value={employee.fatherOccupation}
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
                  value={employee.motherName}
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
                  value={employee.motherOccupation}
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
                  value={employee.maritalStatus}
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
                  Siblings
                </label>
                <input
                  type="text"
                  name="siblings"
                  value={employee.siblings}
                  onChange={handleChange}
                  placeholder="Enter Siblings"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
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
            </div>
            <button
              type="button"
              className="w-full mt-8 mb-4 bg-blue-500 text-white font-bold py-2 px-4 rounded"
            >
              Physical Traits
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Height
                </label>
                <input
                  type="text"
                  name="height"
                  value={employee.height}
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
                  value={employee.weight}
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
                  value={employee.chest}
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
                  value={employee.eyeColour}
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
                  value={employee.hairColour}
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
                  value={employee.disease}
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
                  value={employee.IDMark1}
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
                  value={employee.IDMark2}
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
                  value={employee.refPerson1}
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
                  value={employee.refPerson1Contact}
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
                  value={employee.refPerson1Email}
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
                  value={employee.isRefPerson1Employee}
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
                  value={employee.refPerson1EmployeeID}
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
                  value={employee.refPerson1Occupation}
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
                  value={employee.refPerson2}
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
                  value={employee.refPerson2Contact}
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
                  value={employee.refPerson2Email}
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
                  value={employee.isRefPerson2Employee}
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
                  value={employee.refPerson2EmployeeID}
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
                  value={employee.refPerson2Occupation}
                  onChange={handleChange}
                  placeholder="Enter Reference 2 Occupation"
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
