import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component";
import { Link } from 'react-router-dom'
import { columns, SiteButtons } from '../../utils/SiteHelper.jsx';
import axios from 'axios';

const SiteList = () => {
  const [sites, setSites] = useState([]);
  const [siteLoading, setSiteLoading] = useState(false);

  const onSiteDelete = async (id) => {
    const data = sites.filter(site => site._id !== id);
    setSites(data);
  };
  
  useEffect(() => {
    const fetchSites = async () => {
      setSiteLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/api/site",
          {
            headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`,},
          }
        );
        if(response.data.success){
          let sno = 1;
          const data = await response.data.sites.map((site) => ({
            _id: site._id,
            sno: sno++,
            siteName: site.siteName,
            action: (
              <SiteButtons _id={site._id} onSiteDelete={onSiteDelete}/>
            ),
          }))
          setSites(data);
        }
      } catch(error){
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      } finally {
        setSiteLoading(false);
      }
    }

    fetchSites();
  }, [])

  return (
    <>
      {siteLoading ? (
        <div>Loading Sites Table...</div>
      ) : (
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
      <div className="mt-5">
        <DataTable columns={columns} data={sites} />
      </div>
    </div>
    )}
    </>
  )
}

export default SiteList
