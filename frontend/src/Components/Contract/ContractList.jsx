import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";

const ContractList = () => {
  return (
    <div className="p-5">
      <div className="flex items-center text-white justify gap-2 h-12 bg-gray-200 px-5 w-full rounded">
        <NavLink to="/admin-dashboard/contracts" className={({ isActive }) => `${isActive ? "bg-blue-500" : " "} px-4 py-1 rounded-md`}>Contracts</NavLink>
        <NavLink to="/admin-dashboard/add-license" className={({ isActive }) => `${isActive ? "bg-blue-500" : " "} px-4 py-1 bg-green-800 rounded-md`}>Licenses</NavLink>
        <NavLink to="/admin-dashboard/Attendance" className={({ isActive }) => `${isActive ? "bg-blue-500" : " "} px-4 py-1 bg-green-800 rounded-md`}>Attendance</NavLink>
        <NavLink to="/admin-dashboard/Billing" className={({ isActive }) => `${isActive ? "bg-blue-500" : " "} px-4 py-1 bg-green-800 rounded-md`}>Billing</NavLink>
        <NavLink to="/admin-dashboard/Reciepts" className={({ isActive }) => `${isActive ? "bg-blue-500" : " "} px-4 py-1 bg-green-800 rounded-md`}>Reciepts</NavLink>
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold">Manage Contracts</h3>
      </div>
      <div className="flex justify-between items-center">
        <input type="text" placeholder="Search By Contract Details" className="px-4 py-0.5 border"/>
        <Link to="/admin-dashboard/add-contract" className="px-4 py-1 bg-purple-500 rounded text-white">Add New Contract</Link>
      </div>
    </div>
  );
};

export default ContractList;
