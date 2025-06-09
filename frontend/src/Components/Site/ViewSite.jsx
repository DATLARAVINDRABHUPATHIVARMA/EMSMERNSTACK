import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewSite = () => {
  const { id } = useParams();
  const [site, setSite] = useState(null);

  useEffect(() => {
    const fetchSite = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/site/${id}`,
          {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          setSite(response.data.site);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    };

    fetchSite();
  }, []);

  return (
    <>
      {site ? (
        <div className="max-w-3xl mx-auto mt-10 p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Site Details
          </h2>
          <div className="flex items-center  justify space-x-3 mb-5">
            <p className="text-lg font-bold">Site:</p>
            <p className="font-medium">{site.siteName}</p>
          </div>
          <div className="flex items-center justify space-x-3 mb-5">
            <p className="text-lg font-bold">Site Address:</p>
            <p className="font-medium">{site.siteAddress}</p>
          </div>
          <div className="flex items-center justify space-x-3 mb-5">
            <p className="text-lg font-bold">Site Description:</p>
            <p className="font-medium">{site.siteDescription}</p>
          </div>
          <div className="flex items-center justify space-x-3 mb-5">
            <p className="text-lg font-bold">Total Employees:</p>
            <p className="font-medium">{site.siteEmployeeCount}</p>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default ViewSite;