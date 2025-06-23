import axios from "axios";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { columns, EmployeeButtons } from "../../utils/EmployeeHelper.jsx";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [employeeLoading, setEmployeeLoading] = useState(false);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      setEmployeeLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/api/employee", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        if (response.data.success) {
          let sno = 1;
          const data = await response.data.employees.map((employee) => ({
            _id: employee._id,
            sno: sno++,
            employeeID: employee.employeeID,
            profileImage: (
              <img
                width={40}
                className="rounded-full"
                src={`http://localhost:5000/${employee.userId.profileImage}`}
              />
            ),
            name: employee.userId.name,
            dateOfJoining: new Date(
              employee.dateOfJoining
            ).toDateString(),
            designation: employee.designation,
            action: <EmployeeButtons _id={employee._id} />,
          }));
          setEmployees(data);
          setFilteredEmployees(data);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      } finally {
        setEmployeeLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const handleFilter = (e) => {
    const records = employees.filter((employee) =>
      employee.employeeID.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredEmployees(records);
  };

  return (
    <div className="p-5">
      <div className="text-center">
        <h3 className="text-2xl font-bold">Manage Employees</h3>
      </div>
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search By Employee ID"
          className="px-4 py-0.5 border"
          onChange={handleFilter}
        />
        <Link
          to="/admin-dashboard/add-employee"
          className="px-4 py-1 bg-purple-500 rounded text-white"
        >
          Add New Employee
        </Link>
      </div>
      <div className="mt-5">
        <DataTable columns={columns} data={filteredEmployees} pagination />
      </div>
    </div>
  );
};

export default EmployeeList;
