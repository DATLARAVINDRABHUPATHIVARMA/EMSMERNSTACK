import axios from 'axios';
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { columns, DepartmentButtons } from "../../utils/DepartmentHelper.jsx";

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);
  const [departmentLoading, setDepartmentLoading] = useState(false);
  const [filteredDepartments, setFilteredDepartments] = useState([]);

  const onDepartmentDelete = async (id) => {
    const data = departments.filter(department => department._id !== id);
    setDepartments(data);
  };

  useEffect(() => {
    const fetchDepartments = async () => {
      setDepartmentLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/api/department",
          {
            headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`,},
          }
        );
        if(response.data.success){
          let sno = 1;
          const data = await response.data.departments.map((department) => ({
            _id: department._id,
            sno: sno++,
            departmentName: department.departmentName,
            departmentEmployeeCount: department.departmentEmployeeCount,
            action: (
              <DepartmentButtons _id={department._id} onDepartmentDelete={onDepartmentDelete}/>
            ),
          }))
          setDepartments(data);
          setFilteredDepartments(data)
        }
      } catch(error){
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      } finally {
        setDepartmentLoading(false);
      }
    }

    fetchDepartments();
  }, [])

  const filterDepartments = (e) => {
    const records = departments.filter((department) => department.departmentName.toLowerCase().includes(e.target.value.toLowerCase()))
    setFilteredDepartments(records)
  }

  return (
     <>
      {departmentLoading ? (
        <div>Loading Departments Table...</div>
      ) : (
    <div className="p-5">
      <div className="text-center">
        <h3 className="text-2xl font-bold">Manage Departments</h3>
      </div>
      <div className="flex justify-between items-center">
        <input type="text" placeholder="Search By Dept Name" className="px-4 py-0.5 border"
        onChange={filterDepartments}
        />
        <Link to="/admin-dashboard/add-department" className="px-4 py-1 bg-purple-500 rounded text-white">
          Add New Department
        </Link>
      </div>
      <div className="mt-5">
        <DataTable columns={columns} data={filteredDepartments} pagination/>
      </div>
    </div>
     )}
    </>
  );
};

export default DepartmentList;
