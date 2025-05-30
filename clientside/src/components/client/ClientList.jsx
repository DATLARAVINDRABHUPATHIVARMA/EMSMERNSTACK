import React from 'react'
import { Link } from 'react-router-dom'

const ClientList = () => {
  return (
    <div className="p-5">
      <div className="text-center">
        <h3 className="text-2xl font-bold">Manage Clients</h3>
      </div>
      <div className="flex justify-between items-center">
        <input type="text" placeholder="Search By Client ID" className="px-4 py-0.5 border"
        // onChange={filterClients}
        />
        <Link to="/admin-dashboard/add-client" className="px-4 py-1 bg-purple-500 rounded text-white">
          Add New Client
        </Link>
      </div>
    </div>
  )
}

export default ClientList
