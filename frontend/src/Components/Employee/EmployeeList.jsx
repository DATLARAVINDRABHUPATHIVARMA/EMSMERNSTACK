import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [employeeLoading, setEmployeeLoading] = useState(false);

  useEffect(() => {
      const fetchEmployees = async () => {
        setEmployeeLoading(true);
        try {
          const response = await axios.get("http://localhost:5000/api/employee",
            {
              headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`,},
            }
          );
          if(response.data.success){
            let sno = 1;
            const data = await response.data.employees.map((employee) => ({
              _id: employee._id,
              sno: sno++,
              employeeID: employee.employeeID,
              profileImage: employee.userId.profileImage,
              name: employee.userId.name,
              departmentName: employee.department.departmentName,
              designation: employee.designation,
              action: (
              ),
            }))
            setEmployees(data);
            setFilteredDepartments(data)
          }
        } catch(error){
          if (error.response && !error.response.data.success) {
            alert(error.response.data.error);
          }
        } finally {
          setEmployeeLoading(false);
        }
      }
  
      fetchEmployees();
    }, [])

  return (
    <div className="p-5">
      <div className="text-center">
        <h3 className="text-2xl font-bold">Manage Employees</h3>
      </div>
      <div className="flex justify-between items-center">
        <input type="text" placeholder="Search By Employee ID" className="px-4 py-0.5 border"
        />
        <Link to="/admin-dashboard/add-employee" className="px-4 py-1 bg-purple-500 rounded text-white">
          Add New Employee
        </Link>
      </div>
    </div>
  )
}

export default EmployeeList
