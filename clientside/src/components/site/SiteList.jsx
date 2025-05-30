import React from 'react'
import { Link } from 'react-router-dom'

const SiteList = () => {
  return (
    <div className="p-5">
      <div className="text-center">
        <h3 className="text-2xl font-bold">Manage Sites</h3>
      </div>
      <div className="flex justify-between items-center">
        <input type="text" placeholder="Search By Site" className="px-4 py-0.5 border"
        // onChange={filterSites}
        />
        <Link to="/admin-dashboard/add-site" className="px-4 py-1 bg-purple-500 rounded text-white">
          Add New Site
        </Link>
      </div>
    </div>
  )
}

export default SiteList
