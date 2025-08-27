import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewDepartment = () => {
  const { id } = useParams();
  const [department, setDepartment] = useState(null);

  useEffect(() => {
    const fetchDepartment = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/department/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          setDepartment(response.data.department);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    };

    fetchDepartment();
  }, []);

  return (
    <>
      {department ? (
        <div className="max-w-3xl mx-auto mt-10 p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Department Details
          </h2>

          <div className="flex items-center  justify space-x-3 mb-5">
            <p className="text-lg font-bold">Department / Service:</p>
            <p className="font-medium">{department.departmentName}</p>
          </div>

          <div className="flex items-center justify space-x-3 mb-5">
            <p className="text-lg font-bold">Department Description:</p>
            <p className="font-medium">{department.departmentDescription}</p>
          </div>
          <div className="flex items-center justify space-x-3 mb-5">
            <p className="text-lg font-bold">Total Employees:</p>
            <p className="font-medium">{department.departmentEmployeeCount}</p>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default ViewDepartment;
