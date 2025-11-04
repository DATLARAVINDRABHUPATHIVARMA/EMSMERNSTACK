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
              Authorization: `Bearer ${localStorage.getItem("token")}`,
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
        <div className="max-w-4xl mx-auto mt-10 p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Client Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <div className="flex items-center  justify space-x-3 mb-2">
              <p className="text-lg font-bold">Client ID:</p>
              <p className="font-medium">{client.clientID}</p>
            </div>
            <div className="flex items-center justify space-x-3 mb-2">
              <p className="text-lg font-bold">Client:</p>
              <p className="font-medium">{client.clientName}</p>
            </div>
            <div className="flex items-center  justify space-x-3 mb-2">
              <p className="text-lg font-bold">Contact Person:</p>
              <p className="font-medium">{client.clientContactPerson}</p>
            </div>
            <div className="flex items-center justify space-x-3 mb-2">
              <p className="text-lg font-bold">Person's Designation:</p>
              <p className="font-medium">{client.clientDesignation}</p>
            </div>
            <div className="flex items-center  justify space-x-3 mb-2">
              <p className="text-lg font-bold">Phone Number:</p>
              <p className="font-medium">{client.clientContact}</p>
            </div>
            <div className="flex items-center justify space-x-3 mb-2">
              <p className="text-lg font-bold">Email:</p>
              <p className="font-medium">{client.clientEmail}</p>
            </div>
            <div className="flex items-center justify space-x-3 mb-2">
              <p className="text-lg font-bold">Starting Date:</p>
              <p className="font-medium">
                {new Date(client.clientServiceStartedOn).toDateString()}
              </p>
            </div>
            <div className="flex items-center justify space-x-3 mb-2">
              <p className="text-lg font-bold">Client Location:</p>
              <p className="font-medium">{client.clientLocation.siteName}</p>
            </div>
            <div className="flex items-center justify space-x-3 mb-2">
              <p className="text-lg font-bold">GST Number:</p>
              <p className="font-medium">{client.clientGSTNo}</p>
            </div>
            <div className="flex items-center justify space-x-3 mb-2">
              <p className="text-lg font-bold">PAN Number:</p>
              <p className="font-medium">{client.clientPANNo}</p>
            </div>
          </div>
          <div className="flex items-center justify space-x-3 mt-3 mb-2">
            <p className="text-lg font-bold">Client Services:</p>
            <p className="font-medium">
              {client.clientServices.departmentName}
            </p>
          </div>
          <div className="flex items-center justify space-x-3 mb-2">
            <p className="text-lg font-bold">Billing Address:</p>
            <p className="font-medium">
              {client.clientBillHNo +
                ", " +
                client.clientBillStreet +
                ", " +
                client.clientBillVillage +
                ", " +
                client.clientBillMandal +
                ", " +
                client.clientBillCity +
                ", " +
                client.clientBillState +
                ", " +
                client.clientBillCountry +
                " - " +
                client.clientBillPincode +
                "."}
            </p>
          </div>
          <div className="flex items-center justify space-x-3 mb-2">
            <p className="text-lg font-bold">Shipping Address:</p>
            <p className="font-medium">
              {client.clientShipHNo +
                ", " +
                client.clientShipStreet +
                ", " +
                client.clientShipVillage +
                ", " +
                client.clientShipMandal +
                ", " +
                client.clientShipCity +
                ", " +
                client.clientShipState +
                ", " +
                client.clientShipCountry +
                " - " +
                client.clientShipPincode +
                "."}
            </p>
          </div>
          <div className="flex items-center justify space-x-3 mb-2">
            <p className="text-lg font-bold">Client Description:</p>
            <p className="font-medium">{client.clientDescription}</p>
          </div>
          <div className="flex items-center justify space-x-3 mb-2">
            <p className="text-lg font-bold">Total Employees:</p>
            <p className="font-medium">{client.clientEmployeeCount}</p>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default ViewClient;
