import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

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
          setEmployee(response.data.employee);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    };

    fetchEmployee();
  }, []);

  return (
    <>
      {employee ? (
        <div className="max-w-3xl mx-auto mt-10 bg-green-400 p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Employee Details
          </h2>
          <div className="flex items-center justify-center">
            <img
              src={`http://localhost:5000/${employee.userId.profileImage}`}
              className="rounded-full border w-72"
            />
          </div>
          <br />
          <div className="flex items-center justify space-x-3 mb-5">
            <p className="text-lg font-bold">Employee ID:</p>
            <p className="font-medium">{employee.employeeID}</p>
</div>
            <div className="flex items-center justify space-x-3 mb-5">
            <p className="text-lg font-bold">Name:</p>
            <p className="font-medium">{employee.userId.name}</p></div>
          
          <div className="flex items-center justify space-x-3 mb-5">
            <p className="text-lg font-bold">Date of Birth:</p>
            <p className="font-medium">
              {new Date(employee.dateOfBirth).toLocaleDateString()}
            </p>
          </div>
          <div className="flex items-center justify space-x-3 mb-5">
            <p className="text-lg font-bold">Gender:</p>
            <p className="font-medium">{employee.gender}</p>
          </div>
          <div className="flex items-center justify space-x-3 mb-5">
            <p className="text-lg font-bold">Date of Joining:</p>
            <p className="font-medium">
              {new Date(employee.dateOfJoining).toDateString()}
            </p>
          </div>
          <div className="flex items-center justify space-x-3 mb-5">
            <p className="text-lg font-bold">Personal Phone Number:</p>
            <p className="font-medium">{employee.personalContact}</p>
          </div>
          <div className="flex items-center justify space-x-3 mb-5">
            <p className="text-lg font-bold">Personal Email:</p>
            <p className="font-medium">{employee.userId.email}</p>
          </div>
          <div className="flex items-center justify space-x-3 mb-5">
            <p className="text-lg font-bold">Emergency Phone Number:</p>
            <p className="font-medium">
              {employee.emergencyContact}
            </p>
          </div>
          <div className="flex items-center justify space-x-3 mb-5">
            <p className="text-lg font-bold">Office Phone Number:</p>
            <p className="font-medium">{employee.officeContact}</p>
          </div>
          <div className="flex items-center justify space-x-3 mb-5">
            <p className="text-lg font-bold">Office Email:</p>
            <p className="font-medium">{employee.officeEmail}</p>
          </div>
          <div className="flex items-center justify space-x-3 mb-5">
            <p className="text-lg font-bold">Aadhaar Number:</p>
            <p className="font-medium">{employee.aadhaarNumber}</p>
          </div>
          <div className="flex items-center justify space-x-3 mb-5">
            <p className="text-lg font-bold">PAN Number:</p>
            <p className="font-medium">{employee.PANNumber}</p>
          </div>
          <div className="flex items-center justify space-x-3 mb-5">
            <p className="text-lg font-bold">Qualification:</p>
            <p className="font-medium">{employee.qualification}</p>
          </div>
          <div className="flex items-center justify space-x-3 mb-5">
            <p className="text-lg font-bold">Present Address:</p>
            <p className="font-medium">
              {employee.presentAddress}
            </p>
          </div>
          <div className="flex items-center justify space-x-3 mb-5">
            <p className="text-lg font-bold">Permanent Address:</p>
            <p className="font-medium">
              {employee.permanentAddress}
            </p>
          </div>
          <div className="flex text-center items-center justify-center space-x-3 mb-5">
            <p className="text-lg font-bold">Marital Status:</p>
            <p className="font-medium">{employee.maritalStatus}</p>
          </div>
          <div className="flex text-center items-center justify-center space-x-3 mb-5">
            <p className="text-lg font-bold">Spouse Name:</p>
            <p className="font-medium">{employee.spouseName}</p>
          </div>
          <div className="flex text-center items-center justify-center space-x-3 mb-5">
            <p className="text-lg font-bold">Number of Children:</p>
            <p className="font-medium">{employee.childrenCount}</p>
          </div>
          <div className="flex text-center items-center justify-center space-x-3 mb-5">
            <p className="text-lg font-bold">Department:</p>
            <p className="font-medium">{employee.department.departmentName}</p>
          </div>
          <div className="flex text-center items-center justify-center space-x-3 mb-5">
            <p className="text-lg font-bold">Department Description:</p>
            <p className="font-medium">
              {employee.department.departmentDescription}
            </p>
          </div>
          <div className="flex text-center items-center justify-center space-x-3 mb-5">
            <p className="text-lg font-bold">Designation:</p>
            <p className="font-medium">{employee.designation}</p>
          </div>
          <div className="flex text-center items-center justify-center space-x-3 mb-5">
            <p className="text-lg font-bold">Job Role:</p>
            <p className="font-medium">{employee.jobRole}</p>
          </div>
          <div className="flex text-center items-center justify-center space-x-3 mb-5">
            <p className="text-lg font-bold">Site:</p>
            <p className="font-medium">
              {employee.site.siteName}
            </p>
          </div>
          <div className="flex text-center items-center justify-center space-x-3 mb-5">
            <p className="text-lg font-bold">Site Address:</p>
            <p className="font-medium">{employee.site.siteAddress}</p>
          </div>
          <div className="flex text-center items-center justify-center space-x-3 mb-5">
            <p className="text-lg font-bold">Client ID:</p>
            <p className="font-medium">{employee.client.clientID}</p>
          </div>
          <div className="flex text-center items-center justify-center space-x-3 mb-5">
            <p className="text-lg font-bold">Client:</p>
            <p className="font-medium">{employee.client.clientName}</p>
          </div><div className="flex text-center items-center justify-center space-x-3 mb-5">
            <p className="text-lg font-bold">Client Location:</p>
            <p className="font-medium">{employee.client.clientLocation}</p>
          </div>
          <div className="flex text-center items-center justify-center space-x-3 mb-5">
            <p className="text-lg font-bold">Personal Email:</p>
            <p className="font-medium">{employee.userId.email}</p>
          </div>
          <div className="flex text-center items-center justify-center space-x-3 mb-5">
            <p className="text-lg font-bold">Department:</p>
            <p className="font-medium">{employee.departmentName}</p>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default ViewEmployee;
