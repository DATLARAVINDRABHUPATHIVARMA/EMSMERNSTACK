import React from "react";
import { Link } from "react-router-dom";

const ClientList = () => {
  return (
    <div>
      <div className="text-center" y>
        <h3 className="text-2xl font-bold">Manage Clients</h3>
      </div>
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search By Client Name"
          className="px-4 py-0.5 border"
        />
        <Link
          to="/admin-dashboard/add-client"
          className="px-4 py-1 bg-purple-500 rounded text-white"
        >
          Add New Client
        </Link>
      </div>
    </div>
  );
};

export default ClientList;
