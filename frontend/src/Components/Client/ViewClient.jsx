import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewClient = () => {
  const { id } = useParams();
  const [client, setClient] = useState(null);

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/client/${id}`,
          {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          setClient(response.data.client);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    };

    fetchClient();
  }, []);

  return (
    <>
      {client ? (
        <div className="max-w-3xl mx-auto mt-10 p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Client Details
          </h2>
          <div className="flex items-center  justify space-x-3 mb-5">
            <p className="text-lg font-bold">Client ID:</p>
            <p className="font-medium">{client.clientID}</p>
          </div>
          <div className="flex items-center justify space-x-3 mb-5">
            <p className="text-lg font-bold">Client:</p>
            <p className="font-medium">{client.clientName}</p>
          </div>
          <div className="flex items-center justify space-x-3 mb-5">
            <p className="text-lg font-bold">Client Services:</p>
            <p className="font-medium">{client.clientServices}</p>
          </div>
          <div className="flex items-center justify space-x-3 mb-5">
            <p className="text-lg font-bold">Client Location:</p>
            <p className="font-medium">{client.clientLocation}</p>
          </div>
          <div className="flex items-center justify space-x-3 mb-5">
            <p className="text-lg font-bold">Client Services Starting Date:</p>
            <p className="font-medium">{client.clientServicesStartedOn}</p>
          </div>
          <div className="flex items-center justify space-x-3 mb-5">
            <p className="text-lg font-bold">Client Description:</p>
            <p className="font-medium">{client.clientDescription}</p>
          </div>
          <div className="flex items-center justify space-x-3 mb-5">
            <p className="text-lg font-bold">Total Employees:</p>
            <p className="font-medium">{client.clientEmployeeCount}</p>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default ViewClient;