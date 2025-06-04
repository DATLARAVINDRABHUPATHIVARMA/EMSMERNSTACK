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
    <>{employee ? (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-8 text-center">Employee Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img
            src={`http://localhost:5000/${employee.userId.profileImage}`}
            className="rounded-full border w-72"
          />
        </div>
        <div>
            <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Employee ID:</p>
                <p className="font-medium">{employee.employeeID}</p>
            </div>
            <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Name:</p>
                <p className="font-medium">{employee.userId.name}</p>
            </div>
            <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Personal Phone Number:</p>
                <p className="font-medium">{employee.personalContact}</p>
            </div>
            <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Date of Birth:</p>
                <p className="font-medium">{new Date(employee.dateOfBirth).toLocaleDateString()}</p>
            </div>
            
      <br /><br />
            <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Personal Email:</p>
                <p className="font-medium">{employee.userId.email}</p>
            </div>
            <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Office Email:</p>
                <p className="font-medium">{employee.officeEmail}</p>
            </div>
            <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Employee ID:</p>
                <p className="font-medium">{employee.employeeID}</p>
            </div>
            <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Name:</p>
                <p className="font-medium">{employee.userId.name}</p>
            </div>
            <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Personal Phone Number:</p>
                <p className="font-medium">{employee.personalContact}</p>
            </div>
            <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Date of Birth:</p>
                <p className="font-medium">{new Date(employee.dateOfBirth).toLocaleDateString()}</p>
            </div>
            <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Personal Email:</p>
                <p className="font-medium">{employee.userId.email}</p>
            </div>
            <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Office Email:</p>
                <p className="font-medium">{employee.officeEmail}</p>
            </div>
            <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Employee ID:</p>
                <p className="font-medium">{employee.employeeID}</p>
            </div>
            <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Name:</p>
                <p className="font-medium">{employee.userId.name}</p>
            </div>
            <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Personal Phone Number:</p>
                <p className="font-medium">{employee.personalContact}</p>
            </div>
            <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Date of Birth:</p>
                <p className="font-medium">{new Date(employee.dateOfBirth).toLocaleDateString()}</p>
            </div>
            <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Personal Email:</p>
                <p className="font-medium">{employee.userId.email}</p>
            </div>
            <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Office Email:</p>
                <p className="font-medium">{employee.officeEmail}</p>
            </div>
            <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Employee ID:</p>
                <p className="font-medium">{employee.employeeID}</p>
            </div>
            <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Client:</p>
                <p className="font-medium">{employee.clientName.clientName}</p>
            </div>
            <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Department:</p>
                <p className="font-medium">{employee.department.departmentName}</p>
            </div>
            <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Date of Birth:</p>
                <p className="font-medium">{new Date(employee.dateOfBirth).toLocaleDateString()}</p>
            </div>
            <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Personal Email:</p>
                <p className="font-medium">{employee.userId.email}</p>
            </div>
            <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Department:</p>
                <p className="font-medium">{employee.departmentName}</p>
            </div>
            </div>
      </div>
        
    </div>) : <div>Loading...</div>}</>
  );
};

export default ViewEmployee;
